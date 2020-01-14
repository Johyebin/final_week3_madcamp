import React, { Component } from "react";
import { Text, View, StyleSheet, Button, SafeAreaView } from "react-native";
import { Calendar, Agenda } from 'react-native-calendars';
import { Ionicons } from '@expo/vector-icons'

import { ShakeEventExpo } from '../Components/ShakeEventExpo'

import * as SQLite  from 'expo-sqlite'
const db = SQLite.openDatabase('C:\Users\q\final_week3_madcamp\madcamp_tab3\mydb.db')


let myID = 1;
// 일단 테스트용으로 1로 그냥 고정시켜놓고.... 원래는 로그인해서 받아온값으로!!???어떻게하지

let isfirst = true;

export default class CalendarTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Ionicons name={'ios-calendar'} style={{  fontSize:30,color: tintColor }} />
        )
    }

    // 흔들면 db에서 데이터 받아오기
    async componentWillMount() {
        ShakeEventExpo.addListener(() => {

            //처음이면 테스트 데이터 넣기
            if (isfirst) {
              isfirst= false;
              const strTime = "2020-01-14"
              const strPlace = "default_place"
              let getID
              // schedule에 날짜,장소넣기 -> 해당id받아오기 -> 그id의 calendar에 넣기
              db.transaction(tx => {
                tx.executeSql(
                  `INSERT INTO schedule (datestr, place) VALUES (?,?)`,[strTime, strPlace]
                );
                tx.executeSql(
                  `SELECT id FROM schedule WHERE datestr = strTime AND place = strPlace`,
                  [],(tx,results)=>{
                    getID = results.rows.item(0).id
                  }
                );
                tx.executeSql(
                  `INSERT INTO calendar (userid, scheduleid) VALUES (?,?)`,[myID, getID]
                );
              });
              this.state.items[strTime].push({name:strPlace});
            }
            
            // 데이터 받아오기
            db.transaction(tx => {
                tx.executeSql(
                    `SELECT schedule.datestr, schedule.place FROM calendar, schedule WHERE calendar.userid = myID and calendar.scheduleid = schedule.id`,
                    [],(tx,results)=>{
                        const rows = result.rows;
                        for(let i=0; i<rows.length; i++){
                            this.state.items[rows.item(i).date].push({name:rows.item(i).place});
                        }
                    }
                ) 
            });
            const newItems = {};
            Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
            this.setState({
              items: newItems
            });
            console.log('Shake Shake Shake');
        });
    }

    constructor(props) {
        super(props);
        this.state = {
            items: {}
        };
    }
    initCalendarItems(day) {
        for (let i = -10; i < 10; i++) {
            const time = day.timestamp + i * 24 * 60 * 60 * 1000;
            const strTime = this.timeToString(time);
            if (!this.state.items[strTime]) {
              this.state.items[strTime] = [];
            }
        }
    }
    loadItems(day) {
        this.initCalendarItems(day)
        
          db.transaction(tx => {
            tx.executeSql(
                `SELECT schedule.datee, schedule.place FROM calendar, schedule WHERE calendar.userid = myID and calendar.scheduleid = schedule.id`,
                [],(tx,results)=>{
                    const rows = result.rows;
                    for(let i=0; i<rows.length; i++){
                        this.state.items[rows.item(i).datee].push({name:rows.item(i).place});
                    }
                }
            ) 
        });
        const newItems = {};
        Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
        this.setState({
          items: newItems
        });
    }
  
    render() {
      return (
        <Agenda
            items={this.state.items}
            loadItemsForMonth={this.loadItems.bind(this)}
            selected={this.onDayPress.bind(this)}
            renderItem={this.renderItem.bind(this)}
            renderEmptyDate={this.renderEmptyDate.bind(this)}
            rowHasChanged={this.rowHasChanged.bind(this)}
            pastScrollRange={12}
            futureScrollRange={12}
            onCalendarToggled={(calendarOpened) => {console.log(calendarOpened)}}
        />
      );
    }
    onDayPress(day){
        console.log('Agenda : day pressed'+day)
    } 
  
    addItem(day){
        
    }
  
    renderItem(item) {
      return (
        <View style={[styles.item, {height: item.height}]}><Text>{item.name}</Text></View>
      );
    }
  
    renderEmptyDate() {
      return (
        <View style={styles.emptyDate}><Text> </Text></View>
      );
    }
  
    rowHasChanged(r1, r2) {
      return r1.name !== r2.name;
    }
  
    timeToString(time) {
      const date = new Date(time);
      return date.toISOString().split('T')[0];
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
      },
      button:{
        flex: 1,
        backgroundColor: "yellow",
        alignItems: "center",
        justifyContent: "center"
      },
      item: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17
      },
      emptyDate: {
          height: 15,
          flex:1,
          paddingTop: 30
      }
});