import React,{useState,useEffect} from 'react';
import {Text,StyleSheet,View, TextInput, SafeAreaView,FlatList,ScrollView,Alert,Pressable} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import Categories from '../components/categories';
import ItemComponents from '../components/ItemComponents';
import hotel from '../data/hotel';
import { Octicons, Ionicons } from "@expo/vector-icons";
import Hotels from '../components/Hotels';
import { SliderBox } from "react-native-image-slider-box";
import * as Location from "expo-location";
import * as LocationGeocoding from "expo-location";
const HomeScreen = ()=>{
 /* const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    //console.log(location);
    text = JSON.stringify(location);
  }
  const locationData = JSON.parse(text);
  
  // Extract latitude and longitude
  const latitude = locationData.coords.latitude;
  const longitude = locationData.coords.longitude;

  console.log('Latitude:', latitude);
  console.log('Longitude:', longitude);
  
  

*/


    const images =[
        "https://pbs.twimg.com/media/E5SEje9VUAMGdey?format=png&name=small",
        "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/lhnwo9ezxo7mpkpvtdcy",
         
               
      ]
      
    return <ScrollView style={{backgroundColor:"#F0F0F0"}}>
      
       

        <View style={{flex:1}}>
        <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 12,
          padding: 10,
          marginTop:40
        }}
      >
        <Octicons name="location" size={24} color="#E52850" />
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 15, fontWeight: "500" }}>Deliver To</Text>
          <Text style={{ color: "gray", fontSize: 16, marginTop: 3 }}>
            IIIT Dharwad Campus
          </Text>
        </View>
        <Pressable
          style={{
            backgroundColor: "#6CB4EE",
            width: 40,
            height: 40,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>A</Text>
        </Pressable>
      </View>
    <View style={{margin:10,marginTop:0, padding:6 , flexDirection : 'row', alignItems:'center' , backgroundColor:'#D8D8D8' , borderRadius:4 , marginBottom:6}}>
        <AntDesign name='search1'size={20} color='#E52850'/>
        <TextInput style={{paddingLeft:4}} placeholder='Restaurant name , cuisines  or a dish' />
        
    </View >
    <Categories/>
    <View style={{}}>
    <SliderBox sliderBoxHeight={290} 
   images={images} circleLoop
   dotColor="#13274F"
   inactiveDotColor="#90A4AE"
   ImageComponentStyle={{
       borderRadius:6,
       width:"94%",
       marginTop:10
   }} />
    </View>


    <View style={{margin:10}}>
    <Text
              style={{
                margin: 10,
                fontSize: 20,
                fontWeight: "700",
                paddingLeft: 6,
              }}
            >
              Eat what makes you happy
            </Text>
    <ItemComponents/>
    
    <FlatList
              data={hotel}
              scrollEnabled={false}
              renderItem={({ item }) => <Hotels restaurant={item} />}
            />
            </View>
            </View>
    </ScrollView>
}
export default HomeScreen
const style = StyleSheet.create({

})