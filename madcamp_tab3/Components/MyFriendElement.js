import React, { Component } from "react";
import { Platform, Image, TouchableOpacity, Text, View, StyleSheet, Button } from "react-native";
import { Container, Header, Body, CheckBox,Title,Subtitle, Card, CardItem,
    Left,Right, Icon,Content,Thumbnail, Grid,Col } from "native-base";

export default class MyFriendElements extends Component {
    render(){
        return (
            <View style={styles.elem}>
            <View style={styles.userInfo}>
              <Image
               style={styles.profile}
                 source={require('../assets/images/heartintro4.png')}
               />
              <Text style={styles.name}>{this.props.username}</Text>
            </View>
            <View style={styles.userComment}>
              <Text style={{color:'#fff'}}>{this.props.statusLine}</Text>
            </View>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },

    content: {
      flex:1,
    },
  
    elem: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderColor:'#d1cece',
      borderBottomWidth:1,
      padding: 5,
      marginRight: 3,
      background: '#fff'
    },
    userInfo: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    userComment: {
      padding:8,
      backgroundColor:'#be1323',
      borderRadius:5,
    },
    profile: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: '#be1323',
      resizeMode:'contain'
    },
    name: {
      paddingLeft: 10,
    }
  });