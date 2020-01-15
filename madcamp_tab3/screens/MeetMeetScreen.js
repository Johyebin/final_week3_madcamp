import React, { Component } from "react";
import { Platform, Image, TouchableOpacity, Text, View, StyleSheet, Button, Alert } from "react-native";
import { Container, Header, Body, CheckBox, Title, Subtitle, Card, CardItem, Top, Bottom, Content, Thumbnail, Grid, Col } from "native-base";
import { Ionicons } from '@expo/vector-icons'

import App from '../App'
import { TextInput } from "react-native-gesture-handler";
import DatePickerScreen from './DatePickerScreen'
import MyQuestion from '../Components/MyQuestion';

import * as SQLite  from 'expo-sqlite'
const db = SQLite.openDatabase('mydb.db')

let friends = new Array(); // 선택된 친구들을 저장하기 위한 배열 추후에 문자열로 이어붙일 것임

let myID = 1;
// 일단 테스트용으로 1로 그냥 고정시켜놓고.... 원래는 로그인해서 받아온값으로!!???어떻게하지

class MeetMeetScreen extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    name : "조혜",
    date : "2020-01-14T03:54:34",
    name : "조혜빈",
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

        <View style={styles.header}>
          <View>
            <Text style={styles.title}>What you want Schedule ?</Text>
            {/* <TextInput style={styles.input}></TextInput> */}

            {/* <TextInput style={styles.input} placeholder='Enter Date And Time' */}
          {/* onChangeText={(val) => {this.setState({date: val})}}/> */}
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.row}>
          <Button title="Who" color="#be1323" onPress={()=>{this.props.navigation.navigate("Who")}}/>
            {/* <TextInput style={styles.input}></TextInput> */}
            <TextInput style={styles.input} placeholder='Enter Friends Name'
          onChangeText={(val) => {this.setState({name: val})}}/>
            {/* <Button title="OK" color="#be1323"/> */}
          </View>

          <View style={styles.row}>
          <Button title="When" color="#be1323" onPress={()=>{this.props.navigation.navigate("When")}}/>
            {/* <TextInput style={styles.input}></TextInput> */}
            <TextInput style={styles.input} placeholder='Enter Want Date'
          onChangeText={(val) => {this.setState({date: val})}}/>
            {/* <Button title="OK" color="#be1323"/> */}
          </View>

          <View style={styles.row}>
          <Button title="Where" color="#be1323"/>
            {/* <TextInput style={styles.input}></TextInput> */}
            <TextInput style={styles.input} placeholder='Enter Place Name'
          onChangeText={(val) => {this.setState({place: val})}}/>
            {/* <Button title="OK" color="#be1323"></Button> */}
          </View>


          <View style={styles.row}>
          <Button title="What" color="#be1323"/>
            {/* <TextInput style={styles.input}></TextInput> */}
            <TextInput style={styles.input} placeholder='Enter Want to do'
          onChangeText={(val) => {this.setState({what: val})}}/>
            {/* <Button title="OK" color="#be1323"></Button> */}
          </View>


          <View style={styles.row}>
          <Button title="Memo" color="#be1323"/>
            {/* <TextInput style={styles.input}></TextInput> */}
            <TextInput style={styles.input} placeholder='Enter Memo'
          onChangeText={(val) => {this.setState({memo: val})}}/>
            {/* <Button title="OK" color="#be1323"></Button> */}
          </View>
        </View>


          <View style={styles.footer}>
        {/* <Text style={{width: '%', fontSize: 15, fontWeight:10, justifyContent: 'center'}}>name: {this.state.name}, date:{this.state.date}, place: {this.state.place}, what: {this.state.what}, memo: {this.state.memo}</Text> */}
        <Button title="send" color="black" style={{fontSize:10, fontWeight:15}} onPress={()=>{

              // datetimepicker로 받은 값 파싱 (2020-01-15T03:48:50 이런식으로나옴)
              let strDate = this.state.date.split('T')[0]
              let strTime = this.state.date.split('T')[1]
              
              let getID
              // schedule에 날짜,장소넣기 -> 해당id받아오기 -> 그id의 calendar에 넣기
              db.transaction(tx => {
                  tx.executeSql(
                    'INSERT INTO schedule (datestr, timestr, people, place, activity, memo) VALUES (?,?,?,?,?,?)',[strDate, strTime, this.state.name, this.state.place, this.state.what, this.state.memo]
                  );
                  tx.executeSql(
                    'SELECT id FROM schedule WHERE datestr = strDate AND timestr = strTime',
                    [],(tx,results)=>{
                      getID = results.rows.item(0).id
                    }
                  );
                  tx.executeSql(
                    'INSERT INTO calendar (userid, scheduleid) VALUES (?,?)',[myID, getID]
                  );
              });

             Alert.alert('Send Success',"Name: "+this.state.name+", Date: "+this.state.date+", Place: "+this.state.place+", What: "+this.state.what+", Memo: "+this.state.memo)}}>
          <Ionicons name={"ios-paper-plane"}/>
          </Button>
        </View>
    </Container>
    )
  }

}

export default MeetMeetScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 20,
    backgroundColor: "#efefef",
    alignItems: "center",
    justifyContent: "center",
    width:'100%'
  },
  header:{
    width: '90%',
    flex:1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#efefef'
  },
  content:{
    width: '100%',
    alignItems: "center",
    justifyContent: "center",
    flex:3
  },
  footer:{
    width: '100%',
    flex:1,
    backgroundColor: '#efefef'
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#777',
    backgroundColor: '#fff',
    padding: 5,
    margin: 5,
    width: '70%',
  },
  title:{
    margin:5,
    width: '100%',
    marginTop:'15%',
    alignContent: 'center',
    fontSize:30,
    fontWeight:'bold',
    justifyContent: 'center'
  },
  text:{
    margin:3,
  },
  row: {
    flex: 1,
    width: '90%',
    alignItems: "center",
    backgroundColor: "#fff",
    margin: 10,
    flexDirection: 'row',
    borderRadius:50,
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

