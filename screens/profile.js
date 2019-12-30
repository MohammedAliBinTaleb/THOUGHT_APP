import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, ImageBackground, Image } from "react-native";
import { Header } from "react-native-elements";
import { MaterialCommunityIcons, AntDesign, Ionicons } from "@expo/vector-icons";
import Post from "../components/post";
import { graphql, useQuery } from "react-apollo";
import { DisplayAllpostUser } from "../query/queries";
import LoadingPage from "./loadingPage";
class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const { idUser } = this.props.screenProps;
        // const { loading, error, data } = useQuery(DisplayAllpostUser, {
        //     variables: { id: idUser }
        // });
        const { screenProps, navigation, data } = this.props;
        const { loading, error, user } = data;
        if (data.loading) return <LoadingPage />;
        else if (data.error) return <Text>`error ${error}`</Text>;
        else {
            const { user } = data;
            console.log(user.posts);
            return (
                <View style={{ flex: 1, backgroundColor: "#ccc" }}>
                    <Header
                        centerComponent={{
                            text: "profile",
                            style: { color: "#fff", fontSize: 20, fontWeight: "bold" }
                        }}
                        rightComponent={
                            <TouchableOpacity onPress={this.props.screenProps.GoToLogin}>
                                <MaterialCommunityIcons name="export" color="#fff" size={25}></MaterialCommunityIcons>
                            </TouchableOpacity>
                        }
                        containerStyle={{
                            backgroundColor: "#03A9F4",
                            height: 85,
                            paddingTop: 40
                        }}
                    ></Header>
                    <ScrollView>
                        <View>
                            <ImageBackground
                                source={require("../images/leaf.jpg")}
                                style={{
                                    height: 225,
                                    width: "100%",
                                    alignItems: "center",
                                    paddingTop: 35
                                }}
                            >
                                <Image
                                    source={require("../images/girl.jpg")}
                                    style={{
                                        height: 100,
                                        width: 100,
                                        borderRadius: 50,
                                        borderWidth: 3,
                                        borderColor: "#fff"
                                    }}
                                ></Image>
                                <Text
                                    style={{
                                        color: "#fff",
                                        fontWeight: "bold",
                                        fontSize: 20,
                                        marginTop: 5
                                    }}
                                >
                                    {user.username}
                                </Text>
                                <Text style={{ color: "#fff", fontSize: 15, marginTop: 7 }}>Bio</Text>
                            </ImageBackground>
                        </View>
                        {user.posts.map(post => {
                            return (
                                <Post
                                    username={user.username}
                                    avatar={require("../images/girl.jpg")}
                                    post={post}
                                    key={post.id}
                                />
                            );
                        })}
                        {/* <Post avatar={require("../images/girl.jpg")} username="Name" text="Text" />
                        <Post
                            avatar={require("../images/girl.jpg")}
                            username="Name"
                            image={require("../images/pool.jpg")}
                            text="Welcome"
                        />
                        <Post avatar={require("../images/girl.jpg")} username="Name" text="Hi" /> */}
                    </ScrollView>
                </View>
            );
        }
    }
}
export default graphql(DisplayAllpostUser, {
    options: props => {
        return {
            variables: { id: props.screenProps.idUser }
        };
    }
})(Profile);
