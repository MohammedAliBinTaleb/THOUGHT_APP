import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity,TextInput,KeyboardAvoidingView} from 'react-native';
import Modal from 'react-native-modalbox';
var screen = Dimensions.get('window')
export default class AddPost extends React.Component {
    
    showAddmodal=()=>{
        this.refs.addPost.open()
    }

    closeAddPost=()=>{
        this.refs.addPost.close()
    }
    render() {

        return (
            
                <Modal
                ref={'addPost'}
                style={{
                   
                    height:screen.height*0.40,
                    width:'100%',
                    borderTopRightRadius:10,
                    borderTopLeftRadius:10,
                    elevation:5
                }}
                position={'bottom'}
                backdrop={true}
                >

                    <View style={styles.header}>
                    <TouchableOpacity style={{alignItems:'flex-start',flex:1}}>
                        <Text style={styles.textHeader}>Post</Text>
                    </TouchableOpacity>
                    <View style={{flex:1}}>
                        <Text style={styles.textHeader}>Add Post</Text>
                    </View>

                    <TouchableOpacity 
                    style={{flex:1,alignItems:'flex-end'}}
                    onPress={this.closeAddPost}
                    >
                        <Text style={styles.textHeader}>Cancel</Text>
                    </TouchableOpacity>
                    </View>

                    <View style={styles.body}>
                        <TextInput
                        placeholder={'share a message'}
                        multiline={true}
                        />
                    </View>
                </Modal>
           
        );
    }
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        margin:10

    },
    textHeader:{
        fontSize:18,
        fontWeight:'600',
        color:'#2098D1',
        },
    body: {
        flex: 4,
        padding:10,

    },
    imagePost: {
        width: '100%',
    },
    foter: {
        flex: 2
    }
});

