import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import ChatDpnd from "./ChatDpnd";
import {
    convertDateInto_time_HH_MM,
    convertDateIntoRelativeTime,
    convertDateInto_YYYY_MM_DD
} from "../tools/converterDate";
export default class ChatUser extends React.Component {
    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
                <View style={styles.name}>
                    <Text style={styles.userName}>{this.props.name}</Text>
                    <Text style={styles.date}>{convertDateIntoRelativeTime(this.props.date)}</Text>
                </View>
                <View style={styles.pic}>
                    <Image source={this.props.image} style={styles.userImg} />
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        padding: 10,
        justifyContent: "space-evenly",
        backgroundColor: "white",
        borderRadius: 10,
        margin: 5
    },
    name: {
        flex: 4
    },
    pic: {
        flex: 1,
        alignItems: "flex-end"
    },
    userImg: {
        width: 40,
        height: 40
    },
    userName: {
        fontSize: 20,
        fontWeight: "600"
    },
    date: {
        color: "gray"
    }
});
