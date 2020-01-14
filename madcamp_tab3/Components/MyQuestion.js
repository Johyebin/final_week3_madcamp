import React, { Component } from "react";
import { Platform, Image, TouchableOpacity, Text, View, StyleSheet, Button } from "react-native";
import { Container, Header, Body, CheckBox,Title,Subtitle, Card, CardItem,
    Left,Right, Icon,Content,Thumbnail, Grid,Col } from "native-base";

    // 모델클래스인 틀을 정의하고 내용은 이 클래스로 객체를 생성하고 내용을 셋팅함
export default class MyQuestion extends Component {
    render(){
        return (
            <Card>
            <CardItem button>
                <View style={{alignItems:'flex-start'}}>
                        <Title>{this.props.title}</Title> 
                        <Subtitle>{this.props.result}</Subtitle>
                </View>
            </CardItem>
          </Card>
        )
    }
}

