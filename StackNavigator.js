import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screen/HomeScreen";
import HotelRoom from "./screen/HotelRoom";
//import ViewCart from "./components/ViewCart";
import ViewCartScreen from "./screen/ViewCartScreen";
import OrderData from './screen/OrderData';


const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="HotelRoom" component={HotelRoom} options={{headerShown:false}}/>
        <Stack.Screen name="ViewCartScreen" component={ViewCartScreen} options={{headerShown:false}}/>
        <Stack.Screen name="OrderData" component={OrderData} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
