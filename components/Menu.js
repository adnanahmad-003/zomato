import React, { useContext, useState ,useEffect} from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
//import { CartItems } from "../Context";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Menu = ({menu ,cart ,setCart}) => {
  
  const bestSeller = true;
  const [additems, setAdditems] = useState(0);

  useEffect(() => {
    // Calculate itemCount when the component mounts
    const itemCount = cart.reduce((count, item) => (item.id === menu.id ? count + 1 : count), 0);
    setAdditems(itemCount);
    //console.log('Item count:', itemCount);
  }, []);
  const removeItemFromCart = (menuId) => {
    // Find the index of the first occurrence of the item with the specified menuId
    const indexToRemove = cart.findIndex((item) => item.id === menuId);
  
    // If the item is found, remove it using splice
    if (indexToRemove !== -1) {
      const newCart = [...cart]; // Create a shallow copy of the cart array
      newCart.splice(indexToRemove, 1); // Remove one occurrence of the item
  
      // Now, set the state or update the cart with the new array
      //console.log(cart);
      setCart(newCart);
      
     
    }
  };
  

  return (
    // <Pressable>
    <View style={{ backgroundColor: "white",flex:1}}>
    
      <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 13,
          }}
        >
          <View>
            <Text
              style={{
                width: 160,
                marginLeft: 10,
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              {menu.name}
            </Text>
            <Text
              style={{
                marginLeft: 10,
                fontSize: 16,

                marginVertical: 4,
                fontSize: 15,
                fontWeight: "600",
              }}
            >
              {menu.price}
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{
                  marginLeft: 10,
                  backgroundColor: "#FFFFF0",
                  padding: 3,
                  borderRadius: 4,
                }}
              >
                {[0, 0, 0, 0, 0].map((en, i) => (
                  <FontAwesome
                    key={`${menu.id}-${i}`}
                    style={{ margin: 2, marginHorizontal: 3 }}
                    name={i < Math.floor(menu.star) ? "star" : "star-o"}
                    size={13}
                    color="#FFD700"
                  />
                ))}
              </Text>
              <Text
                style={{
                  marginLeft: 10,
                  padding: 2,
                  paddingHorizontal: 4,
                  borderRadius: 5,
                  fontSize: 13,
                  backgroundColor: "#FFF5EE",
                  color: "#E52B50",
                }}
              >
                {(bestSeller && menu.bestSeller) || menu.mustTry}
              </Text>
            </View>
            <View
              style={{
                //flexDirection: "row",
                alignItems: "center",
                marginLeft: 10,
                marginTop: 8,
                width:"55%"
              }}
            >
              
              <Text style={{fontSize:10}}>{menu.discription}</Text>
              
            </View>
          </View>
          <Image
            style={{
              width: 120,
              height: 120,
              marginRight: 15,
              marginBottom: 20,
              borderRadius: 10,
              resizeMode: "cover",
            }}
            source={{
              uri: menu.image,
            }}
          />
        </View>
        <View style={{
            position: "absolute",
            right: additems?43:32,
            top: 115,
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#FF3366",
            borderRadius: 5,
          }}>
          
        
          <Pressable
            onPress={() => {
              setAdditems(Math.max(0, additems - 1));
              removeItemFromCart(menu.id);
            }}>
            <Text
              style={{ fontSize: 25, color: "white", paddingHorizontal: 10 ,flex:additems?1:0,opacity:additems?1:0}}
            >
              -
            </Text>
          </Pressable>

          <Pressable   onPress={() => {
             
             if(additems===0)
              setAdditems(additems + 1);
              setCart([...cart, menu]);
              
            }} >
            <Text
              style={{ fontSize: 20, color: "white", paddingHorizontal: 10 }}
            >
              {additems?additems:"Add"}
            </Text>
          </Pressable>

          <Pressable
            onPress={() => {
             setCart([...cart, menu]);
              setAdditems(additems + 1);
            }}>
            <Text
              style={{ fontSize: 20, color: "white", paddingHorizontal: 10,flex:additems?1:0,opacity:additems?1:0 }}>
              +
            </Text>
          </Pressable>
          </View>
    </View>
  );
};

export default Menu;

// export default connect(null, mapDispatchToProps) (Menu)

const styles = StyleSheet.create({});

//() => setAdditems(Math.max(0, additems - 1))
