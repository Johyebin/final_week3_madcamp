import React, { Component } from "react";
import { Text, View, StyleSheet, Button, Image } from "react-native";

export default class ProfileScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.profile} source={require('../assets/images/profile.jpg')} />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Welcome,{this.props.navigation.getParam("username")}
        </Text>
        <Button
          color="#be1323" title="Sign Out"
          onPress={() => this.props.navigation.navigate("Login")}>
          </Button>
        <Button
         color="#be1323"
          title="Start MeetMeet"
          onPress={() => this.props.navigation.navigate("Calendar")}
        />
      </View>
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
    profile: {
      width: 200,
      height: 200,
      borderRadius: 100,
      marginBottom: 50
    }
  });

