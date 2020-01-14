import React, { Component } from "react";
import { Platform, Image, TouchableOpacity, Text, View, StyleSheet, Button } from "react-native";
import { Container, Header, Body, CheckBox,Title,Card, CardItem,Left,Right, Content,Thumbnail, Grid,Col } from "native-base";
import { Ionicons } from '@expo/vector-icons'

import MyList from '../Components/MyList';

export default class SendListTab extends Component {

    
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Ionicons name={'ios-list'} style={{ fontSize:30, color: tintColor }} />
        )
    }

    render() {
        return (
         <Container style={{backgroundColor: '#efefef'}}>
           <Header style={styles.header}>
                <Ionicons name={'ios-arrow-round-back'}/>
                <Text>MEET MEET</Text>
                <Ionicons name={'ios-arrow-round-forward'}/>
           </Header>
            <Content>
             <Card style={{alignItems: 'center'}}>
                 <CardItem header>
                    <Ionicons name={"ios-heart"} style={{color:'red'}}/>
                    <Title>Your's Send List</Title>
                    <Ionicons name={"ios-heart"} style={{color:'red'}}/>
                 </CardItem>
             </Card>
         {/* 여기에 지정해주는 사항을 모델 클래스인 List클래스에서 변경할 수 있다 / 디비에서 받아서 동적으로 셋팅할수 있게 됨 */}
         <MyList
         name="제인이와 아이들"
         description="with Jane,Hyebin,.."
         date="01/14/2020"
         time="pm 12:00"
         img={require('../assets/images/robot-dev.png')}
         />
         <MyList
         name="오늘은 뭐먹지 팸"
         description="with YoungIn,Hyebin,.."
         date="01/17/2020"
         time="pm 14:00"
         img={require('../assets/images/robot-prod.png')}
         />
          <MyList
         name="너랑 나랑은 지금 안되지"
         description="with YoungIn,Pretty,.."
         date="01/27/2020"
         time="am 07:00"
         img={require('../assets/images/robot-dev.png')}
         />
          <MyList
         name="배고픈 자들"
         description="with Family"
         date="01/27/2020"
         time="pm 16:00"
         img={require('../assets/images/robot-prod.png')}
         />
          <MyList
         name="가족과 함께"
         description="with Friends"
         date="02/27/2020"
         time="am 07:00"
         img={require('../assets/images/robot-dev.png')}
         />
          <MyList
         name="이제인 요정님"
         description="with Dogs"
         date="03/30/2020"
         time="am 07:00"
         img={require('../assets/images/robot-prod.png')}
         />
           <MyList
         name="조혜빈과 아이들"
         description="with Dogs"
         date="03/30/2020"
         time="am 07:00"
         img={require('../assets/images/robot-prod.png')}
         />
           <MyList
         name="이제인 요정님"
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