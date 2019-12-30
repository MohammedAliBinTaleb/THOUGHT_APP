import React from "react";
import { Text, View, TextInput, TouchableOpacity, StatusBar, KeyboardAvoidingView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Gender from "./Gender";
import S from "../style";
import { allUser } from "../../query/queries";
import { graphql } from "react-apollo";
import LoadingPage from "../loadingPage";
class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            txt_username: "",
            txt_password: "",
            colorText: "#119DC5"
        };
    }
    onChangeUsername = txt => {
        this.setState({ txt_username: txt });
    };
    onChangePassword = txt => {
        this.setState({ txt_password: txt });
    };
    Valdition = (data, txt_username, txt_password) => {
        console.log("====================================");

        data.map(data => {
            if (txt_username === data.username && txt_password === data.password) {
                this.props.onPresBtn(data.id);
                this.props.putID(data.id);
                return;
            }
        });
        this.setState({ colorText: "red" });
        console.log(txt_username + " ==" + data.username + " and " + txt_password + "==" + data.password);
    };
    render() {
        let { txt_username, txt_password, colorText } = this.state;
        let { data } = this.props;
        let { users } = data;
        console.log(data);
        console.log("====================");
        console.log(data.error);
        console.log(typeof data.error);
        console.log("====================");
        // if (data.loading) {
        //     return <LoadingPage />;
        // } else if (data.error) {
        //     return (
        //         <View>
        //             <Text>{JSON.stringify(data.error)}</Text>
        //         </View>
        //     );
        // } else
        return (
            <KeyboardAvoidingView
                style={[S.container, { marginTop: StatusBar.currentHeight }]}
                behavior="padding"
                enabled
            >
                <Text style={S.textLogin}>Login</Text>

                <Input
                    color={colorText}
                    colornameIcon="user"
                    text="Username"
                    value={txt_username}
                    onChangeText={this.onChangeUsername}
                />
                <Input
                    color={colorText}
                    nameIcon="lock"
                    text="password"
                    value={txt_password}
                    onChangeText={this.onChangePassword}
                />
                {colorText === "red" && <Text style={S.txt_check}>check your username and password</Text>}
                <SignUpBtn onPress={() => this.Valdition(users, txt_username, txt_password)} />
                <Notification onPress={this.props.onPress} />
            </KeyboardAvoidingView>
        );
    }
}

const Notification = props => {
    const textcustom = { color: "#119DC5", fontSize: 18 };
    return (
        <View style={{ flexDirection: "row", marginVertical: 10 }}>
            <Text style={textcustom}>Create new Account ?</Text>
            <Text style={[textcustom, { fontWeight: "800" }]} onPress={props.onPress}>
                SignUp Here
            </Text>
        </View>
    );
};
const SignUpBtn = props => {
    return (
        <TouchableOpacity
            style={{
                width: "80%",
                marginTop: 25,
                padding: 5,
                borderRadius: 20,
                alignItems: "center",
                backgroundColor: "#119DC5"
            }}
            onPress={props.onPress}
        >
            <Text style={{ color: "#fff", fontSize: 28 }}>Login</Text>
        </TouchableOpacity>
    );
};

const Input = props => {
    return (
        <View
            style={{
                borderColor: props.color,
                borderWidth: 1,
                paddingVertical: 5,
                paddingHorizontal: 20,
                borderRadius: 50,
                width: "80%",
                flexDirection: "row",
                marginBottom: 15
            }}
        >
            <AntDesign name={props.nameIcon} size={32} color={"#119DC5"} />
            <TextInput
                placeholder={props.text}
                placeholderTextColor="#119DC5"
                style={{ flex: 6, marginLeft: 20, fontSize: 18, color: "#4ca6a6" }}
                value={props.value}
                onChangeText={props.onChangeText}
            />
        </View>
    );
};
export default graphql(allUser)(LoginPage);
