import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { AntDesign, Ionicons } from "@expo/vector-icons"
import styles from './style'



export default class poster extends Component {
    constructor(props) {
        super(props)

        this.state = {
            show: 0,
            show2: 1,
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            colored: 'black',
            toggle: true,
        }
    }

    onPress = () => {
        if (this.state.toggle)
            this.setState({ show: 1, toggle: false });
        else {
            this.setState({ show: 0, toggle: true });
        }
    }

    onClick1 = () => {
        if (this.state.toggle)
            this.setState({ show: 1, show2: 1, op1: 0, toggle: false });
        else {
            this.setState({ show: 0, show2: 0, op1: 1, op2: 0, op3: 0, op4: 0, toggle: true });
        }
    }
    onClick2 = () => {
        if (this.state.toggle)
            this.setState({ show: 1, show2: 1, op2: 0, toggle: false });
        else {
            this.setState({ show: 0, show2: 0, op1: 0, op2: 1, op3: 0, op4: 0, toggle: true });
        }
    }
    onClick3 = () => {
        if (this.state.toggle)
            this.setState({ show: 1, show2: 1, op3: 0, toggle: false });
        else {
            this.setState({ show: 0, show2: 0, op1: 0, op2: 0, op3: 1, op4: 0, toggle: true });
        }
    }
    onClick4 = () => {
        if (this.state.toggle)
            this.setState({ show: 1, show2: 1, op4: 0, toggle: false });
        else {
            this.setState({ show: 0, show2: 0, op1: 0, op2: 0, op3: 0, op4: 1, toggle: true });
        }
    }


    render() {
        return (
            <View>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <View style={styles.user}>
                            <Image source={this.props.avatar}
                                style={styles.square}
                            />
                            <Text>{this.props.username}</Text>
                        </View>
                        <View style={styles.date}>
                            <Text>2 years ago</Text>
                        </View>
                    </View>
                    <View style={styles.body}>
                        <Image source={this.props.image}
                            style={styles.imagePost}
                        />
                        <Text>{this.props.text}</Text>
                    </View>
                    <View style={styles.foter}>

                    </View>




                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                            <View>
                                <Image source={require('../images/boy2.jpg')} style={{ height: 30, width: 30, borderRadius: 15 }}></Image>
                            </View>
                            <View style={{ right: 10 }}>
                                <Image source={require('../images/girl2.jpg')} style={{ height: 30, width: 30, borderRadius: 15 }}></Image>
                            </View>
                            <View style={{ right: 20 }}>
                                <Image source={require('../images/boy.jpg')} style={{ height: 30, width: 30, borderRadius: 15 }}></Image>
                            </View>
                            <View style={{ right: 30 }}>
                                <Image source={require('../images/girl3.jpg')} style={{ height: 30, width: 30, borderRadius: 15 }}></Image>
                            </View>
                            <View style={{ top: 12 }}>
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 15 }}>Comments</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ top: 13, flexDirection: 'row-reverse' }}>
                            <TouchableOpacity onPress={this.onPress}>
                                <AntDesign name='hearto' style={{ fontSize: 28, position: 'absolute', left: 60, color: this.state.colored, opacity: this.state.show2 }} ></AntDesign>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.emoji} onPress={this.onPress}>
                            <AntDesign style={[styles.emoji, { opacity: this.state.op1, fontSize: 25, margin: 3 }]} name="smile-circle"></AntDesign>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.emoji} onPress={this.onPress}>
                            <Ionicons style={[styles.emoji, { opacity: this.state.op2, fontSize: 30 }]} name="ios-happy"></Ionicons>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.emoji} onPress={this.onPress}>
                            <Ionicons style={[styles.emoji, { opacity: this.state.op3, fontSize: 30 }]} name="ios-sad" ></Ionicons>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.onPress}>
                            <AntDesign name="heart" style={{ color: 'red', marginLeft: 4, fontSize: 30, opacity: this.state.op4 }}></AntDesign>
                        </TouchableOpacity>

                    </View>


                </View>

                <View style={{
                    backgroundColor: 'black', height: 160, width: 190, borderRadius: 20,
                    position: 'absolute', flexDirection: 'column', right: 40, bottom: 0, zIndex: 2, opacity: this.state.show
                }}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={this.onClick1}>
                            <AntDesign name="smile-circle" style={styles.ant}></AntDesign>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.onClick2}>
                            <Ionicons name="ios-happy" style={[styles.con, { marginLeft: 2 }]}></Ionicons>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.onClick3}>
                            <Ionicons name="ios-sad" style={styles.con}></Ionicons>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.onClick4}>
                            <AntDesign name="heart" style={[styles.ant, { color: 'red', marginLeft: 4 }]}></AntDesign>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: "row" }}>
                        <Image source={require('../images/girl.jpg')} style={styles.image}></Image>
                        <Image source={require('../images/girl2.jpg')} style={styles.image}></Image>
                        <Image source={require('../images/boy.jpg')} style={styles.image}></Image>
                        <Image source={require('../images/girl3.jpg')} style={styles.image}></Image>
                        <Image source={require('../images/boy2.jpg')} style={styles.image}></Image>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Image source={require('../images/boy3.jpg')} style={styles.image}></Image>
                        <Image source={require('../images/girl4.jpg')} style={styles.image}></Image>
                        <Image source={require('../images/boy4.jpg')} style={styles.image}></Image>
                        <Image source={require('../images/girl5.jpg')} style={styles.image}></Image>
                    </View>
                    <Text style={{ color: 'gray', marginHorizontal: 30, marginTop: 6 }}>seen by 9 friends</Text>
                </View>


            </View>
        )
    }
}