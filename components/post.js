import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import LikeButton, { LikeItems } from "./activity";
import PropTypes from "prop-types";
import Comment from "./likes";
export default class Post extends React.Component {
    state = {
        toggle: false
    };
    onShow = () => {
        this.setState({ toggle: !this.state.toggle });
    };
    render() {
        return (
            <React.Fragment>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <View style={styles.user}>
                            <Image source={this.props.avatar} style={styles.square} />
                            <Text>{this.props.username}</Text>
                        </View>
                        <View style={styles.date}>
                            <Text>{this.props.post.date} ago</Text>
                        </View>
                    </View>
                    <View style={styles.body}>
                        <Image source={{ uri: this.props.post.image }} style={styles.imagePost} />
                        <Text>{this.props.post.text}</Text>
                    </View>
                    <View style={styles.foter}>
                        <Comment commentCount={this.props.post.comment} />
                        <LikeButton onClick={this.onShow} likeCount={this.props.post.like} />
                    </View>
                </View>
                {this.state.toggle && <LikeItems />}
            </React.Fragment>
        );
    }
}
Post.defaultProps = {
    avatar: require("../assets/images/avatar.png")
};
const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: "#fff",
        padding: 5,
        margin: 10,
        zIndex: 2,
        position: "relative",
        //  elevation: 2,
        height: "80%",
        borderRadius: 10
    },
    header: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginBottom: 8
    },
    user: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center"
    },
    square: {
        width: 30,
        height: 30,
        borderRadius: 50,
        marginRight: 5
    },
    body: {
        flex: 4,
        marginBottom: 8
    },
    imagePost: {
        width: "100%"
    },
    foter: {
        height: 50,
        flexDirection: "row",
        justifyContent: "space-between"
    }
});
