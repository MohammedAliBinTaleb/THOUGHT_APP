import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";

export default class LikeButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: 0,
            toggle: true,
            smile: "smile-circle",
            happy: "ios-happy",
            sad: "ios-sad",
            heart: "heart"
        };
    }

    render() {
        let bottom = Dimensions.get("screen").height / 4;
        return (
            <React.Fragment>
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "row"
                    }}
                >
                    <Text style={{ paddingRight: 10, textAlign: "center", fontSize: 15 }}>{this.props.likeCount}</Text>
                    <TouchableOpacity
                        onPress={this.props.onClick}
                        style={{
                            paddingRight: 4,
                            height: 32,
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                    >
                        <AntDesign name="hearto" style={{ fontSize: 25 }}></AntDesign>
                    </TouchableOpacity>
                </View>
            </React.Fragment>
        );
    }
}
LikeButton.defaultProps = {
    likeCount: 0
};
export function LikeItems() {
    return (
        <View
            style={{
                width: "100%",
                height: 160,
                alignItems: "flex-end",
                paddingRight: 10
            }}
        >
            <View
                style={{
                    backgroundColor: "#000",
                    width: 190,
                    borderRadius: 20,
                    position: "relative",
                    flexDirection: "column",
                    right: 0,
                    zIndex: 10,
                    opacity: 1
                }}
            >
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity>
                        <AntDesign name="smile-circle" style={styles.ant}></AntDesign>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="ios-happy" style={[styles.con, { marginLeft: 2 }]}></Ionicons>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="ios-sad" style={styles.con}></Ionicons>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <AntDesign name="heart" style={[styles.ant, { color: "red", marginLeft: 4 }]}></AntDesign>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: "row" }}>
                    <Image source={require("../images/girl.jpg")} style={styles.image}></Image>
                    <Image source={require("../images/girl2.jpg")} style={styles.image}></Image>
                    <Image source={require("../images/boy.jpg")} style={styles.image}></Image>
                    <Image source={require("../images/girl3.jpg")} style={styles.image}></Image>
                    <Image source={require("../images/boy2.jpg")} style={styles.image}></Image>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Image source={require("../images/boy3.jpg")} style={styles.image}></Image>
                    <Image source={require("../images/girl4.jpg")} style={styles.image}></Image>
                    <Image source={require("../images/boy4.jpg")} style={styles.image}></Image>
                    <Image source={require("../images/girl5.jpg")} style={styles.image}></Image>
                </View>
                <Text style={{ color: "gray", marginHorizontal: 30, marginTop: 6 }}>seen by 9 friends</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    ant: {
        fontSize: 33,
        color: "#ffc600",
        margin: 11
    },

    con: {
        fontSize: 40,
        color: "#ffc600",
        margin: 7
    },

    image: {
        height: 35,
        width: 35,
        marginLeft: 2,
        marginBottom: 2,
        marginTop: 0
    }
});
