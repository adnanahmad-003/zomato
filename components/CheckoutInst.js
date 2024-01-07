import { StyleSheet, Text, View ,ScrollView,Pressable ,TextInput} from 'react-native'
import React,{useState} from 'react'
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { CheckBox } from 'react-native-elements';
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation} from "@react-navigation/native";
const CheckoutInst = ({ onCheckboxToggle }) => {
    const [inputText, setInputText] = useState('');
    const navigation = useNavigation();
  const [paragraphText, setParagraphText] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const handlePress = () => {
    // Update the paragraph text with the input text
    setParagraphText(`Instruction: ${inputText}`);
    
    // Clear the input text after using it
    setInputText('');
  };
    const instructions = [
        {
          id: "0",
          name: "Avoid Ringing",
          iconName: "bell",
        },
        {
          id: "1",
          name: "Leave at the door",
          iconName: "door-open",
        },
        {
          id: "2",
          name: "directions to reach",
          iconName: "directions",
        },
        {
          id: "3",
          name: "Avoid Calling",
          iconName: "phone-alt",
        },
      ];
      const toggleCheckbox = () => {
        setIsChecked(!isChecked);
        
          //onCheckboxToggle(!isChecked);
        
      };
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {instructions?.map((item, index) => (
                <Pressable
                  style={{
                    margin: 10,
                    marginHorizontal:10,
                    borderRadius: 10,
                    padding: 10,
                    backgroundColor: "white",
                  }}
                >
                  <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <FontAwesome5
                      name={item?.iconName}
                      size={22}
                      color={"gray"}
                    />
                    <Text
                      style={{
                        width: 75,
                        fontSize: 13,
                        color: "#383838",
                        paddingTop: 10,
                        textAlign: "center",
                      }}
                    >
                      {item?.name}
                    </Text>
                  </View>
                </Pressable>
              ))}
            </ScrollView>
            <View style={{margin:10,marginBottom:5,borderRadius: 10,}}>
            <Pressable onPress={()=>navigation.goBack()}
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "white",
                paddingVertical: 10,
                paddingHorizontal: 10,
              }}
            >
              <View 
                style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
              >
                
                <Feather name="plus-circle" size={24} color="black" />
                <Text>Add more Items</Text>
                
              </View>
              <AntDesign name="right" size={20} color="black" />
            </Pressable>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "white",
                paddingVertical: 10,
                paddingHorizontal: 10,
              }}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
              >
                <View>
                <Entypo name="new-message" size={24} color="black" />
                </View>
                <View>
                
                <Text>Add more cooking instructions</Text>
                
                
                <TextInput style={{opacity: paragraphText? 0 : 1,flex: paragraphText?1:0}}
                 placeholder="Type here..."
                 value={inputText}
                 onChangeText={(text) => setInputText(text)}
                 
                  />
                  <Text>{paragraphText}</Text>
                  </View>
              </View>
              <Pressable  onPress={handlePress}>
              <AntDesign name="right" size={20} color="black" />
              </Pressable>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "white",
                paddingVertical: 10,
                paddingHorizontal: 10,
              }}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
              >
                <MaterialCommunityIcons
                  name="food-fork-drink"
                  size={24}
                  color="black"
                />
                <Text>Dont't send cultery with this order</Text>
              </View>
              <AntDesign name="right" size={20} color="black" />
            </View>
          </View>
          <View style={{marginHorizontal:10,}}>
            <View
              style={{
                padding: 10,
                backgroundColor: "white",
                marginVertical: 10,
                
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  
                }}
              >
                <Text>Feeding India Donation</Text>
                
                <View >
                 <CheckBox
                 //title="Checkbox Label"
                    checked={isChecked}
                  onPress={toggleCheckbox}
                    />
                
               </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: 10,
                }}
              >
                <Text style={{ color: "gray" }}>
                  Working towards a manlutrition-free India
                </Text>
                <Text style={{marginRight:20}}>{isChecked ? 'Rs 3' : ''}</Text>
              </View>
            </View>
          </View>
    </View>
  )
}

export default CheckoutInst

const styles = StyleSheet.create({})