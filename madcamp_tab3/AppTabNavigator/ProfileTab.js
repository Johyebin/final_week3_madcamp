import React, { Component } from "react";
import { Text, View, StyleSheet, Button, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons'

export default class ProfileTab extends Component {
    
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Ionicons name={'ios-person'} style={{  fontSize:30,color: tintColor }} />
        )
    }

    render() {
      return (
        <View style={styles.container}>
          <Text> Profile Screen </Text>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            {/* Welcome, {this.props.navigation.getParam("username")} */}
            Welcome, username
          </Text>
          <Button
            title="Sign out"
            // onPress={() => this.props.navigation.navigate("Login")}
          />
            {/* // 전환하면서 친구 리스트를 받아와야 함
          /> */}
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
      image:{
        width:200,
        height:200,
        alignItems:'center',
        justifyContent:'center',
        resizeMode:'contain'
      }
});