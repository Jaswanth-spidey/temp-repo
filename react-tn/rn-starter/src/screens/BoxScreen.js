import React from 'react';
import { Component, Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textOneStyle}>Child #1</Text>
            <Text style={styles.textTwoStyle}>Child #2</Text>
            <Text style={styles.textThreeStyle}>Child #3</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        flexDirection: 'row',
    },
    textOneStyle: {
        borderWidth: 3,
        borderColor: 'red',
        height: 100, 
        flex: 1,
        marginRight: 10
    },
    textTwoStyle: {
        borderWidth: 3,
        borderColor: 'red',
        height: 100, 
        flex:1,
        alignSelf: 'flex-end',
        marginHorizontal: 10
        //...StyleSheet.absoluteFillObject,
    },
    textThreeStyle: {
        borderWidth: 3,
        borderColor: 'red',
        height: 100, 
        flex: 1,
        marginLeft: 10
    }
});

export default BoxScreen;
