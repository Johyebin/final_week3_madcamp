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
     name="조혜빈, 이제인, 배성희"
     description="매콤이 닭발"
     date="01/14/2020"
     time="pm 12:00"
     img={require('../assets/images/robot-dev.png')}
     />
     <MyList
     name="서지연, 양초연, 이민서"
     description="순천시 연향동 dope"
     date="01/17/2020"
     time="pm 14:00"
     img={require('../assets/images/robot-prod.png')}
     />
      <MyList
     name="이제인과 아이들"
     description="한양대 과방"
     date="01/27/2020"
     time="am 07:00"
     img={require('../assets/images/robot-dev.png')}
     />
      <MyList
     name="조진성, 조현준"
     description="카이코노"
     date="01/27/2020"
     time="pm 16:00"
     img={require('../assets/images/robot-prod.png')}
     />
      <MyList
     name="김철수, 김탁구, 백설기"
     description="당구장"
     date="02/27/2020"
     time="am 07:00"
     img={require('../assets/images/robot-dev.png')}
     />
      <MyList
     name="조개강, 산설매, 백두산"
     description="with Dogs"
     date="03/30/2020"
     time="pn 17:00"
     img={require('../assets/images/robot-prod.png')}
     />
       <MyList
     name="코쟁이, 목쟁이, 조식빈"
     description="with Dogs"
     date="03/30/2020"
     time="am 07:00"
     img={require('../assets/images/robot-dev.png')}
     />
       <MyList
     name="나재한, 너재한, 백두산"
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
