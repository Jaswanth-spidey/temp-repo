import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ex1Screen = function(){
    const myname = 'Jaswanth';

    return <View>
        <Text style = { styles.textStyle }>Getting Started with React-Native</Text>
        <Text style = {{ fontSize:20 }}>My name is {myname}</Text>
    </View>
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    }
})

export default ex1Screen;