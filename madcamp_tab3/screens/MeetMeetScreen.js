import React, { Component } from "react";
import { Platform, Image, TouchableOpacity, Text, View, StyleSheet, Button, Alert } from "react-native";
import { Container, Header, Body, CheckBox, Title, Subtitle, Card, CardItem, Top, Bottom, Content, Thumbnail, Grid, Col } from "native-base";
import { Ionicons } from '@expo/vector-icons'

import App from '../App'
import { TextInput } from "react-native-gesture-handler";
import DatePickerScreen from './DatePickerScreen'
import MyQuestion from '../Components/MyQuestion';

import * as SQLite  from 'expo-sqlite'
const db = SQLite.openDatabase('C:\Users\q\final_week3_madcamp\madcamp_tab3\mydb.db')

let friends = new Array(); // 선택된 친구들을 저장하기 위한 배열 추후에 문자열로 이어붙일 것임

let myID = 1;
// 일단 테스트용으로 1로 그냥 고정시켜놓고.... 원래는 로그인해서 받아온값으로!!???어떻게하지

function init(){
  
}

class MeetMeetScreen extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    name : "조혜",
    date : "2020-01-14T03:54:34",
    place : "restaurant",
    what : "eat lunch",
    memo : "only special"
  }
  
  render() {
    return (
      <Container style={styles.container}>
        {/* <View style={{flexDirection:'row'}}>
          {/* <Button title="WHO" onPress={()=>{this.props.navigation.navigate('Who')}}></Button> */}
          {/* <Button title="WHEN" onPress={()=>{this.props.navigation.navigate('When')}}></Button>
        </View> */} 

          <View style={{width: '100%'}}>
          <View>
            <Text>WHEN</Text>
            {/* <TextInput style={styles.input}></TextInput> */}
            <TextInput
              style={styles.input}
              placeholder='Enter Friends Name'
                onChangeText={(val) => {this.setState({date: val})}}/>
            <Button title="OK"></Button>
          </View>

        <View style={{width: '100%'}}>
          <View>
            <Text>WHO</Text>
            {/* <TextInput style={styles.input}></TextInput> */}
            <TextInput
              style={styles.input}
              placeholder='Enter Friends Name'
              onChangeText={(val) => {this.setState({name: val})}}/>
            <Button title="OK"></Button>
          </View>

           <View>
            <Text>WHERE</Text>
            {/* <TextInput style={styles.input}></TextInput> */}
            <TextInput
              style={styles.input}
              placeholder='Enter Friends Name'
              onChangeText={(val) => {this.setState({place: val})}}/>
            <Button title="OK"></Button>
          </View>

          <View>
            <Text>WHAT</Text>
            {/* <TextInput style={styles.input}></TextInput> */}
            <TextInput
              style={styles.input}
              placeholder='Enter Friends Name'
              onChangeText={(val) => {this.setState({what: val})}}/>
            <Button title="OK"></Button>
          </View>

          <View>
            <Text>MEMO</Text>
            {/* <TextInput style={styles.input}></TextInput> */}
            <TextInput multiline
              style={styles.input}
              placeholder='Enter Friends Name'
              onChangeText={(val) => {this.setState({memo: val})}}/>
            <Button title="OK"></Button>
          </View>


          <View style={{width: '100%'}}>
      <View style={styles.last}>
        <Text style={{width: '50%', fontSize: 15, fontWeight:300}}>name: {this.state.name}, date:{this.state.date}, place: {this.state.place}, what: {this.state.what}, memo: {this.state.memo}</Text>
        <Button  color='#be1323' title="send" style={{fontSize:10}}
          onPress={()=>{ 
            ///////////////////////////여기 db...

            // datetimepicker로 받은 값 파싱 (2020-01-15T03:48:50 이런식으로나옴)
            let strDate = this.state.date.split('T')[0]
            let strTime = this.state.date.split('T')[1]
            
            let getID
            // schedule에 날짜,장소넣기 -> 해당id받아오기 -> 그id의 calendar에 넣기
            db.transaction(tx => {
                tx.executeSql(
                  `INSERT INTO schedule (datestr, time, people, place, activity, memo) VALUES (?,?,?,?,?,?)`,[strDate, strTime, this.state.name, this.state.place, this.state.what, this.state.memo]
                );
                tx.executeSql(
                  `SELECT id FROM schedule WHERE datestr = strDate AND time = strTime`,
                  [],(tx,results)=>{
                    getID = results.rows.item(0).id
                  }
                );
                tx.executeSql(
                  `INSERT INTO calendar (userid, scheduleid) VALUES (?,?)`,[myID, getID]
                );
            });

            Alert.alert('Send Success')
        }}></Button>
      </View>
      </View>

          </View>  
          </View>    
      </Container>
    )
  }

}

export default MeetMeetScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 20,
    backgroundColor: "#efefef",
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    backgroundColor: '#fff',
    padding: 8,
    margin: 10,
    width: 200,
  },
  row: {
    flex: 1,
    width: '100%',
    alignItems: "center",
    backgroundColor: "#efefef",
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  second: {
    flex: 2,
    alignItems: "center",
    width: '80%',
    backgroundColor: "#fff",
    justifyContent: 'space-around'
  },
  last: {
    flex: 2,
    padding: 10,
    alignItems: "center",
    width: '80%',
    margin: '20%',
    backgroundColor: "#fff",
    justifyContent: 'space-around'
  },
});

