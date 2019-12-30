import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { Header, Overlay } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialCommunityIcons, AntDesign, Ionicons } from "@expo/vector-icons";
import Notice from "./notice";

export default class NotificationsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "",
            data: [
                { date: "2019/10/5", message: "from mohammed", image: null },
                { date: "2019/10/2", message: "from mohammed", image: null },
                { date: "2019/10/1", message: "from mohammed", image: null }
            ]
        };
    }

    GoToPageFriend = () => {
        this.props.navigation.navigate("FriendPage");
    };
    render() {
        console.log("current id : " + this.props.screenProps.idUser);
        return (
            <View style={styles.container}>
                <Header
                    containerStyle={{
                        backgroundColor: "#03A9F4"
                    }}
                    leftComponent={
                        <TouchableOpacity onPress={this.GoToPageFriend}>
                            <AntDesign name="team" size={32} color="#fff" />
                        </TouchableOpacity>
                    }
                    centerComponent={{
                        text: "Notification",
                        style: { color: "#fff", fontSize: 20, fontWeight: "bold" }
                    }}
                />

                <ScrollView style={{ flex: 1, backgroundColor: "#fefefe" }}>
                    {this.state.data.map((data, index) => (
                        <Notice key={index} date={data.data} message={data.message} image={data.image} />
                    ))}
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    welcome: {
        flex: 1,
        margin: 20,
        backgroundColor: "#fff",
        margin: 10,
        textAlign: "left",
        fontSize: 20,
        //paddingTop: 70,
        flexDirection: "row",
        borderBottomWidth: 1
    },
    welcomet: {
        flex: 1,
        //  margin: 20,
        backgroundColor: "#fff",
        //margin: 10,
        textAlign: "left",
        fontSize: 14,
        right: "25%",
        flexDirection: "row"
    },
    welcomehdr: {
        flex: 1,
        //  margin: 20,
        color: "#00BFFF",
        //margin: 10,
        textAlign: "left",
        fontSize: 20,
        right: "25%",
        flexDirection: "row"
    },
    welcomeend: {
        flex: 1,
        //  margin: 20,
        color: "gray",
        marginVertical: 5,
        textAlign: "left",
        fontSize: 12,
        right: "25%",
        flexDirection: "row"
    }
});
