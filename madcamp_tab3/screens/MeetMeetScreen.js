import React, { Component } from "react";
import { Platform, Image, TouchableOpacity, Text, View, StyleSheet, Button } from "react-native";
import { Container, Header, Body, CheckBox,Title,Subtitle, Card, CardItem, Top,Bottom, Content,Thumbnail, Grid,Col } from "native-base";
import { Ionicons } from '@expo/vector-icons'

import App from '../App'
import { TextInput } from "react-native-gesture-handler";
import DatePickerScreen from './DatePickerScreen'

let friends = new Array(); // 선택된 친구들을 저장하기 위한 배열 추후에 문자열로 이어붙일 것임

export default class MeetMeetScreen extends Component{

  // constructor(props){
  //   super(props)
  //   const [name, setName] = React.useState('조혜빈');
  //   const [date, setDate] = React.useState('01/14/2020');
  //   const [place, setPlace] = React.useState('Resturant');
  //   const [what, setWhat] = React.useState('eat lunch');
  //   const [memo, setMemo] = React.useState('only special');
  // }
  render(){
    return (
      <Container style={{backgroundColor: '#efefef'}}>
      <Content>
        <View style={styles.row}>
          {/* 누르면 친구리스트 보여주기 */}
        {/* <MyQuestion
        title="who?"
        result="Jane,Hyebin"
        onPress={() => this.props.navigation.navigate("Friends")}
        />
       <MyQuestion
        title="when?"
        result=""
        />
        <MyQuestion
        title="where?"
        result=""
        /> */}
          <Card style={{alignItems: 'center'}}>
             <CardItem button onPress={() => this.props.navigation.navigate("Who")}>
                 <Title>Who?</Title>
             </CardItem>
         </Card>
         <Card style={{alignItems: 'center'}}>
        <CardItem button onPress={() =>  this.props.navigation.navigate("When")}>
                 <Title>When?</Title>
          </CardItem>
         </Card>
         <Card style={{alignItems: 'center'}}>
             <CardItem button>
                 <Title>Where?</Title>
             </CardItem>
         </Card>
         </View>
        <View style={styles.row}>
        <Card style={{alignItems: 'center'}}>
             <CardItem button>
                 <Title>What?</Title>
             </CardItem>
         </Card>
         <Card style={{alignItems: 'center'}}>
             <CardItem button>
                 <Title>Memo</Title>
             </CardItem>
         </Card>
         <Card style={{alignItems: 'center'}}>
             <CardItem button>
                 <Title>P.S</Title>
             </CardItem>
         </Card>
        {/* <MyQuestion
        title="what?"
        result=""
        />
        <MyQuestion
        title="memo?"
        result=""
        />
        <MyQuestion
        title="p.s"
        result=""
        /> */}
        </View>
      </Content>
      </Container>
    );
  }
}

// return(
//   <View style={styles.container}>
//   {/* <Button>Who</Button>
//   {/* <TextInput
//     style={styles.input}
//     placeholder='Enter Name'
//     onChangeText={(val) => {setName(val)}}/> */}


// {/* <Text>When</Text>
//   <TextInput
//     style={styles.input}
//     placeholder='Enter Date'
//     onChangeText={(val) => {setDate(val)}}/> */} 
//      <View style={styles.row}>
//       <Card style={{alignItems: 'center'}}>
//                   <CardItem button onPress={() => this.props.navigation.navigate("Who")}>
//                       <Title>Who</Title>
//                   </CardItem>
//               </Card>
//               <Card style={{alignItems: 'center'}}>
//              <CardItem button onPress={() =>  this.props.navigation.navigate("DatePickerScreen")}>
//                       <Title>When</Title>
//                </CardItem>
//         </Card>
//       </View>

// <Card>
//   <CardItem button>
// <Text>Where</Text>
//   <TextInput
//     style={styles.input}
//     placeholder='Enter Place'
//     onChangeText={(val) => {setPlace(val)}}/>
//     </CardItem>
// </Card>
// <Card>
//   <CardItem button>
// <Text>What</Text>
//   <TextInput
//     multiline
//     style={styles.input}
//     placeholder='Enter What'
//     onChangeText={(val) => {setWhat(val)}}/>
//     </CardItem>
// </Card>

// <Card>
//   <CardItem button>
// <Text>Memo</Text>
//   <TextInput
//     multiline
//     style={styles.input}
//     placeholder='Enter Memo'
//     onChangeText={(val) => {setMemo(val)}}/>
//    </CardItem>
// </Card>

//     <Card>
//     <CardItem button>
//   <Text style={{width:'40%'}}>name: {name}, date:{date},
//    place: {place}, what: {what}, memo: {memo}</Text>
//    <Button title="send"></Button>
//    </CardItem>
//    </Card>
//   </View>
// );
// }

const styles = StyleSheet.create({
  container: {
      flex: 1,
      fontSize: 20,
      backgroundColor: "#be1323",
      alignItems: "center",
      justifyContent: "center"
    },
    input:{
      borderWidth: 1,
      borderColor: '#777',
      padding: 8,
      margin:10,
      width: 200,

    }
  });


// export default class MeetMeetScreen extends Component {
//    render(){
//      return (
//        <Container>

//        </Container>
//      );
//    }
// }



    // static navigationOptions = {
    //     tabBarIcon: ({ tintColor }) => (
    //         <Ionicons name={'ios-heart-half'} style={{ fontSize:30, color: tintColor }} />
    //     )
    // }

//     render() {
//         return (
//           <Container style={{backgroundColor: '#efefef'}}>
//           <Content style={justifyContent='center', alignItems= 'center'}>
//             <View style={styles.row}>
//               {/* 누르면 친구리스트 보여주기 */}
//             {/* <MyQuestion
//             title="who?"
//             result="Jane,Hyebin"
//             onPress={() => this.props.navigation.navigate("Friends")}
//             />
//            <MyQuestion
//             title="when?"
//             result=""
//             />
//             <MyQuestion
//             title="where?"
//             result=""
//             /> */}
//               <Card style={{alignItems: 'center'}}>
//                  <CardItem button onPress={() => this.props.navigation.navigate("Who")}>
//                      <Title>Who</Title>
//                  </CardItem>
//              </Card>
//              <Card style={{alignItems: 'center'}}>
//             <CardItem button onPress={() =>  this.props.navigation.navigate("When")}>
//                      <Title>When</Title>
//               </CardItem>
//              </Card>
//              </View>
//              <View style={{flexDirection:'col'}}>
//              <Card style={{alignItems: 'center'}}>
//                  <CardItem button>
//                      <Title>Where</Title>
//                      <TextInput style={styles.TextInput}></TextInput>
//                  </CardItem>
//              </Card>
//             <Card style={{alignItems: 'center'}}>
//                  <CardItem button>
//                      <Title>What</Title>
//                      <TextInput style={styles.TextInput}></TextInput>
//                  </CardItem>
//              </Card>
//              <Card style={{alignItems: 'center'}}>
//                  <CardItem button>
//                      <Title>Memo</Title>
//                      <TextInput style={styles.TextInput}></TextInput>
//                  </CardItem>
//              </Card>
//              <Card style={{alignItems: 'center'}}>
//                  <CardItem button>
//                      <Title>P.S</Title>
//                      <TextInput style={styles.TextInput}></TextInput>
//                  </CardItem>
//              </Card>
//             </View>
//           </Content>
//           </Container>
//         );
//       }
// }

//       row: {
//         flex: 1,
//         alignItems: "center",
//         backgroundColor: "#efefef",
//         flexDirection: 'row',
//         justifyContent: 'space-around'
//       },
//       title:{
//         flex: 1,
//         fontSize: 15,
//         fontWeight: 'bold',
//         backgroundColor: "#fff",
//         alignItems: "center",
//         justifyContent: "center"
//       },
//       TextInput:{
//         width: '50%'
//       },
//       input:{
//         backgroundColor: '#d1cece',

//       }
// });

