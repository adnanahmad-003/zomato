import { Pressable, StyleSheet, Text, View ,FlatList, ScrollView} from 'react-native'
import React ,{useContext} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native'
import {Ionicons} from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
//import { useRoute } from "@react-navigation/native";
import Menu from "../components/Menu";
//import menuData from "../data/menuData";
import { CartItems } from "../Context";

const HotelRoom = () => {
  //const data = menuData

  const items = [{
    id:"1",
    name:"Filters",
    color :"#C5C6D0",
    iname:"caret-down-outline",
},{
    id:"2",
    name:"Veg",
    color :"green",
    iname:"md-stop-circle-outline",
},
{
    id:"3",
    name:"Egg",
    color :"#FFFFF0",
    iname:"egg",
},
{
  id:"4",
  name:"Non-veg",
  color :"#D13012",
    iname:"md-stop-circle-outline",
},
{
id:"5",
name:"Top rated",
color :"#B90E0A",
    iname:"heart-sharp",
}, {
id:"6",
name:"Spicy",
color :"#990F02",
iname:"leaf",
}]
  const { cart, setCart,onPress,additems,setAdditems } = useContext(CartItems);
  const { menuData } = useContext(CartItems);
    const route = useRoute();
    //route.params contains all the data passed id , address , name
   // console.log(route.params);
   //console.log(cart.length)
   const {name} = route.params;
  // console.log(name);
  const ob = name;
  const latitude = route.params.latitude;
  const longitude = route.params.longitude;
     const navigation = useNavigation();
     const total = cart
      .map((item) => Number(item.price.replace("₹", "")))
      .reduce((prev, curr) => prev + curr, 0); 
  return (
    <SafeAreaView>
      <ScrollView>
      <View style={{flexDirection:"row",justifyContent:"space-between" ,margin:4 ,padding:4}}>
        
        <Pressable onPress={()=>navigation.goBack()}>
            <Ionicons name ="chevron-back" size={24} color="black"/>
        </Pressable>
        <View style={{flexDirection:"row",marginRight:10}}>
        <Pressable style={{marginRight:10}}><Ionicons name="search" size={24} color="black" /></Pressable>
        <Pressable style={{marginRight:10}}><Ionicons name="heart-outline" size={24} color="black" /></Pressable>
        <Pressable style={{marginRight:10}}><MaterialCommunityIcons name="share" size={24} color="black" /></Pressable>
        <Pressable style={{marginRight:10}}><Ionicons name="ellipsis-vertical-outline" size={24} color="black" /></Pressable>
        </View>
        </View>
        <View>
          <View style={{marginLeft:10 , marginTop:10}}>
              <Text style={{fontWeight:"bold", fontSize:27,textAlign:"center"}}>{route.params.name}</Text>
              <Text style={{textAlign:'center' , fontSize:18,color:"gray"}}>
               {route.params.cuisines}
              </Text>
              
          </View>
          <View style={{flexDirection:'row',justifyContent:"center",marginTop:5}}>
              <View style={{flexDirection:"row",alignItems:"centre", backgroundColor:"#397744",padding:6,borderRadius:4,justifyContent:"center", marginRight:9}}>
              <Text style={{fontWeight:"600",paddingRight:4,color:"white",fontSize:12}}>{route.params.aggregate_rating}</Text>
               <AntDesign name='star'size={14} color='white'/>
              </View>
              <View>
                <Text style={{fontSize:18}}>{route.params.no_of_Delivery}+ ratings</Text>
              </View>
          </View>
          <View style={{flexDirection:'row',justifyContent:"center",marginTop:7 , alignContent:"center" }}>
              <View style={{flexDirection:"row",alignItems:"centre",justifyContent:"center" , backgroundColor:"#E5E4E2" , padding:2,paddingLeft:6,borderBottomLeftRadius:13 ,borderTopLeftRadius:13}}>
              
              <Ionicons name="timer" size={24} color="green" />
              <Text style={{fontWeight:"500",color:"black",fontSize:17}}>35-40 mins . 4 Km |</Text>
              </View>
              <View style={{backgroundColor:"#E5E4E2", padding:2,borderBottomRightRadius:13 ,borderTopRightRadius:13 , paddingRight:6 }}>
                <Text style={{fontSize:17}}> {route.params.smalladress}</Text>
              </View>
          </View>
        </View>
        <View style ={{marginTop:10}}>
      <FlatList  showsHorizontalScrollIndicator={false} horizontal={true} data={items} renderItem={({item}) =>(
        <Pressable style={{ flexDirection:"row",margin:7, padding:5 , borderRadius:5 , marginTop:0 ,borderWidth: 2,borderColor: '#E5E4E2'}}>
          <Ionicons name={item.iname} size={24} color={item.color} />
            <Text style={{color:"black", fontSize:17,fontWeight:"600"}}>{item.name}</Text>
        </Pressable>
  )}/>
<View style={{margin:5 , padding:8}}>
    <LinearGradient
        // Button Linear Gradient
        colors={['rgba(0, 48, 143, 1)', 'rgba(225, 235, 238, 1)', 'rgba(255, 255, 255, 1)', 'rgba(240, 248, 255, 1)']}
        locations={[0, 0.04, 0.65, 0.94]}
        style={{height:100,borderRadius:7,marginTop:3}}>
        <Text style={{textAlign:'center',paddingTop:15,fontSize:22,fontWeight:"600"}}>Flat ₹150 Off</Text>
        <Text style={{textAlign:'center',paddingTop:7,fontSize:18}}>Use code 'flat150 |above ₹350'</Text>
      </LinearGradient>
      <View style={{position:"absolute",right:"50%"}}>
      <MaterialCommunityIcons name="brightness-percent" size={24} color="#00308F" />
      </View>
      </View>
      <View style={{ marginLeft: 10, marginTop: 10 }}>
          <Text style={{ fontSize: 17, fontWeight: "700" }}>Full Menu</Text>
          <Text
            style={{
              backgroundColor: "#ff1493",
              width: 74,
              height: 3,
              marginTop: 6,
            }}
          ></Text>
        </View>
        {menuData.map((item,index) => (
          <Menu
          cart={cart}
          setCart={setCart}
          
          key={index}
          menu={item}
            
          />
        ))}
  </View>
  
  </ScrollView>

  <Pressable>
        {total === 0 ? null : (
          <Pressable
            style={{
              position: "absolute",
              bottom: 0,
              //left: 100,
              //borderRadius: 6,
              backgroundColor: "#FF3366",
              width:"100%"
            }}
            //onPress={() => setModal(true)}
            onPress={() =>{
              //console.log("its working")
              //console.log(name)
                 navigation.navigate("ViewCartScreen", {
                   name:name,
                   latitude:latitude,
                   longitude:longitude,
                 })}}
          >
            <Text
              style={{
                color: "white",
                fontSize: 16,
                textAlign: "center",
                paddingTop: 10,
                fontWeight:"600"
                
                //width: 180,
              }}
            >
              {cart.length} items added
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 18,
                textAlign: "center",
                paddingBottom: 10,
                //width: 180,
              }}
            >
              View Cart • {"₹"}
              {total}
            </Text>
          </Pressable>
          
        )}
      </Pressable>
  
    </SafeAreaView>
  )
}

export default HotelRoom

const styles = StyleSheet.create({})