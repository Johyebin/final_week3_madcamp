import React, { Component } from "react";
import { Text, View, StyleSheet, Button, SafeAreaView } from "react-native";
import { Calendar, Agenda } from 'react-native-calendars';
import { Ionicons } from '@expo/vector-icons'

export default class CalendarTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Ionicons name={'ios-calendar'} style={{  fontSize:30,color: tintColor }} />
        )
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
        const newItems = {}
        Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
        this.setState({
          items: newItems
        });
        // db.transaction(tx => {
        //     tx.executeSql("insert ")
        // })
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
        <View style={styles.emptyDate}><Text>This is empty date!</Text></View>
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