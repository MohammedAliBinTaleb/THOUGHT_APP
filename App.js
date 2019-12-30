import React, { useState } from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import AppNavigator from "./navigation/AppNavigator";
import Page from "./screens/PageLoginAndSignUp/Page";
import { ApolloClient, InMemoryCache } from "apollo-boost";
// import { InMemoryCache } from "apollo-cache-inmemory";
import { createNetworkInterface } from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { HttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { ApolloLink } from "apollo-link";
import ErrorBoundary from "./ErrorHandle";

const cache = new InMemoryCache();
const urlLocalHost = "http://10.150.30.162:3000/graphql";
const domainURL = "https://backend-thought.herokuapp.com/graphql";
const link = new HttpLink({
    uri: domainURL,
    credentials: "same-origin"
});
let client = new ApolloClient({
    link,
    cache
});
export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            login: true,
            isLoadingComplete: false,
            setLoadingComplete: false,
            idUser: ""
        };
    }
    GoToLogin = () => {
        this.setState({ login: true });
    };
    putToID = id => {
        console.log("new :" + id);
        console.log("before state id :" + this.state.id);
        this.setState({ id: id });
        console.log("new  state id :" + this.state.id);
        return id;
    };

    ENTER_HOME = id => {
        this.setState({ login: false, idUser: id }, () => console.log("after change :" + this.state.idUser));
        return id;
    };
    componentDidMount() {}
    render() {
        console.log("image :" + require("./images/1.jpg"));
        // this.state.idUser
        const screenProps = { id: "M" };
        const navigation = () => {
            GoToLogin: () => {
                this.setState({ login: true });
            };
        };
        return (
            <ApolloProvider client={client}>
                {this.state.login ? (
                    <Page putID={this.putID} ENTER_HOME={this.ENTER_HOME} />
                ) : (
                    <View style={{ flex: 1 }}>
                        {Platform.OS === "ios" && <StatusBar barStyle="default" />}
                        <AppNavigator
                            screenProps={{
                                idUser: this.state.idUser,
                                GoToLogin: () => this.setState({ login: true })
                            }}
                        />
                    </View>
                )}
            </ApolloProvider>
        );
    }
}
