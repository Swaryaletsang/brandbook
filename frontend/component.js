import { StatusBar } from 'expo-status-bar';
import { TextInput ,StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

export default function Component() {
    const [submited, setSubmited] = useState(false);
    const [user, setUser] = useState({
        name:'',
        surname:'',
    });

    const [loading, setLoading] = useState(false)


    const onChangeName = (value) => {
        setUser({...user, name:value});
    }

    const onChangeSurname = (value) => {
        setUser({...user, surname:value})
    }

    const saveData = () =>{
        
        axios.post('http://localhost:1337/api/employees',{
            data:{
                Name:user.name,
        Surname:user.surname,
            }
    })
    .then((res)=> {
        console.log(res);
        setLoading(true)
    })
    .catch((error)=> {
        console.log(error);
    })
    }
    return (
        <View style={styles.container}>
            <Text style={styles.instructions}>SIGNUP FORM</Text>
            <StatusBar style="auto" />
            <TextInput
            style = {styles.input}
            placeholder = {'Name'}
            onChangeText={ (value) => onChangeName(value) }
            />
            <TextInput
            style = {styles.input}
            placeholder = {'Surname'}
            onChangeText={ (value) => onChangeSurname(value) }
            />
            <Button
            title={submited?'Thank you':'Submit'}
            style = {styles.button, styles.buttonText}
            disabled = {submited}
            onPress = {saveData}
            />
        </View>
    )
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      width: 305,
      height: 159,
      marginBottom: 20,
      borderRadius: 50,
    },
    instructions: {
      color: '#888',
      fontSize: 18,
      marginHorizontal: 15,
      marginBottom: 10,
    },
    button: {
      backgroundColor: "blue",
      padding: 20,
      borderRadius: 10,
    },
    buttonText: {
      fontSize: 20,
      color: '#fff',
    }, 
    input:{
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    }
  });
  
