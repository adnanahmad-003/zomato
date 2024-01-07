import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    Pressable,
    TouchableOpacity,
    ScrollView,
    
  } from "react-native";
  import React, { useContext, useState } from "react";
  import {Ionicons} from '@expo/vector-icons'
  import { Audio } from "expo-av";
  import { CartItems } from "../Context";
  import { MaterialIcons } from "@expo/vector-icons";
  import { MaterialCommunityIcons } from "@expo/vector-icons";
  import { FontAwesome5 } from "@expo/vector-icons";
  import { AntDesign } from "@expo/vector-icons";
  import FinalCheckout from "../components/finalcheckout";
  import { FontAwesome } from '@expo/vector-icons';
 import CheckoutInst from "../components/CheckoutInst";
  import { useNavigation} from "@react-navigation/native";

const ViewCartScreen = ({route}) => {
    
    /*const [feed,setFeed]=(false);
    const handleCheckboxToggle = (isChecked) => {
      setFeed(isChecked);
      // Perform additional actions based on checkbox state
      console.log(feed);
    };*/

    const navigation = useNavigation();
    const { cart, setCart } = useContext(CartItems);
    const [loading,setLoading] = useState(false);
   // const [modal, setModal] = useState(false);
    const [sound, setSound] = React.useState();
    const total = cart
      .map((item) => Number(item.price.replace("₹", "")))
      .reduce((prev, curr) => prev + curr, 0); 
    const deliveryCharge = Number(30);
    const donation = Number(3);
    const {name} = route.params;


    //sound
    async function playSound() {
      console.log("Loading Sound");
      const { sound } = await Audio.Sound.createAsync(
        require("../assets/zomato.mp3")
      );
      setSound(sound);
  
      console.log("Playing Sound");
      await sound.playAsync();
    }
  
    React.useEffect(() => {
      return sound
        ? () => {
            console.log("Unloading Sound");
            sound.unloadAsync();
          }
        : undefined;
    }, [sound]);
    
    const onPress = () => {
        
    
        setCart([]);
        navigation.navigate("OrderData",{
          restaurentName: name
        });
       setTimeout(() => {
        playSound();
       },1000);
    
      }

  // console.log(name,"name is  dw3w");
  const latitude = route.params.latitude;
  const longitude = route.params.longitude;
  return (
    <>
     <ScrollView>
    <View
         style={{
          paddingTop:25,backgroundColor: "#ededed",height:1710,
         }}
       >
        
            <View style={{flexDirection:"row",backgroundColor:"white",padding:6}}>
            <Pressable style={{paddingTop: 12,paddingBottom:9,paddingLeft:8}} onPress={()=>navigation.goBack()}>
            <Ionicons name ="chevron-back" size={24} color="black"/>
        </Pressable>
           <Text
             style={{
               color: "black",
               textAlign: "left",
               paddingTop: 12,
               paddingLeft:15,
               fontSize: 22,
               paddingBottom: 9,
               
             }}
           >
           {name}
           </Text>
           </View>
           <View
             style={{
               flexDirection: "row",
               alignItems: "center",
               
               
             }}
           >
             
           </View>
           <View style={{margin:10,padding:10,borderRadius:7,backgroundColor:"white"}}>
             {cart.map((item, index) => (
               <FinalCheckout key={index} item={item} />
             ))}


          </View >
          <View style={{ padding: 10 ,margin:10,padding:10,borderRadius:7,backgroundColor:"white"}}>
               
               <View style={{ flexDirection: "row", alignItems: "center" }}>
                 <MaterialCommunityIcons
                   name="brightness-percent"
                   size={24}
                   color="blue"
                 />
                 <Text style={{ marginLeft: 10 ,fontSize:18}}>View all offers</Text>
               </View>
             </View>

             <CheckoutInst />    
              
             <View style={{margin:10,padding:10,borderRadius:7,backgroundColor:"white"}}>
             
              <View style={{flexDirection:"row",paddingBottom:5}}>
           <MaterialIcons style={{}} name="timer" size={24} color="green" />
             <Text
               style={{
                 color: "black",
                 fontSize: 17,
                 fontWeight: "600",
                 marginLeft: 6,
               }}
             >
               Delivery in 25-30 mins
             </Text>
             </View>
 
             <View
               style={{
                 borderBottomColor: "#D0D0D0",
                 borderBottomWidth: 1,
               }}
             />
 
             <View style={{ padding: 10 }}>
               <Text
                 style={{ fontSize: 16, fontWeight: "bold"}}
               >
                 Climate conscious delivery
               </Text>
               
             </View>
 
             <View
              
             />
             <View
               style={{
                 flexDirection: "row",
                 alignItems: "center",
                // padding: 10,
               }}
             >
               <FontAwesome5 name="leaf" size={24} color="#20B2AA" />
               <Text style={{ marginLeft: 10, fontSize: 15 }}>
                 We fund environmental projects to offset carbon footprint of
                 our deliveries
               </Text>
             </View>
 
             <View
               style={{
                 borderBottomColor: "#D0D0D0",
                 borderBottomWidth: 3,
               }}
             />
 
             <View style={{  }}>
               <View
                 style={{
                   flexDirection: "row",
                   alignItems: "center",
                   justifyContent: "space-between",
                   padding: 10,
                 }}
               >
                 <Text>Item total</Text>
                 <Text>
                   {" ₹"}
                   {total}
                 </Text>
               </View>
 
               <View
                 style={{
                   flexDirection: "row",
                   alignItems: "center",
                   justifyContent: "space-between",
                   padding: 10,
                 }}
               >
                 <Text style={{}}>Delivery charge upto 1 km</Text>
                 <Text>
                   {" ₹"}
                   {deliveryCharge}
                 </Text>
               </View>
 
               <View
                 style={{
                   flexDirection: "row",
                   alignItems: "center",
                   justifyContent: "space-between",
                   padding: 10,
                 }}
               >
                 <Text>Donate ₹3 to Feeding India </Text>
                 <Text>
                   {" ₹"}
                   {donation}
                 </Text>
               </View>
             </View>
 
             <View
               style={{
                 borderBottomColor: "#D0D0D0",
                 borderBottomWidth: 3,
               }}
             />
           
 
           <View
             style={{
               flexDirection: "row",
               alignItems: "center",
               justifyContent: "space-between",
               paddingVertical: 14,
               padding: 10,
               
             }}
           >
             <Text
               style={{
                 color: "black",
                 fontWeight: "bold",
                 paddingBottom: 3,
                 fontSize: 17,
               }}
             >
               GrandTotal
             </Text>
             <Text style={{ color: "black", fontSize: 17, fontWeight: "600" }}>
               {"₹"}
               {total + 3 + 30}
             </Text>
           </View>
           </View>
           <Text style={{color:"#adadad" ,fontWeight:"bold",paddingLeft:19,fontSize:21,padding:0}}>CANCELLATION POLICY</Text>
           <Text style={{color:"#c6c6c6",padding:2,fontSize:15,paddingLeft:19,fontWeight:"bold"}}>Help us reduce food waste by avoiding</Text>
           <Text style={{color:"#c6c6c6",padding:2,fontSize:15,paddingLeft:19,fontWeight:"bold"}}>cancellations after placing your order . A 100%</Text>
           <Text style={{color:"#c6c6c6",padding:2,fontSize:15,paddingLeft:19,fontWeight:"bold"}}>cancellation fee will be applied</Text>
           </View>
           
           </ScrollView>
           {/* <View
             style={{
               borderBottomColor: "#D0D0D0",
               borderBottomWidth: 3,
             }}
           /> */}
           <View style={{flexDirection:"row",padding:10,backgroundColor:"white",position:"absolute",bottom:0}}>
            <View style={{width:"35%"}}>
            <FontAwesome name="money" size={16} color="black" />
                <Text>Pay using:</Text>
                <Text>Cash on Delivery</Text>
            </View>
            <View style={{flex:1}}>
           <TouchableOpacity
           onPress={onPress}
             style={{
               backgroundColor: "white",
               padding: 14,
               alignItems: "center",
               backgroundColor: "#e52d27",
               borderRadius:5,
               flexDirection:"row",
               justifyContent:"space-between"
               
             }}
             activeOpacity={0.9}
             // onPress={() => addToFireStore()}
           >
             <Text style={{ color: "white", fontSize: 20, fontWeight: "700" }}>
             {"₹"}
               {total + 3 + 30} Total  
             </Text>
             <Text style={{ color: "white", fontSize: 20, fontWeight: "700" }}>
             
                 Place Order
             </Text>
           </TouchableOpacity>
           </View>
           </View>
           
           
       
         
     
     </>
  )
}

export default ViewCartScreen

const styles = StyleSheet.create({})