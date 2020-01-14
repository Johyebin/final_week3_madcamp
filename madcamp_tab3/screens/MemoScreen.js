import React, { Component } from "react";
import { Platform, Image, TouchableOpacity, Text, View, StyleSheet, Button } from "react-native";
import { Container, Header, Body, CheckBox,Title,Subtitle, Card, CardItem, Top,Bottom, Content,Thumbnail, Grid,Col } from "native-base";
import { Ionicons } from '@expo/vector-icons'

export default class MemoScreen extends Component {
    render() {
        return (
         <View>
             <Text>Memo Screen</Text>
         </View>
        );
      }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontSize: 20,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});