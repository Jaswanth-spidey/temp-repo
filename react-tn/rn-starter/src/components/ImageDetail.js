import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, Image } from "react-native";

const ImageDetail = (props) => {
    return (
        <View>
            <TouchableOpacity>
                <Image source={ props.imageSource }/>
                <Text>{ props.title }</Text>
                <Text>Image Score - {props.imageScore}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({})

export default ImageDetail;