import React, { Component } from "react";
import { Text, View, TouchableOpacity, Animated, Image } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
const maleIcon = require("../../assets/images/male.png");
const femaleIcon = require("../../assets/images/female.png");
export default class Gender extends Component {
    constructor(props) {
        super(props);

        this.state = {
            scaleMale: new Animated.Value(1),
            scaleFemal: new Animated.Value(1),
            toggle: true,
            gender: "male"
        };
    }
    IncreaseMaleAction = () => {
        Animated.timing(this.state.scaleMale, {
            toValue: 1.3,
            duration: 500
        }).start();
        this.DecreaseFemaleAction();
    };
    IncreaseFemaleAction = () => {
        Animated.timing(this.state.scaleFemal, {
            toValue: 1.3,
            duration: 500
        }).start();
        this.DecreaseMaleAction();
    };
    DecreaseMaleAction = () => {
        Animated.timing(this.state.scaleMale, {
            toValue: 1,
            duration: 500
        }).start();
    };
    DecreaseFemaleAction = () => {
        Animated.timing(this.state.scaleFemal, {
            toValue: 1,
            duration: 500
        }).start();
    };
    maleOrFemale = async () => {
        this.setState({ toggle: !this.state.toggle });
        this.state.toggle
            ? this.IncreaseMaleAction() && (await this.setState({ gender: "male" }))
            : this.IncreaseFemaleAction() && (await this.setState({ gender: "female" }));

        this.props.getGender(this.state.toggle);
    };
    componentDidMount() {
        this.maleOrFemale();
    }
    render() {
        return (
            <View style={{ marginVertical: 21 }}>
                <View
                    style={{
                        flexDirection: "row",
                        height: 90,
                        alignItems: "center",
                        margin: 10
                    }}
                >
                    <Animated.View style={{ transform: [{ scale: this.state.scaleMale }] }}>
                        <Text
                            style={{
                                textAlign: "center",
                                fontSize: 16,
                                color: "#119DC5",
                                fontWeight: "600"
                            }}
                        >
                            Male
                        </Text>
                        <TouchableOpacity
                            style={{
                                borderRadius: 50,
                                backgroundColor: "#119DC5",
                                height: 70,
                                width: 70,
                                marginRight: 5,
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                            onPress={this.maleOrFemale}
                        >
                            <Image source={maleIcon} style={{ width: 70, height: 70 }} />
                        </TouchableOpacity>
                    </Animated.View>
                    <Animated.View
                        style={{
                            transform: [{ scale: this.state.scaleFemal }],
                            marginLeft: 15
                        }}
                    >
                        <Text
                            style={{
                                textAlign: "center",
                                fontSize: 16,
                                color: "#e61134",
                                fontWeight: "600"
                            }}
                        >
                            Female
                        </Text>
                        <TouchableOpacity
                            style={{
                                borderRadius: 50,
                                backgroundColor: "#e61134",
                                height: 70,
                                width: 70,
                                marginRight: 5,
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                            onPress={this.maleOrFemale}
                        >
                            <Image source={femaleIcon} style={{ width: 70, height: 70 }} />
                        </TouchableOpacity>
                    </Animated.View>
                </View>
            </View>
        );
    }
}
