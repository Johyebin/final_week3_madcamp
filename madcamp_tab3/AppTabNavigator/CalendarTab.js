import React, { Component } from "react";
import { Text, View, StyleSheet, Button, SafeAreaView } from "react-native";
import { Calendar, Agenda } from 'react-native-calendars';
import { Ionicons } from '@expo/vector-icons'

import { ShakeEventExpo } from '../Components/ShakeEventExpo'

import * as SQLite from 'expo-sqlite'
const db = SQLite.openDatabase('mydb.db')


let myID = 1;
// 일단 테스트용으로 1로 그냥 고정시켜놓고.... 원래는 로그인해서 받아온값으로!!???어떻게하지

var shakecnt=0;

var strDates = ['2020-01-14', '2020-01-17', '2020-01-27', '2020-01-27']
var strNames = ['pm 12:00 조혜빈, 이제인, 배성희\n 아름관 화끈이닭발', 'pm 14:00 서지연, 양초연, 이민서\n 순천시 연향동 dope', 'am 07:00 이제인과 아이들\n 한양대 과방', 'pm 16:00 조진성, 조현준\n 카이코노']

export default class CalendarTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Ionicons name={'ios-calendar'} style={{  fontSize:30,color: tintColor }} />
        )
    }

    componentDidMount() {
      db.transaction(tx => {
        tx.executeSql(
          "CREATE TABLE IF NOT EXISTS calendar ( id INTEGER PRIMARY KEY AUTOINCREMENT, userid INTEGER, scheduleid INTEGER );"
        );
        tx.executeSql(
          "CREATE TABLE IF NOT EXISTS schedule ( id INTEGER PRIMARY KEY AUTOINCREMENT, datestr TEXT, timestr TEXT, people TEXT, place TEXT, activity TEXT, memo TEXT );"
        );
      });
    }
  

    // 흔들면 db에서 데이터 받아오기
    async componentWillMount() {
        ShakeEventExpo.addListener(() => {

            //처음이면 테스트 데이터 넣기
            // if (isfirst) {
            //   isfirst= false;
            //   const strDate = "2020-01-12"
            //   const strTime = "03:45:23"
            //   const strPlace = "default_place"

            //   let getID
            //   // schedule에 날짜,장소넣기 -> 해당id받아오기 -> 그id의 calendar에 넣기
            //   db.transaction(tx => {
            //     tx.executeSql(
            //       'INSERT INTO schedule (datestr, place) VALUES (?,?)',[strDate, strPlace]
            //     );
            //     tx.executeSql(
            //       'SELECT id FROM schedule WHERE datestr = strDate AND place = strPlace',
            //       [],(tx,results)=>{
            //         getID = results.rows.item(0).id
            //       }
            //     );
            //     tx.executeSql(
            //       'INSERT INTO calendar (userid, scheduleid) VALUES (?,?)',[myID, getID]
            //     );
            //   });
            //   this.state.items[strDate].push({name:strPlace});
            // }


            // 디비가 안돌아가서 일단이걸로............
            if(shakecnt<4){
              this.state.items[strDates[shakecnt]].push({name:strNames[shakecnt]});
              shakecnt=shakecnt+1
            }

            
            // 데이터 받아오기
            db.transaction(tx => {
                tx.executeSql(
                    'SELECT schedule.datestr, schedule.place FROM calendar, schedule WHERE calendar.userid = myID and calendar.scheduleid = schedule.id',
                    [],(tx,results)=>{
                        const rows = results.rows;
                        for(let i=0; i<rows.length; i++){
                            this.state.items[rows.item(i).datestr].push({name:rows.item(i).place});
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
         db.transaction(tx => {
            tx.executeSql(
                'SELECT schedule.datestr, schedule.place FROM calendar, schedule WHERE calendar.userid = myID and calendar.scheduleid = schedule.id',
                [],(tx,results)=>{
                    const rows = result.rows;
                    for(let i=0; i<rows.length; i++){
                        this.state.items[rows.item(i).datestr].push({name:rows.item(i).place});
                    }
                }
            ) 
        });
        
        this.initCalendarItems(day)

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