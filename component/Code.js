import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";


const  Code = (props, { data }) => {
   
  return (
    <View style={{   flexDirection:"row", padding:6, marginTop:-180  }}>
    <Text>Code:145236</Text>
    <View style={{ flexDirection: "row" ,  marginLeft: 150 }}>
      <Ionicons name="star" size={15} />
      <Ionicons name="star" size={15} />
      <Ionicons name="star" size={15} />
      <Ionicons name="star" size={15} />
      <Ionicons name="star-outline" size={15} />
    </View>
  </View>



  );
}
export default Code;
