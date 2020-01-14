import React, {Component} from 'react';
import {View, Button, Platform, StyleSheet} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default class DatePickerScreen extends Component {
  state = {
    date: new Date('2020-06-12T14:42:42'),
    mode: 'date',
    show: true,
  }

  setDate = (event, date) => {
    date = date || this.state.date;

    this.setState({
      show: Platform.OS === 'ios' ? true : false,
      date,
    });
  }

  show = (mode) => {
    this.setState({
      show: true,
      mode,
    });
  }

  datepicker = () => {
    this.show('date');
  }

  timepicker = () => {
    this.show('time');
  }

  render() {
    const { show, date, mode } = this.state;

    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <Button onPress={this.datepicker} title="Show Date" />
          <Button onPress={this.timepicker} title="Show Time" />
        </View>
        <View style={{width:'100%'}}>
        { show && <DateTimePicker value={date} mode={mode} onChange={this.setDate} /> }
         <Button onPress={() => this.props.navigation.navigate("MeetMeet")} title="Done" />
         </View>
      </View>
        );
      }
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }
    });