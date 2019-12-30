import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import {
  MaterialCommunityIcons,
  AntDesign,
  Ionicons
} from "@expo/vector-icons";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import ChatsScreen from "../screens/ChatsScreen";
import Notifications from "../screens/Notifications";
import Profile from "../screens/profile";
import Page from "../screens/PageLoginAndSignUp/Page";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null
      }
    }
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: " ",
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={"home"} />
};

HomeStack.path = "";

const ChatsStack = createStackNavigator(
  {
    chats: {
      screen: ChatsScreen,
      navigationOptions: {
        header: null
      }
    }
  },
  config
);

ChatsStack.navigationOptions = {
  tabBarLabel: " ",
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={"mail"} />
};

ChatsStack.path = "";

const NotificationsStack = createStackNavigator(
  {
    notifications: {
      screen: Notifications,
      navigationOptions: {
        header: null
      }
    }
  },
  config
);

NotificationsStack.navigationOptions = {
  tabBarLabel: " ",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={"notification"} />
  )
};

NotificationsStack.path = "";

const profileStack = createStackNavigator(
  {
    profile: {
      screen: Profile,
      navigationOptions: {
        header: null,
        footer: null
      }
    },
    Login: {
      screen: Page,
      navigationOptions: {
        header: null
      }
    }
  },
  config
);

profileStack.navigationOptions = {
  tabBarLabel: " ",
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={"user"} />
};

profileStack.path = "";

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  ChatsStack,
  NotificationsStack,
  profileStack
});

tabNavigator.path = "";

export default tabNavigator;
