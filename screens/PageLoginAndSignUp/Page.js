import React, { Component } from "react";
import { Text, View } from "react-native";
import LoginPage from "./PageLogin";
import SignUp from "./pageSignUp";

export default class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: true
        };
    }
    putToParent = id => {
        this.props.putID(id);
    };
    render() {
        return (
            <View style={{ flex: 1 }}>
                {this.state.toggle ? (
                    <LoginPage
                        putID={id => console.log(id)}
                        onPress={() => this.setState({ toggle: false })}
                        onPresBtn={id => this.props.ENTER_HOME(id)}
                    />
                ) : (
                    <SignUp onPress={() => this.setState({ toggle: true })} onPresBtnSignUp={this.props.ENTER_HOME} />
                )}
            </View>
        );
    }
}
