import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import ChatDpnd from "./ChatDpnd";
import { Header } from "react-native-elements";
import { graphql } from "react-apollo";
import { compose } from "recompose";
import { followersUser } from "../query/queries";
class ChatPage extends React.Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                {/*view for header box*/}

                <Header
                    containerStyle={{
                        backgroundColor: "#03A9F4"
                    }}
                    leftComponent={
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("DMlist")}>
                            <Image source={require("../assets/images/back.png")} style={{ width: 20, height: 20 }} />
                        </TouchableOpacity>
                    }
                    centerComponent={{
                        text: navigation.getParam("FriendName"),
                        style: { color: "white", fontSize: 24 }
                    }}
                />

                <KeyboardAvoidingView
                    style={{
                        flex: 5,
                        backgroundColor: "#E7E8EF",
                        width: "100%",
                        justifyContent: "center",
                        alignContent: "center"
                    }}
                >
                    <ChatDpnd idFriend={navigation.getParam("id")} idUser={this.props.screenProps.idUser} />
                </KeyboardAvoidingView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});
export default ChatPage;
