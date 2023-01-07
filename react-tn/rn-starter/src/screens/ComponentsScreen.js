import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = function() {
    const greeting = ['Hello Spidey', 123, '123'];
    const textgreet = <Text>Hey Spidey!!</Text>; 
    return <View>
        <Text style={Styles.textStyle}>This is the components screen</Text>
        <Text>{greeting}</Text>
        {textgreet}
    </View>
};

const Styles = StyleSheet.create({
    textStyle: {
        fontSize: 50
    }
});

export default ComponentsScreen;