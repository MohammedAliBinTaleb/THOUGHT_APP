import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Navigator from "../components/navigator";

export default class ChatsScreen extends React.Component {
    state = { text: "", followername: "" };
    friend = "";
    setFriend = name => {
        this.friend = name;
    };
    render() {
        return (
            <Navigator
                screenProps={{
                    idUser: this.props.screenProps.idUser
                }}
            />
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
