import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultShowScreen = ({navigation}) => {
    const [result, setResult] = useState([]);
    const id = navigation.getParam('id');
    const getResult =  async id => {
        try{
            const response= await yelp.get(`/${id}`);
            setResult(response.data);
        }
        catch(err){
            console.log(err);
            return <Text>Caught an exception</Text>;
        }
    };
    console.log(result);
    useEffect(() => {
        getResult(id);
    }, []);

    if(result===[]){
        return <Text>Result is null</Text>;
    }
    if(!result.photos){
        return null;
    }
    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList 
                data = {result.photos}
                keyExtractor = {(photos)=>photos}
                renderItem={({ item }) => {
                    return <Image style={styles.image} source={{uri: item}}/>
                }}
            />  
        </View>
    );
};

const styles = StyleSheet.create({
    image:{
        height: 200,
        width: 300,
    }
});

export default ResultShowScreen;