import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar= ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style = {styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput 
                placeholder="Search"
                style={styles.inputStyle}
                value ={term}
                onChangeText={newTerm => onTermChange(newTerm)}
                autoCapitalize='none'
                autoCorrections = {false}
                //onEndEditing = {() => onTermSubmit()}
                onEndEditing = {onTermSubmit}
            />
        </View>
    );
};

styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 15,
        backgroundColor: '#D3D3D3',
        height: 40,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 10,
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;