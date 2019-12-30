import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { Header, Overlay } from "react-native-elements";
import Notice from "./notifaction/notice";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialCommunityIcons, AntDesign, Ionicons } from "@expo/vector-icons";
import NotifactionDir from "./notifaction/notifactionDir";
export default class Notifications extends React.Component {
    state = { text: "" };

    render() {
        return (
            <View style={styles.container}>
                <NotifactionDir screenProps={this.props.screenProps} />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    }
});
