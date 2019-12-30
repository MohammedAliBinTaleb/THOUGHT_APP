import React from "react";
import {
    StyleSheet,
    Text,
    Animated,
    View,
    ScrollView,
    SafeAreaView,
    TextInput,
    StatusBar,
    Dimensions,
    Image,
    TouchableOpacity
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Header, Overlay, SearchBar } from "react-native-elements";
import Post from "../components/post";
import AddPost from "../components/addPost";
import { compose } from "recompose";
import { AntDesign, Entypo, FontAwesome } from "@expo/vector-icons";
import { graphql } from "react-apollo";
import { displayAllpostFriend } from "../query/queries";
import LoadingPage from "./loadingPage";
import stylesScrean from "./style";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showAddPost: new Animated.Value(this.hightOfScrean),
            image: null
        };
    }
    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== "granted") {
                alert("Sorry, we need camera roll permissions to make this work!");
            }
        }
    };
    componentDidMount() {
        this.getPermissionAsync();
    }
    OpenAddPost = () => {
        Animated.timing(this.state.showAddPost, { toValue: 0 }).start();
    };
    CloseAddPost = () => {
        Animated.timing(this.state.showAddPost, { toValue: this.hightOfScrean }).start();
    };
    deleteImage = () => {
        this.setState({ image: null });
    };

    hightOfScrean = Dimensions.get("window").height;
    render() {
        let { post } = this.props;
        let { showAddPost } = this.state;
        if (post.loading) return <LoadingPage />;
        else if (post.error) return <Text>error</Text>;
        else {
            let { allpost } = post.user;
            return (
                <React.Fragment>
                    <SafeAreaView style={styles.container}>
                        <StatusBar barStyle="light-content" />
                        <Header
                            containerStyle={{
                                backgroundColor: "#03A9F4"
                            }}
                            rightComponent={
                                <TouchableOpacity onPress={this.OpenAddPost}>
                                    <Image source={require("../images/add.png")} style={{ width: 20, height: 20 }} />
                                </TouchableOpacity>
                            }
                        />
                        <View
                            style={{
                                width: "100%",
                                height: 50,
                                backgroundColor: "#03A9F4",
                                bottom: 1,
                                padding: 5
                            }}
                        >
                            <Text style={{ color: "#fff", fontSize: 24, fontWeight: "bold" }}>Time Line</Text>
                        </View>

                        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                            {allpost.map((post, index) => (
                                <Post post={post} username={post.from.username} key={index} />
                            ))}
                        </ScrollView>
                        <AddPost ref={"addPost"} />
                    </SafeAreaView>
                    <Animated.View style={[stylesScrean.addPostLayOut, { top: this.state.showAddPost }]}>
                        <View style={stylesScrean.spacebetweenRow}>
                            <View style={{ flexDirection: "row" }}>
                                <TouchableOpacity
                                    style={[stylesScrean.btn, stylesScrean.btnPadding, { marginRight: 10 }]}
                                >
                                    <Text style={{ color: "#fff" }}>Add Post</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[stylesScrean.btn, stylesScrean.btnPadding]}
                                    onPress={this._pickImage}
                                >
                                    <Entypo name="images" color="#fff" size={24} />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity onPress={this.CloseAddPost}>
                                <Text style={[stylesScrean.font24, stylesScrean.themeColor]}>X</Text>
                            </TouchableOpacity>
                        </View>
                        <TextInput
                            placeholder="What happend ?"
                            textAlignVertical={"top"}
                            style={{
                                width: "100%",
                                height: this.hightOfScrean / 4,
                                marginTop: 30,
                                fontSize: 18
                            }}
                            multiline={true}
                            numberOfLines={4}
                        />
                        <View style={stylesScrean.imagePanel}>
                            <Image source={{ uri: this.state.image }} style={{ width: "100%", height: "100%" }} />
                            {this.state.image != null && (
                                <TouchableOpacity style={stylesScrean.btnDelete} onPress={this.deleteImage}>
                                    <FontAwesome name="trash" color="#fff" size={32} />
                                </TouchableOpacity>
                            )}
                        </View>
                    </Animated.View>
                </React.Fragment>
            );
        }
    }
    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3]
        });

        console.log(result);

        if (!result.cancelled) {
            this.setState({ image: result.uri });
        }
    };
}

export default compose(
    graphql(displayAllpostFriend, {
        name: "post",
        options: props => {
            return {
                variables: {
                    id: props.screenProps.idUser
                }
            };
        }
    })
)(HomeScreen);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
        backgroundColor: "#ccc"
    },
    contentContainer: {
        position: "relative"
    }
});
