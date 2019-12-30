import React, { Component } from "react";
import {
    Text,
    Animated,
    View,
    ImageBackground,
    TouchableNativeFeedback,
    StatusBar,
    TouchableHighlight,
    TouchableOpacity,
    ScrollView,
    Image,
    Dimensions
} from "react-native";
import s from "../style";

export default class overlay extends Component {
    constructor(props) {
        super(props);

        this.state = {
            scale: new Animated.Value(0),
            opacity: new Animated.Value(0)
        };
    }
    maxHieght = Dimensions.get("screen").height * 10;

    render() {
        return (
            <Animated.View
                style={[s.overlayBackground, { opacity: this.props.opacity, backgroundColor: this.props.color }]}
            >
                <Animated.View
                    style={[
                        { flex: 1, justifyContent: "center", alignItems: "center" },
                        {
                            transform: [
                                {
                                    scale: this.props.scale.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [0, 1]
                                    })
                                }
                            ]
                        }
                    ]}
                >
                    <CloseButton onPress={this.props.onPress} />
                    <View style={s.overlayContianer}>
                        <ImageBackground
                            style={s.imageBackgroundStyle}
                            source={require("./background.jpg")}
                            imageStyle={{ height: "100%" }}
                        >
                            <Image
                                source={require("./femaleIcon.png")}
                                style={{ width: 90, height: 90, borderRadius: 50 }}
                            />

                            <Text style={{ color: "#fff", fontSize: 27, marginBottom: 30 }}>{this.props.username}</Text>
                            <View style={{ flexDirection: "row" }}>
                                <TouchableOpacity
                                    style={{
                                        alignItems: "center",
                                        padding: 10,
                                        width: "35%",
                                        marginRight: 10,
                                        backgroundColor: "#09190E"
                                    }}
                                >
                                    <Text style={{ color: "#fff", fontSize: 16 }}>Message</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{
                                        alignItems: "center",
                                        padding: 10,
                                        width: "35%",
                                        backgroundColor: "#09190E"
                                    }}
                                >
                                    <Text style={{ color: "#fff", fontSize: 16 }}>Visit</Text>
                                </TouchableOpacity>
                            </View>
                        </ImageBackground>
                        <Text style={{ textAlign: "center" }}>Contract</Text>
                        <View style={{ height: "50%" }}>
                            <ScrollView
                                contentContainerStyle={{ backgroundColor: "#fff", justifyContent: "center" }}
                                scrollEnabled
                            >
                                <ContractFile name={"Mohammed"} />
                                <ContractFile name={"John"} />
                                <ContractFile name={"Khalid"} />
                                <ContractFile name={"Ahmed"} />
                                <ContractFile name={"nora"} />
                            </ScrollView>
                        </View>
                    </View>
                </Animated.View>
            </Animated.View>
        );
    }
}

ContractFile = props => {
    return (
        <View
            style={{
                width: "100%",
                height: 60,
                flexDirection: "row",
                backgroundColor: "#ccc",
                alignItems: "center",
                marginVertical: 2,
                paddingHorizontal: 10
            }}
        >
            <Image source={require("./femaleIcon.png")} style={{ width: 35, height: 35, borderRadius: 50 }} />
            <Text style={{ marginLeft: 20, fontSize: 18, fontWeight: "700" }}>{props.name}</Text>
        </View>
    );
};
CloseButton = props => {
    const top = StatusBar.currentHeight + 10;
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={{ position: "absolute", top: top, right: 10, width: 50, height: 50 }}
        >
            <Text style={{ fontSize: 32, color: "#fff" }}>X</Text>
        </TouchableOpacity>
    );
};
