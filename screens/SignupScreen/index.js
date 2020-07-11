import React from 'react';
import DatePicker from 'react-native-datepicker';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  state={
    email:"",
    password:""
  }
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Username" 
            placeholderTextColor="#707070"
            onChangeText={text => this.setState({username:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email" 
            placeholderTextColor="#707070"
            onChangeText={text => this.setState({email:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password" 
            placeholderTextColor="#707070"
            onChangeText={text => this.setState({password:text})}/>
        </View>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView:{
    width:"80%",
    backgroundColor:"#FAF7F0",
    borderRadius:20,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"black"
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#FBAF02",
    borderRadius:20,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:50,
    marginBottom:10
  },
  buttonText:{
    fontSize:16,
    color:"white"
  },
  signUpText:{
    fontSize:15,
    color:"#FBAF02"
  }
});