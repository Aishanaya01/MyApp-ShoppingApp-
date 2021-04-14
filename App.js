import React, { useState, useEffect } from "react";
import { View, SafeAreaView, Image , Text,TouchableOpacity  } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FoodData from "./Apis/FoodData";
const App = () => {
  return (
    <View style={{ flex: 1, marginTop: 80 }}>
      <View>
        <View style={{ flexDirection: "row", alignItem: "flex-start" }}>
          <Ionicons name="arrow-back-outline" size={28} />
        </View>
        <View style={{ flexDirection: "row", marginTop: 10, marginLeft: 250 }}>
          <Ionicons name="search-outline" size={28} />
          <Ionicons name="cart-outline" size={28} />
        </View>
      </View>
      <View>
        <Image
          source={require("./Images/papaya.jpg")} style={{ marginLeft:32 , borderRadius:10 ,alignItems: "center",
    justifyContent: "center", width:"80%", height:"60%"}}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text>Code:145236</Text>
        <View style={{ flexDirection: "row" }}>
          <Ionicons name="star" size={15} />
          <Ionicons name="star" size={15} />
          <Ionicons name="star" size={15} />
          <Ionicons name="star" size={15} />
          <Ionicons name="star-outline" size={15} />
        </View>
      </View>
      <Text style={{fontWeight: 'bold', fontSize:25}}>Papaya</Text>
      <View>
          <Text numberOfLines={2} ellipsizeMode='tail'>
          Lorem Ipsum is simply dummy text of the printing and typese
          tting industry. Lorem Ipsum has been the i
          ndustry's standard dummy text ever since the 1500s,
           when an unknown printer took a galley of type and scrambl
           ed it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s wi
            th the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
            like Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
          <View>
              <Text style={{fontSize:15, fontWeight:'bold'}}>
                  $-10.5
              </Text>
          </View>
          <View>
              <TouchableOpacity style={{backgroundColor:'#fff', borderWidth: 3 , borderColor:"green"}}>
                  <Text>Cart</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{backgroundColor:'green'}}>
                  <Text>Buy Now</Text>
              </TouchableOpacity>
          </View>
      </View>
          
        </View>
      
  );
};
export default App;