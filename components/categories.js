import {StyleSheet, FlatList, View, Pressable,Text, Image } from 'react-native'
import React from 'react'

const Categories = () => {
    const items = [{
        id:"1",
        name:"Fastest Delivery",
    },{
        id:"2",
        name:"Rating 4+",
    },
    {
        id:"3",
        name:"Max Safety",
    },
    {
      id:"4",
      name:"Best offers",
  },
  {
    id:"5",
    name:"Zomato Gold",
}, {
  id:"6",
  name:"Best offers",
}]
  return (
    <View>
      <View style ={{marginTop:10}}>
      <FlatList  showsHorizontalScrollIndicator={false} horizontal={true} data={items} renderItem={({item}) =>(
        <Pressable style={{ margin:7, padding:5 , borderRadius:5 , marginTop:0 , borderColor:"#E25822",borderWidth: 2,borderColor: '#E25822'}}>
            <Text style={{color:"#E25822"}}>{item.name}</Text>
        </Pressable>
  )}/>

  </View>
 
  
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({

})