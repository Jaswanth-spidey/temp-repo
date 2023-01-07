import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  
  return (
    <View>
      <Text style={styles.text}>Hey Spider Man</Text>
      <Button 
        onPress={() => navigation.navigate('Components')}
        title="Components Demo Screen"
      />
      <Button
        title="Components List Screen"
        onPress={() => navigation.navigate('ListScr')}
      />
      {/* <TouchableOpacity onPress={() => props.navigation.navigate('ListScr')}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
      <Button
        title = "Go to Image Screen"
        onPress={() => navigation.navigate('ImageScreen')}
      />
      <Button
        title = "Go to CounterScreen"
        onPress={() => navigation.navigate('CounterScreen')}
      />
      <Button
        title = "Go to Color Screen"
        onPress={() => navigation.navigate('ColorScreen')}
      />
      <Button
        title = "Go to Square Color Screen"
        onPress={() => navigation.navigate('SquareColorScreen')}
      />
      <Button
        title = "Go to Text Display Screen"
        onPress={() => navigation.navigate('TextScreen')}
      />
      <Button
        title = "Go to Box Screen"
        onPress={() => navigation.navigate('BoxScreen')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
