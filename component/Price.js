import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";


const  Price = (props, { data }) => {
   
  return (
      
    <View style={{flexDirection:"row", padding:4 }}>
               <Text style={{fontSize:15, fontWeight:'bold', }}>
              {props.data.price}
              </Text> 
              <View style={{flexDirection:"row",marginLeft: 200 }} >
                <Text style={{padding:4}}>Qty-</Text>
                <Ionicons name="add-circle-outline" size={20} style={{padding:4 , }} />
                <Ionicons name="remove-circle-outline" size={20} style={{padding:4}} />
              </View>
              
          </View>
  );
}
export default Price;