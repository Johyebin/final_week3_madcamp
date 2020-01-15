import React, { Component } from "react";
import { Platform, Image, TouchableOpacity, Text, View, StyleSheet, Button } from "react-native";
import { Container, Header, Body, CheckBox,Title,Subtitle, Card, CardItem,
    Left,Right, Icon,Content,Thumbnail, Grid,Col } from "native-base";

export default class MyFriendElements extends Component {
    render(){
        return (
            <View style={styles.elem}>
            <View style={styles.userInfo}>
              <View style={styles.profile} />
              <Text style={styles.name}>{this.props.username}</Text>
            </View>
            <View style={styles.userComment}>
              <Text color='white'>{this.props.statusLine}</Text>
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
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: '#be1323',
    },
    name: {
      paddingLeft: 10,
    }
  });