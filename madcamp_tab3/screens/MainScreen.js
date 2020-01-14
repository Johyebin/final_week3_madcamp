import React, { Component } from 'react';
import { StyleSheet, Platform, Image } from 'react-native';
import { Icon } from 'native-base'; // 추가된 코드
import { createAppContainer } from 'react-navigation'; 
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'; 
import { Ionicons } from '@expo/vector-icons'
import { createStackNavigator } from 'react-navigation-stack'

import CalendarTab from '../AppTabNavigator/CalendarTab';
import MeetMeetScreen from './MeetMeetScreen';
import ProfileScreen from './ProfileScreen';
import LoginScreen from './LoginScreen';
import SendListTab from '../AppTabNavigator/SendListTab';
import FriendsScreen from './FriendsScreen';
import { HeaderTitle } from 'react-navigation-stack';
import DatePickerScreen from './DatePickerScreen';
import WhereScreen from './WhereScreen';
import MemoScreen from './MemoScreen';
import SendListScreen from './SendListScreen';



// const config = Platform.select({
//   navigationOptions: {
//     header: null,
//   }
//   // web: { headerMode: 'screen' },
//   // default: {},
// });

// tab2 
const MeetMeetStack = createStackNavigator(
  {
      MeetMeet: {screen: MeetMeetScreen},
      Who: {screen: FriendsScreen},
      When: {screen: DatePickerScreen},
      Where: {screen: WhereScreen},
      Memo: {screen: MemoScreen},
  },
  {
    headerMode: 'none'
    }
);

MeetMeetStack.path = '';

MeetMeetStack.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
      <Ionicons name={'ios-heart-half'} style={{ fontSize:30, color: tintColor }} />
  ),
  headerMode: 'none'
}

// tab 3
const LoginStack = createStackNavigator(
  {
    Login: {screen: LoginScreen}, 
    Profile: {screen: ProfileScreen},
  },
  {
    headerMode: 'none'
    }
);

LoginStack.path = '';

LoginStack.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
      <Ionicons name={'ios-person'} style={{  fontSize:30,color: tintColor }} />
  ),
  headerMode: 'none'
}


export default class MainScreen extends Component {
  // navigationOptions 코드 추가
static navigationOptions = {
 headerLeft: <Ionicons name={'ios-contacts'} style={{ fontSize:30, paddingLeft:10}} onPress={()=>{this.props.navigation.navigate("Profile")}}/>,
 headerTitle: (
   <Image style={{width:80,height:20,alignSelf: 'center'}} source={require('../assets/images/title.png')}/>
 ),
 headerRight: <Ionicons name={'ios-home'} style={{ fontSize:30, paddingRight:10 }} onPress={()=>{this.props.navigation.navigate("Login")}}/>,
 // headerTitleStyle : {
 //   fontFamily:'billabong', color:'#be1323'
 // }
}


render() {
 return <AppTabContainet/>; // AppTabContainet 컴포넌트를 리턴한다.
}
}

handleClick = (e)=>{
  console.log("get :", e)
}

// 하단 탭 네비게이터 생성
const AppTabNavigator = createMaterialTopTabNavigator({
Calendar:{ screen: CalendarTab },
MeetMeetStack,
LoginStack,
SendList:{ screen: SendListScreen },
Friends:{ screen: FriendsScreen },
// DatePicker: {screen: DatePickerScreen}
}, {
  initialRouteName: 'LoginStack',
animationEnabled: true,
swipeEnabled: true,
tabBarPosition: "bottom",
tabBarOptions: {
 style: {
   ...Platform.select({
     ios:{
       backgroundColor:'white',
     }
   })
 },
 iconStyle: { height: 40 },
 activeTintColor: '#be1323',
 inactiveTintColor: '#d1cece',
 upperCaseLabel: false,
 showLabel: false,
 showIcon: true,
}
});

const AppTabContainet = createAppContainer(AppTabNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //paddingBottom: -10
  },
});