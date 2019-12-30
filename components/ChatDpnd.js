import React from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { View, Text, TextInput, TouchableOpacity, StatusBar, KeyboardAvoidingView } from "react-native";
import { graphql } from "react-apollo";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { compose } from "recompose";
import { chatPane, addMassage, followersUser } from "../query/queries";
import { ScrollView } from "react-native-gesture-handler";
import S from "../screens/style";
import LoadingPage from "../screens/loadingPage";
let converter = require("../tools/converterDate");
class ChatDpnd extends React.Component {
    state = {
        text: ""
    };

    onSend = () => {
        const { idUser, idFriend } = this.props;
        console.log("information:");
        console.log("idFrom :" + idUser);
        console.log("idTo :" + idFriend);
        console.log("text :" + this.state.text);
        console.log("massage function :" + this.props.AddMassage);

        this.props.AddMassage({
            variables: { fromID: idUser, toID: idFriend, text: this.state.text },
            awaitRefetchQueries: true,
            refetchQueries: [
                {
                    query: chatPane,
                    variables: { idUser: idUser, idFriend: idFriend }
                },
                {
                    query: chatPane,
                    variables: { idUser: idFriend, idFriend: idUser }
                },
                {
                    query: followersUser,
                    variables: { id: idUser }
                }
            ]
        });
        this.setState({ text: "" });
    };
    render() {
        let { chatpane } = this.props;
        let { loading, error } = chatpane;

        console.log(this.props.chatpane);
        if (loading) return <LoadingPage />;
        else if (error) return <Text>Error</Text>;
        {
            let { chatPanel } = chatpane;

            return (
                <View>
                    <ScrollView
                        ref={ref => (this.scrollView = ref)}
                        onContentSizeChange={(contentWidth, contentHeight) => {
                            this.scrollView.scrollToEnd({ animated: true });
                        }}
                        scrollEnabled={true}
                        style={{ height: "90%" }}
                    >
                        {chatPanel.map((massage, index) => {
                            console.log(massage);
                            return <Chat massage={massage} userID={this.props.idUser} key={massage.id} />;
                        })}
                    </ScrollView>

                    <View
                        style={{
                            backgroundColor: "#efefef",
                            flexDirection: "row",
                            width: "100%",
                            height: "10%"
                        }}
                    >
                        <TextInput
                            style={{ flex: 5, paddingLeft: 10 }}
                            value={this.state.text}
                            onChangeText={txt => this.setState({ text: txt })}
                        />
                        <TouchableOpacity style={{ flex: 1, padding: 5 }} onPress={this.onSend}>
                            <FontAwesome name="send" size={32} color="#119DC5" />
                        </TouchableOpacity>
                    </View>
                </View>
            );
        }
    }
}
let num = 0;
const Chat = ({ massage, userID }) =>
    massage.from.id === userID.toString() ? (
        <Massage time={massage.time} text={massage.text} align={"flex-start"} right={300} color={"#03A9F4"} />
    ) : (
        <Massage time={massage.time} text={massage.text} align={"flex-end"} left={200} color={"#fff"} />
    );
const Massage = props => {
    return (
        <View
            style={{
                width: "100%",
                marginTop: 10,
                justifyContent: "center",
                marginRight: props.right,
                marignLeft: props.left,
                alignItems: props.align
            }}
        >
            <View
                style={{
                    position: "relative",
                    backgroundColor: props.color,
                    marginHorizontal: 10,
                    borderRadius: 5,
                    padding: 5
                }}
            >
                <Text style={{ fontSize: 18, paddingVertical: 15, paddingRight: 10, fontWeight: "bold" }}>
                    {props.text}
                </Text>
                <Text style={{ fontSize: 12, color: "#323232", position: "absolute", bottom: 3, left: 7 }}>
                    {converter.convertDateInto_time_HH_MM(props.time)}
                </Text>
            </View>
        </View>
    );
};
//idUser: "", idFriend: ""
export default compose(
    graphql(chatPane, {
        name: "chatpane",
        options: props => {
            return {
                variables: {
                    idUser: props.idUser,
                    idFriend: props.idFriend
                },
                pollInterval: 5000
            };
        }
    }),
    graphql(addMassage, { name: "AddMassage" })
)(ChatDpnd);
