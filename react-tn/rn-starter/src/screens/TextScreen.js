import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
    const [name, setName] = useState('');

    const [pass, setPass] = useState('');
    var passHazard = '';
    if(pass.length>0 & pass.length<5){
        passHazard = 'Password must be minimum 5 characters';
    }
    else{
        passHazard = '';
    }

    return <View>
        <Text>Enter Name: </Text>
        <TextInput 
            style={styles.input}
            autoCapitalize= "none"
            autoCorrect={false}
            value={name}
            onChangeText={(newValue) => setName(newValue)}
        />
        <Text>My name is: {name}</Text>

        <Text>Enter Password: </Text>
        <TextInput 
            style={styles.input}
            autoCorrect={false}
            autoCaptialization='none'
            value={pass}
            onChangeText={(newPass) => setPass(newPass)}
        />
        <Text>{passHazard}</Text>
        {pass.length>0 && pass.length<5 ? <Text>Password Should be at least 5 characters</Text> : null}
    </View>
};

const styles = StyleSheet.create({
    input: { 
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;