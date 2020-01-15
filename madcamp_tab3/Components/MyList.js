import React, { Component } from "react";
import { Platform, Image, TouchableOpacity, Text, View, StyleSheet, Button } from "react-native";
import { Container, Header, Body, CheckBox,Title,Subtitle, Card, CardItem,
    Left,Right, Icon,Content,Thumbnail, Grid,Col } from "native-base";

    // 모델클래스인 틀을 정의하고 내용은 이 클래스로 객체를 생성하고 내용을 셋팅함
export default class MyList extends Component {
    render(){
        return (
           <Card style={styles.container}>
               <CardItem button onPress={{}}>
                   <Left>
                    <Thumbnail source={this.props.img} //source={require('../assets/images/robot-dev.png')}
                    // <Thumbnail source={require('../assets/images/robot-dev.png')}
                    style={{width:80,height:60,borderRadius:10,marginRight:5}}/>
                    <View style={{alignItems:'flex-start',top:-10}}>
                        <Title>{this.props.name}</Title> 
                        <Subtitle>{this.props.description}</Subtitle>
                    </View>
                   </Left>
                   <Right>
                        <View style={{alignItems:'flex-end'}}>
                        {/* <Subtitle>2020.1.14</Subtitle>  */}
                            <Subtitle>{this.props.date}</Subtitle> 
                            <Subtitle>{this.props.time}</Subtitle>
                        </View>
                   </Right>
               </CardItem>
           </Card>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        background: '#fff',
        margin: 3,
    }
}
)

