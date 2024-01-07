import React from 'react'
import { StyleSheet, Text, View ,ScrollView,Pressable} from 'react-native'
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
const FinalCheckout = ({item}) => {
    //destructuring from {item}
   
    const {name,price} = item
    return (
      
      <View

        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10,
          // borderBottomWidth: 1,
          // borderBottomColor: "#C0C0C0",
          backgroundColor: "white",
        }}
      >
        <Text style={{ fontWeight: "600", color: "black", fontSize:19 }}>{name}</Text>
        <Text style={{ fontWeight: "600", color: "black" }}>{price}</Text>
        
        
      </View>
    );
}

export default FinalCheckout

const styles = StyleSheet.create({})