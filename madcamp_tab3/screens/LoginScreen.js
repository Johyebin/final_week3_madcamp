import React, { Component } from "react";
import { Text, View, StyleSheet, Button, Image } from "react-native";
// import firebase from 'firebase'
import * as Google from "expo-google-app-auth";

const IOS_CLIENT_ID =
  "160906070853-upsuj9ggbff34uukalarkduqbinget9j.apps.googleusercontent.com";
const ANDROID_CLIENT_ID =
  "your-android-client-id";

export default class LoginScreen extends Component {

  signInWithGoogle = async () => {
    try {
      const result = await Google.logInAsync({
        //bevavior: 'web',
        iosClientId: IOS_CLIENT_ID,
        androidClientId: ANDROID_CLIENT_ID,
        scopes: ["profile", "email"]
      });

      if (result.type === "success") {
        console.log("LoginScreen.js.js 21 | ", result.user.givenName);
        this.props.navigation.navigate("Profile", {username: result.user.givenName}  ); //after Google login redirect to Profile
        return result.accessToken; // 해당 엑세스토큰으로 추가 정보를 얻어올 수 있다.
      } else {
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