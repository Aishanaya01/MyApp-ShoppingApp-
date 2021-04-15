import React, { useState, useEffect } from "react";
import { View, SafeAreaView, Image , Text,TouchableOpacity, ImageBackground  } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Price from "./component/Price";
import Description from "./component/Description";
import Cart from "./component/Cart";
import Code from "./component/Code";
import { FoodData as data } from  "./Apis/FoodData";

const App = () => {
  return (
    <View style={{ flex: 1, marginTop:50, padding:12, borderRadius:5 }}>
       <View>
        <View style={{ flexDirection: "row",   }}>
          <Ionicons name="arrow-back-outline" size={28} />
        </View>
        <View style={{ flexDirection: "row", marginLeft: 250  , marginTop:-30  }}>
          <Ionicons name="search-outline" size={28} />
          <Ionicons name="cart-outline" size={28} />
        </View>
      </View> 
        <View>
        
         <ImageBackground source={data.image} style={{   width:"94%", height:"80%"}} imageStyle={{borderRadius:20 , marginLeft:20}}>
         <View>
        <Ionicons name="share-outline" size={28} style={{
                        opacity: 0.7,
                        alignItems: "center",
                        justifyContent: "center",
                        borderWidth: 1,
                        borderColor: "transparent",
                        borderRadius: 10,
                        marginTop:40,
                        marginLeft:280,
                        marginBottom:10,
            
                      }}/>
        </View>
        <View>
        <Ionicons name="heart-outline" size={28} style={{
                        opacity: 0.7,
                        alignItems: "center",
                        justifyContent: "center",
                        borderWidth: 1,
                        borderColor: "transparent",
                        borderRadius: 10,
                        marginLeft:280,
                        marginBottom:-100,
                      }} />
        </View>
         </ImageBackground>
         
      
      </View>   
      <Code/>
    
      <Text style={{fontWeight: 'bold', fontSize:25 , margin:5  }}>{data.title}</Text>
      <Description data={data}/>
      <Price data={data}/>
      <View style={{flexDirection:"row"}}>
      <View >
            <Text>20% Off Today</Text>
          </View>
          <View style={{ flexDirection: "row", marginLeft: 120 }}>
          <Ionicons name="paper-plane-outline" size={18} />
          <Text>Express Delivery</Text>
          </View>
      </View>
          
     <Cart/>
      </View>
          
    
      
  );
};
export default App;