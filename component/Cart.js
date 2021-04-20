import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const Cart = () => {
    return (
        <View  style={{flexDirection:"row" , marginBottom:10 , marginTop:25}}>

        <TouchableOpacity style={{backgroundColor:'#fff', borderWidth: 2 ,height:40, borderColor:"green" , width:90 , alignItem:"center", margin:6}} >
        <View style={{marginTop:6, marginLeft:4}}>
        <Ionicons name="cart-outline" size={24} />
        </View>
            <Text style={{alignSelf:"center" , marginTop:-25}}>Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'green' , width:231 , height:40, margin:6, }}>
            <Text style={{alignSelf:"center", color:'white',marginTop:9  }}>Buy Now</Text>
        </TouchableOpacity>
    </View>
  );
};
export default Cart;