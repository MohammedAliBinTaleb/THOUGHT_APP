import { createStackNavigator, createAppContainer } from "react-navigation";

import DMlist from "./DMlist";
import ChatPage from "./ChatPage";
import ChatDpnd from "./ChatDpnd";

const Navigator = createStackNavigator({
    DMlist: {
        screen: DMlist,

        navigationOptions: {
            header: null
        }
    },
    ChatPage: {
        screen: ChatPage,
        navigationOptions: {
            header: null
        }
    },
    ChatDpnd: {
        screen: ChatDpnd,
        navigationOptions: {
            header: null
        }
    }
});

export default createAppContainer(Navigator);
