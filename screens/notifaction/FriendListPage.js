import React, { Component } from "react";
import { Text, View, Image, TouchableHighlight, TouchableOpacity, Dimensions } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import { Rating } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";

const hight9 = Dimensions.get("screen").height / 10;
export default class FriendListPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ListFriend: [
                {
                    Name: "Moahmmed",
                    image: require("./femaleIcon.png")
                },
                {
                    Name: "Hussian",
                    image: require("./femaleIcon.png")
                },
                {
                    Name: "Ahmed",
                    image: require("./femaleIcon.png")
                },
                {
                    Name: "Ali",
                    image: require("./femaleIcon.png")
                },
                {
                    Name: "Nora",
                    image: require("./femaleIcon.png")
                },
                {
                    Name: "Abdulaziz",
                    image: require("./femaleIcon.png")
                },
                {
                    Name: "Ahmed",
                    image: require("./femaleIcon.png")
                },
                {
                    Name: "Ali",
                    image: require("./femaleIcon.png")
                }
            ]
        };
    }
    
    render() {
        return (
            <View style={{ flex: 1 }}>
                <SwipeListView
                    // extraData={this.state.ListFriend}
                    style={{ flex: 1, backgroundColor: "#ccc" }}
                    data={this.props.ListFriend}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={(data, index) => {
                        let { info, fav } = data.item;
                        let { username, id } = info;
                        let favNum = fav ? 1 : 0;
                        return (
                            <ContractFile
                                name={username}
                                key={id}
                                fav={favNum}
                                onStar={() => this.props.onStar(id)}
                                onPress={() => this.props.DisplayLayout(username, id)}
                            />
                        );
                    }}
                    //() => this.props.DisplayLayout(data.item.Name)
                    renderHiddenItem={(data, rowMap) => (
                        <TouchableHighlight
                            style={{
                                alignItems: "flex-end",
                                height: hight9,
                                marginVertical: 2,
                                backgroundColor: "#EE3E3C"
                            }}
                            onPress={() => this.props.DeleteItems(data.index)}
                        >
                            <View style={{ height: "100%", justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ fontSize: 25, color: "#fff" }}>Delete</Text>
                            </View>
                        </TouchableHighlight>
                    )}
                    // disableLeftSwipe={true}
                    leftOpenValue={0}
                    rightOpenValue={-75}
                />
            </View>
        );
    }
}
let NameUser = "";

let saveprofileName = value => {
    setNameUser(value);
};
let getNameUser = () => {
    return NameUser;
};
let setNameUser = txt => {
    NameUser = txt;
};
module.exports.getNameUser = getNameUser;
ContractFile = props => {
    return (
        <View
            style={{
                width: "100%",
                height: hight9,
                flexDirection: "row",
                backgroundColor: "#fff",
                alignItems: "center",
                marginVertical: 0,
                paddingHorizontal: 10
            }}
        >
            <Image
                style={{ borderRadius: 50 }}
                style={{ width: 32, height: 32, borderRadius: 50 }}
                source={require("./femaleIcon.png")}
            />
            <Text style={{ marginLeft: 20, fontSize: 18, fontWeight: "700", flex: 3 }} onPress={props.onPress}>
                {props.name}
            </Text>
            <Rating
                ratingCount={1}
                startingValue={props.fav}
                style={{ flex: 1 }}
                ratingColor="#3498db"
                imageSize={32}
                onFinishRating={props.onStar}
            />
        </View>
    );
};
// compose(
//     graphql(followersUser, {
//         name: "friend",
//         options: props => {
//             return {
//                 variables: {
//                     // id: props.screenProps.idUser
//                 }
//             };
//         }
//     }))
