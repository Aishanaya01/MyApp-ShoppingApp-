import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const Cart = () => {
    return (
        <View  style={{flexDirection:"row" , marginBottom:80 , marginTop:28}}>

        <TouchableOpacity style={{backgroundColor:'#fff', borderWidth: 2 ,height:40, borderColor:"green" , width:90 , }} >
        <View>
        <Ionicons name="cart-outline" size={24} />
        </View>
            <Text style={{alignSelf:"center" , marginTop:-23 }}>Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'green' , width:230 , height:40, margin:1, }}>
            <Text style={{alignSelf:"center", color:'white',marginTop:8  }}>Buy Now</Text>
        </TouchableOpacity>
    </View>
  );
};
export default Cart;