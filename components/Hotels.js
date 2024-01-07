import { StyleSheet, Text, View,Image, Pressable } from 'react-native'
import React from 'react'
import {AntDesign} from '@expo/vector-icons';
import { SimpleLineIcons } from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native"
const Hotels = (props) => {
    const restaurant = props.restaurant;
    const navigation = useNavigation();
    
    //console.log(restaurant);
  return (
    <Pressable onPress={() =>
      navigation.navigate("HotelRoom", {
        id: restaurant.id,
        name: restaurant.name,
        adress: restaurant.adress,
        smalladress: restaurant.smalladress,
        cuisines: restaurant.cuisines,
        aggregate_rating: restaurant.aggregate_rating,
        no_of_Delivery: restaurant.no_of_Delivery,
        menu: restaurant.menu,
        latitude: restaurant.latitude,
        longitude: restaurant.longitude,
      })
    }
     style={{margin:7}}>
      
      <Image  source={{uri: restaurant.featured_image}} style={{width:"100%" , aspectRatio:6/4, borderTopLeftRadius:7,borderTopRightRadius:7}} />
      <View style={{padding:5,backgroundColor:"white" ,flexDirection:"row",alignItems:"center", justifyContent:"space-between"}}>
        <View>
      <Text style={{fontSize:18 , fontWeight:"600"}}>{restaurant.name}</Text>
      <Text style={{fontSize:13 , fontWeight:"200"}}>{restaurant.cuisines}</Text>
      </View>
      
      <View
        style={{
          position: "absolute",
          bottom: 80,
          fontSize: 18,
          color: "white",
          fontWeight: "bold",
          backgroundColor: "#318CE7",
          paddingHorizontal: 10,
          padding: 3,
          borderTopRightRadius: 5,
          borderBottomRightRadius: 5,
        }}
      >
        <Text style={{color: "white", fontWeight:"bold"}}>{restaurant.offer}</Text>
        <Text style={{paddingTop:2,fontWeight:"bold"}}>Up to ₹120</Text>
      </View>
      <View style={{
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    bottom: 68,
    backgroundColor: "white",
    paddingHorizontal: 10,
    borderRadius: 6,
    padding: 2,
    right: 10,
  }}>
        <SimpleLineIcons name="clock" size={15} color="green" />
        <Text style={{ marginLeft: 3, fontSize: 12 }}>{restaurant.time}</Text>
      </View>
      <View style={{flexDirection:"row",alignItems:"centre", backgroundColor:"#397744",padding:6,borderRadius:4,justifyContent:"center", marginRight:9}}>
        <Text style={{fontWeight:"600",paddingRight:4,color:"white",fontSize:12}}>{restaurant.aggregate_rating}</Text>
        <AntDesign name='star'size={14} color='white'/>
      </View>
      </View>
      <View style={{padding:10,backgroundColor:"white"}}>
        <Text style={{height:1,borderWidth:1,borderColor:"#D3D3D3"}}/>
      </View>
      <View style={{flexDirection:"row" , alignItems:"center" , backgroundColor:"white", padding:10,borderBottomLeftRadius:7,borderBottomRightRadius:7}}>
      <View style={{padding:4 , backgroundColor:"#E52850", width:30,height:30,borderRadius:15 , alignItems:"center",justifyContent:"center"}}>
      <AntDesign name='doubleright'size={16} color='white'/>
      </View>
      <Text style={{fontSize:15,fontWeight:"600" , padding:3, alignItems:"center", justifyContent:"center"}}>{restaurant.no_of_Delivery}+ orders placed here</Text>
      <View style={{marginLeft:42 ,padding:4, borderRadius:3}}>
        <Text style={{fontSize:13,fontWeight:"800"}}>
          MAX SAFETY
        </Text>
        <Text style={{fontSize:13,fontWeight:"500"}}>DELIVERY</Text>
      </View>
      </View>
    </Pressable>
  )
}

export default Hotels

const styles = StyleSheet.create({})