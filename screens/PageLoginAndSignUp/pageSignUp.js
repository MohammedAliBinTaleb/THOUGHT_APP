import React from "react";
import PropTypes from "prop-types";
import { Text, View, TextInput, TouchableOpacity, StatusBar, KeyboardAvoidingView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Gender from "./Gender";
import { compose } from "recompose";
import { graphql } from "react-apollo";
import { allUser, AddNewUser, chatPane, DisplayAllpostUser, displayAllpostFriend } from "../../query/queries";
import S from "../style";
import Snackbar from "react-native-snackbar-component";

class PageSignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fullname: "",
            username: "",
            password: "",
            email: "",
            checkRepeat: true,
            age: 0,
            gender: "",
            colorUser: "#119DC5",
            colorEmail: "#119DC5",
            colorPass: "#119DC5"
        };
    }
    saveFullName = txt => {
        this.setState({ fullname: txt });
    };
    saveUsername = txt => {
        this.setState({ username: txt });
    };
    IsUsernameUsed = () => {
        this.setState({ colorUser: "#119DC5" });
        this.props.users.users.map(data => {
            if (this.state.username === data.username) {
                this.setState({ colorUser: "red" }, () => console.log("it already use"));
                return;
            }
        });
    };
    saveEmail = txt => {
        this.setState({ email: txt });
    };
    savePasswrod = txt => {
        this.setState({ password: txt });
    };
    saveAge = txt => {
        this.setState({ age: parseInt(txt) });
    };
    IsPasswordSame = txt => {
        this.state.password === txt
            ? this.setState({ checkRepeat: false, colorPass: "#119DC5" })
            : this.setState({ checkRepeat: true, colorPass: "red" });
    };
    submitNewAccount = async () => {
        if (
            !this.state.checkRepeat &&
            this.EmailFormCheck &&
            this.state.username != null &&
            this.state.password != null &&
            this.state.fullname != null
        ) {
            if (this.props.addUser.error) console.log("error");
            console.log("correct");
            const value = {
                fullname: this.state.fullname,
                username: this.state.username,
                gender: this.state.gender ? "male" : "female",
                email: this.state.email,
                password: this.state.password,
                age: this.state.age
            };
            console.log(value);
            await this.props
                .addUser({
                    variables: {
                        fullname: this.state.fullname,
                        username: this.state.username,
                        gender: this.state.gender ? "male" : "female",
                        email: this.state.email,
                        password: this.state.password,
                        age: this.state.age
                    },
                    refetchQueries: [{ query: allUser }, { query: displayAllpostFriend }, { query: DisplayAllpostUser }]
                })
                .then(d => {
                    console.log("correct");
                    console.log("data :" + d);
                    this.props.onPress();
                })
                .catch(e => console.log("error 2:" + e));
        } else {
            console.log("wrong");
        }
    };
    EmailFormCheck = txt => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(this.state.email) === false) {
            this.setState({ colorEmail: "red" });
            console.log("error :" + this.state.email);
            return true;
        } else {
            console.log("correct");
            this.setState({ colorEmail: "#119DC5" });
            return false;
        }
    };
    render() {
        const { username, fullname, password, gender, age, email, colorPass } = this.state;
        const { users, addUser } = this.props;
        return (
            <KeyboardAvoidingView
                style={[S.container, { marginTop: StatusBar.currentHeight }]}
                behavior="padding"
                enabled
            >
                <Text style={S.textLogin}>SignUp</Text>

                <Gender getGender={gender => console.log("gender() :" + gender)} />
                <Input nameIcon="user" text="Full Name" value={fullname} onChangeText={this.saveFullName} />
                <Input
                    color={this.state.colorUser}
                    nameIcon="infocirlceo"
                    text="Username"
                    value={username}
                    onEndEditing={this.IsUsernameUsed}
                    onChangeText={this.saveUsername}
                />
                <Input
                    color={this.state.colorEmail}
                    nameIcon="mail"
                    text="Email"
                    onEndEditing={this.EmailFormCheck}
                    value={email}
                    onChangeText={this.saveEmail}
                />
                <InputPassword
                    color={colorPass}
                    nameIcon="lock"
                    text="Password"
                    value={password}
                    onChangeText={this.savePasswrod}
                />
                <InputPassword
                    color={colorPass}
                    nameIcon="lock"
                    text="Password-repeat"
                    onChangeText={this.IsPasswordSame}
                />
                <Input nameIcon="calendar" text="Age" value={age} onChangeText={this.saveAge} />

                <SignUpBtn onPress={this.submitNewAccount} />
                <Notification onPress={this.props.onPress} />
            </KeyboardAvoidingView>
        );
    }
    // this.props.onPresBtnSignUp
}

const Notification = props => {
    const textcustom = { color: "#119DC5", fontSize: 18 };
    return (
        <View style={{ flexDirection: "row", marginVertical: 10 }}>
            <Text style={textcustom}>Already have an account ?</Text>
            <Text style={[textcustom, { fontWeight: "800" }]} onPress={props.onPress}>
                Login Here
            </Text>
        </View>
    );
};
const SignUpBtn = props => {
    return (
        <TouchableOpacity
            style={{
                width: "80%",
                marginTop: 5,
                padding: 5,
                borderRadius: 20,
                alignItems: "center",
                backgroundColor: "#119DC5"
            }}
            onPress={props.onPress}
        >
            <Text style={{ color: "#fff", fontSize: 28 }}>SignUp</Text>
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
            <AntDesign name={props.nameIcon} size={32} color={props.color} />
            <TextInput
                placeholder={props.text}
                placeholderTextColor="#119DC5"
                value={props.value}
                onEndEditing={props.onEndEditing}
                onChangeText={props.onChangeText}
                style={{ flex: 6, marginLeft: 20, fontSize: 18, color: props.color }}
            />
        </View>
    );
};
Input.defaultProps = {
    color: "#119DC5"
};

const InputPassword = props => {
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
                secureTextEntry={true}
                placeholder={props.text}
                value={props.value}
                onChangeText={props.onChangeText}
                placeholderTextColor="#119DC5"
                style={{ flex: 6, marginLeft: 20, fontSize: 18, color: "#4ca6a6" }}
            />
        </View>
    );
};
InputPassword.defaultProps = {
    color: "#119DC5"
};
export default compose(
    graphql(allUser, { name: "users" }),
    graphql(AddNewUser, { name: "addUser" })
)(PageSignUp);
