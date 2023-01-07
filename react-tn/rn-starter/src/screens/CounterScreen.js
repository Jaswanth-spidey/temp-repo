import React, { useReducer } from 'react';
import { Component, View, Text, StyleSheet, Button } from 'react-native';

const CHANGER = 10;
const reducer = (state, action) => {

    switch(action.type){
        case 'increase':
            return {...state, counter: state.counter + action.payload};
        case 'decrease':
            return {...state, counter: state.counter - action.payload};
        case 'reset':
            return {...state, counter: state.counter-state.counter};
        default:
            return state;
    }

};

const CounterScreen = () => {
    //todo: fix this
    //let counter = 0;
    //const [counter, setCounter] = useState(0);

    const [state, dispatch] = useReducer(reducer, {counter: 0});
    const {counter} = state;
    return <View>
        <Text>Current Count: {counter}</Text>
        <Button title="Increase" onPress={() => {
            // counter++;
            //setCounter(counter+1);
            dispatch({type: "increase", payload: CHANGER});
        }}/>
        <Button title="Decrease" onPress={() => {
            // counter--;
            //setCounter(counter-1);
            dispatch({type: "decrease", payload: CHANGER});
        }}/>
        <Button title="Reset" onPress={() => {
            // counter = 0;
            //setCounter(counter - counter);
            dispatch({type: "reset", payload: CHANGER});
        }}/>
    </View>
};

const styles = StyleSheet.create({});

export default CounterScreen;