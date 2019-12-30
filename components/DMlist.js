import React from "react";
import { StyleSheet, Text, View, ScrollView, SafeAreaView, StatusBar, Image, TouchableOpacity } from "react-native";
import { Header, Overlay } from "react-native-elements";
import ChatUser from "./chatListTemp";
import { graphql } from "react-apollo";
import { compose } from "recompose";
import { followersUser } from "../query/queries";
import LoadingPage from "../screens/loadingPage";

class HomeScreen extends React.Component {
    render() {
        let { followers } = this.props;
        let { loading, error, user } = followers;

        console.log("screanProps : " + this.props.screenProps.idUser);
        if (loading) return <LoadingPage />;
        else if (error) return <Text>error{error}</Text>;
        else {
            let { Friends } = user;
            console.log(Friends);
            return (
                <SafeAreaView style={styles.container}>
                    <StatusBar barStyle="light-content" />
                    <Header
                        containerStyle={{
                            backgroundColor: "#03A9F4"
                        }}
                        rightComponent={
                            <TouchableOpacity onPress={this._onPressAdd}>
                                <Image
                                    source={require("../assets/images/newMessage.png")}
                                    style={{ width: 20, height: 20 }}
                                />
                            </TouchableOpacity>
                        }
                    />
                    <View style={{ width: "100%", height: 50, backgroundColor: "#03A9F4", bottom: 1, padding: 5 }}>
                        <Text style={{ color: "#fff", fontSize: 24, fontWeight: "bold" }}>Messages goo</Text>
                    </View>

                    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                        {Friends.map(({ info, lastMassage }) => {
                            let { username, id } = info;
                            console.log("lastMassage : " + lastMassage);
                            return (
                                <ChatUser
                                    onPress={() => {
                                        this.props.navigation.navigate("ChatPage", { FriendName: username, id });
                                    }}
                                    name={username}
                                    date={lastMassage}
                                    image={require("../assets/images/avatar.png")}
                                    key={id}
                                />
                            );
                        })}
                    </ScrollView>
                </SafeAreaView>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#efefef"
    },
    contentContainer: {}
});
export default compose(
    graphql(followersUser, {
        name: "followers",
        options: props => ({
            variables: {
                id: props.screenProps.idUser
            }
        })
    })
)(HomeScreen);
