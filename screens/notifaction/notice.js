import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import ChatDpnd from '../../components/ChatDpnd'

export default class Notice extends React.Component {
    render() {
        return (
            <TouchableOpacity style={styles.container}
                onPress={this.props.onPress}
            >
                <View style={styles.viewMessage}>
                    <Text style={styles.message}>
                        {this.props.message}
                    </Text>
                    <Text style={styles.date}>
                        {this.props.date}
                    </Text>
                </View>
                <View style={styles.pic}>
                    <Image source={this.props.image}
                        style={styles.userImg}
                    />
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-evenly',
        backgroundColor: 'white',
        borderBottomWidth:1,
        borderBottomColor:'#efefef'
    },
    viewMessage: {
        flex: 4,
    },
    pic: {
        flex: 1,
        alignItems: 'flex-end'
    },
    userImg: {
        width: 40,
        height: 40,
    },
    message: {
        fontSize: 16,
    },
    date: {
        color: 'gray'
    }
})