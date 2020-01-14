import React, { Component } from "react";
import { Text, View, StyleSheet, Button, Image } from "react-native";
// import firebase from 'firebase'
import * as Google from "expo-google-app-auth";

import * as SQLite from 'expo-sqlite'
const db = SQLite.openDatabase('mydb.db')

const IOS_CLIENT_ID =
  "160906070853-upsuj9ggbff34uukalarkduqbinget9j.apps.googleusercontent.com";
const ANDROID_CLIENT_ID =
  "your-android-client-id";

export default class LoginScreen extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        userID: 0
    };
  }

  componentDidMount() {
    db.transaction(tx => {
      tx.executeSql(
        "CREATE TABLE if not exists user ( id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT )"
      );
    });
  }

  signInWithGoogle = async () => {
    try {
      const result = await Google.logInAsync({
        //bevavior: 'web',
        iosClientId: IOS_CLIENT_ID,
        androidClientId: ANDROID_CLIENT_ID,
        scopes: ["profile", "email"]
      });

      if (result.type === "success") {
        const myname = result.user.givenName
        console.log("LoginScreen.js.js 21 | ", myname);
        this.props.navigation.navigate("Profile", {username: myname}  ); //after Google login redirect to Profile

        // db에 유저 정보 넣기
        // 이름넣기 -> 해당id를 userID로 setstate
        db.transaction(tx => {
          tx.executeSql(
            'INSERT INTO user (name) VALUES (?)',[myname]
          );
          tx.executeSql(
            'SELECT id FROM user WHERE name = myname',
            [],(tx,results)=>{
                this.setState({userID : results.rows.item(0).id}) 
            }
          );
        });
        return result.accessToken; // 해당 엑세스토큰으로 추가 정보를 얻어올 수 있다.
      }
      else {
        return { cancelled: true };
      }
    } catch (e) {
      console.log('LoginScreen.js.js 30 | Error with login', e);
      return { error: true };
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image}source={require('../assets/images/intro.png')} />
        {/* 로그인 페이지에서 보여줄 이미지 세팅하기 */}
        <Button title="Sign in Google" onPress={this.signInWithGoogle}>
        </Button>
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