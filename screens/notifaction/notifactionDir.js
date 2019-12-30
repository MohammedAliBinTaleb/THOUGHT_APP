import React, { Component } from "react";
import { Text, View } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";
import NotificationsPage from "./notifactionPage";
import FriendPage from "./MyApp";

let AllPage = createStackNavigator(
    {
        notifactionPage: NotificationsPage,
        FriendPage: FriendPage
    },
    {
        initialRouteName: "notifactionPage",
        defaultNavigationOptions: {
            header: null
        }
    }
);

export default createAppContainer(AllPage);
