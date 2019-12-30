import React, { Component } from "react";
import { Text, View, Animated, TouchableOpacity } from "react-native";
import Overlay from "./overlay";
import FriednListPage from "./FriendListPage";
import { graphql, useQuery } from "react-apollo";
import { compose } from "recompose";
import { followersUser, changeFav, searchByName } from "../../query/queries";
import FriendListPage from "./FriendListPage";
import LoadingPage from "../loadingPage";
import { SearchBar, Header } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
import SeachFriend from "./SeachFriend";

class FriendPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visiblity: true,
            displayItems: true,
            scale: new Animated.Value(0.01),
            opacity: new Animated.Value(1),
            username: "",
            id: "",
            color: new Animated.Value(0),
            txt_search: "",
            IsVisibalie: false
        };
    }
    MoveUp = () => {
        Animated.timing(this.state.scale, {
            toValue: 0,
            duration: 500
        }).start(() => {
            Animated.timing(this.state.color, {
                toValue: 0,
                duration: 1000
            }).start(() => this.setState({ IsVisibalie: false }));
        });
    };
    ShowPage = async (username, id) => {
        this.setState({ IsVisibalie: true, username: username, id: id });
        Animated.timing(this.state.color, {
            toValue: 2,
            duration: 2000
        }).start(() => {
            Animated.timing(this.state.scale, {
                toValue: 1,
                duration: 1000
            }).start();
        });
    };
    DeleteItems = index => {
        let items = this.state.ListFriend;
        items.splice(index, 1);
        this.setState({ ListFriend: items });
    };
    NameUser = "";
    saveprofileName = value => {
        setNameUser(value);
    };
    getNameUser = () => {
        return this.NameUser;
    };
    setNameUser = txt => {
        this.NameUser = txt;
    };
    changeStar = id => {
        let idUser = this.props.screenProps.idUser;
        console.log("changed");
        console.log("idUser : " + idUser);
        console.log("idFriend : " + id);
        this.props.changeFav({
            variables: {
                UserID: idUser,
                followerID: id
            },
            refetchQueries: [{ query: followersUser, variables: { id: idUser } }]
        });
        console.log("changed new value");
    };
    DisplaySearchName = () => {
        this.setState({ displayItems: false });
    };
    onSetTxt_search = txt => {
        this.setState({ txt_search: txt });
        console.log(this.state.txt_search);
    };
    GoToNotifactionPage = () => {
        this.props.navigation.navigate("notifactionPage");
    };
    render() {
        let { friend } = this.props;
        let { username, txt_search } = this.state;
        if (friend.loading) return <LoadingPage />;
        else if (friend.error) return <Text>error {friend.error}</Text>;
        else {
            let { Friends } = friend.user;
            let { info } = Friends;
            return (
                <View style={{ flex: 1 }}>
                    <Header
                        leftComponent={
                            <TouchableOpacity onPress={this.GoToNotifactionPage}>
                                <AntDesign name={"left"} color={"#fff"} size={25} />
                            </TouchableOpacity>
                        }
                        centerComponent={<Text style={{ color: "#fff", fontSize: 20 }}>Friends</Text>}
                    />
                    <SeachFriend value={txt_search} onChangeText={this.onSetTxt_search} />
                    {this.state.displayItems ? (
                        <FriendListPage ListFriend={Friends} DisplayLayout={this.ShowPage} onStar={this.changeStar} />
                    ) : null}
                    {this.state.IsVisibalie && (
                        <Overlay
                            username={username}
                            opacity={this.state.opacity}
                            scale={this.state.scale}
                            onPress={this.MoveUp}
                            color={this.state.color.interpolate({
                                inputRange: [0, 2],
                                outputRange: ["rgba(0, 0, 0,0)", "rgba(0, 0, 0,0.7)"]
                            })}
                        />
                    )}
                </View>
            );
        }
    }
}
export default compose(
    graphql(followersUser, {
        name: "friend",
        options: props => {
            return {
                variables: { id: props.screenProps.idUser }
            };
        }
    }),
    graphql(changeFav, { name: "changeFav" })
)(FriendPage);
