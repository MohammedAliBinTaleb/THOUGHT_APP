import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
export default class Comment extends React.Component {
    render() {
        return (
            <TouchableOpacity style={styles.container}>
                <View style={styles.images}>
                    <Image
                        source={require("../images/1.jpg")}
                        style={{
                            width: 30,
                            height: 30,
                            borderRadius: 50,
                            borderWidth: 2,
                            borderColor: "white"
                        }}
                    />

                    <Image
                        source={require("../images/2.png")}
                        style={{
                            width: 30,
                            height: 30,
                            borderRadius: 50,
                            borderWidth: 2,
                            borderColor: "white",
                            right: 20
                        }}
                    />

                    <Image
                        source={require("../images/3.png")}
                        style={{
                            width: 30,
                            height: 30,
                            borderRadius: 50,
                            borderWidth: 2,
                            borderColor: "white",
                            right: 40
                        }}
                    />

                    <Image
                        source={require("../images/4.jpg")}
                        style={{
                            width: 30,
                            height: 30,
                            borderRadius: 50,
                            borderWidth: 2,
                            borderColor: "white",
                            right: 60
                        }}
                    />
                    <View style={{ right: 50, flexDirection: "row", alignContent: "center" }}>
                        <Text style={{ marginRight: 10 }}>{this.props.commentCount}</Text>
                        <Text>comments</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}
Comment.defaultProps = {
    commentCount: 0
};
const styles = StyleSheet.create({
    container: {
        flex: 3,
        flexDirection: "row",
        justifyContent: "center"
    },
    images: {
        flexDirection: "row",
        flex: 1,
        alignItems: "center"
    },
    like: {
        flex: 1
    }
});
