import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";

export default class LoadingPage extends Component {
    render() {
        return (
            <View style={styles.page}>
                <Text style={styles.txt}> Loading ....</Text>
                <Image source={require("../assets/images/loading.gif")} style={{ width: 128, height: 128 }} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    page: {
        justifyContent: "center",
        flex: 1,
        alignItems: "center",
        backgroundColor: "#119DC5"
    },
    txt: {
        color: "#fff",
        fontSize: 45,
        marginBottom: 10,
        fontWeight: "bold"
    }
});
