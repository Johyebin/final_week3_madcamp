import React, { Component } from "react";
import { Platform, Image, TouchableOpacity, Text, View, StyleSheet, Button } from "react-native";
import { Container, Header, Body, CheckBox,Title,Card, CardItem, Left,Right, Content,Thumbnail, Grid,Col } from "native-base";
import { Ionicons } from '@expo/vector-icons'
    

import MyList from '../Components/MyList';

// let names = new Array(); // groupname저장할 배열
// let members = new Array(); // 구성원이름 이어붙여 저장할 배열
// let dates = new Array(); // 날짜 저장할 배열


export default class SendListScreen extends Component {

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
        <Ionicons name={'ios-list'} style={{ fontSize:30, color: tintColor }} />
    )
}
  render() {
    return (
     <Container style={{backgroundColor: '#efefef'}}>
        <Content>
         {/* <Card style={{alignItems: 'center', backgroundColor: '#be1323'}}>
             <CardItem header>
                 <Ionicons name={"ios-heart"} style={{color:'white'}}/>
                 <Text color="white">Your Send List</Text>
                 <Ionicons name={"ios-heart"} style={{color:'white'}}/>
             </CardItem>
         </Card> */}
     {/* 여기에 지정해주는 사항을 모델 클래스인 List클래스에서 변경할 수 있다 / 디비에서 받아서 동적으로 셋팅할수 있게 됨 */}
     <MyList
     name="group1"
     description="with Jane,Hyebin,.."
     date="01/14/2020"
     time="pm 12:00"
     img={require('../assets/images/robot-dev.png')}
     />
     <MyList
     name="group2"
     description="with YoungIn,Hyebin,.."
     date="01/17/2020"
     time="pm 14:00"
     img={require('../assets/images/robot-prod.png')}
     />
      <MyList
     name="group3"
     description="with YoungIn,Pretty,.."
     date="01/27/2020"
     time="am 07:00"
     img={require('../assets/images/robot-dev.png')}
     />
      <MyList
     name="group4"
     description="with Family"
     date="01/27/2020"
     time="pm 16:00"
     img={require('../assets/images/robot-prod.png')}
     />
      <MyList
     name="group5"
     description="with Friends"
     date="02/27/2020"
     time="am 07:00"
     img={require('../assets/images/robot-dev.png')}
     />
      <MyList
     name="group6"
     description="with Dogs"
     date="03/30/2020"
     time="am 07:00"
     img={require('../assets/images/robot-prod.png')}
     />
       <MyList
     name="group6"
     description="with Dogs"
     date="03/30/2020"
     time="am 07:00"
     img={require('../assets/images/robot-prod.png')}
     />
       <MyList
     name="group6"
     description="with Dogs"
     date="03/30/2020"
     time="am 07:00"
     img={require('../assets/images/robot-prod.png')}
     />
      </Content>
     </Container>
    );
  }
}

// SendListScreen.navigationOptions = {
//     headerLeft: <Icon name='ios-camera' style={{ paddingLeft:10 }}/>,
//     title: 'Instagram',
//     headerRight: <Icon name='ios-send' style={{ paddingRight:10 }}/>,
//   }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "red",
    justifyContent: "space-between",
  }
});
