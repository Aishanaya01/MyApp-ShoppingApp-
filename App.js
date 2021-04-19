import React, { useState, useEffect } from "react";
import { View, SafeAreaView, Image , Text,TouchableOpacity ,ImageBackground  , StyleSheet , Animated  } from "react-native";
import Swiper from "react-native-web-swiper";
import { Ionicons } from "@expo/vector-icons";
// import Styles from "./component/Styles";
import Price from "./component/Price";
import Count from "./component/Count";
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
       
         <ImageBackground source={data.image} style={{   width:"94%", height:"82%"}} imageStyle={{borderRadius:21 , marginLeft:20}}>
         
         <View style={styles.container}>
                <Swiper>
                
                    <View style={[styles.slideContainer,styles.slide1]}>
                 
                        <Text style={{fontWeight:'bold'}}></Text>
                        
                    </View>
                    <View style={[styles.slideContainer,styles.slide2]}>
                    <View>
                 <Image source={require('./Images/papaya2.jpg')}
                  style={styles.backgroundImage}>
                  </Image>
                 </View>
                        <Text style={{fontWeight:'bold'}}>Slide 2 .</Text>
                    </View>
                    <View style={[styles.slideContainer,styles.slide3,]}>
                        <Text style={{fontWeight:'bold'}}>Slide 3 .</Text>
                    </View>
                </Swiper>
            </View>
         <View>
         
        <Ionicons name="share-outline" size={28} style={{
                        opacity: 0.7,
                        alignItems: "center",
                        justifyContent: "center",
                        borderWidth: 1,
                        borderColor: "transparent",
                        borderRadius: 10,
                        marginTop:100,
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
                        marginBottom:600,
                        marginTop:10,
                      }} />
        </View>
         </ImageBackground>
         
          <View style={styles.dotView}>
        <Animated.View style={styles.dot} />
        <Animated.View style={styles.dot} />
        <Animated.View style={styles.dot} />
      </View>    
      
      </View>   
      <Code/>
    
      <Text style={{fontWeight: 'bold', fontSize:25 , margin:5  }}>{data.title}</Text>
      <Description data={data}/>
      <Price data={data}/>
      <Count data={data}/>
      <View style={{flexDirection:"row"}}>
      <View style={{marginBottom:-50}} >
            <Text>20% Off Today</Text>
          </View>
          <View style={{ flexDirection: "row", marginLeft: 120, marginBottom:-20}}>
          <Ionicons name="paper-plane-outline" size={18} />
          <Text>Express Delivery</Text>
          </View>
      </View>
          
     <Cart/>
      </View>
          
    
      
  );
};
export default App;
const styles = StyleSheet.create({
   dotView: {
     marginBottom:20,
    marginTop:-100,
    flexDirection: "row",
     justifyContent: "center",
   },
   dot: {
     height: 10,
     width: 10,
    backgroundColor: "#fff",
    margin: 8,
    borderRadius: 5,
   },
  container: {
      flex: 1,
  },
  slideContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
  },
  slide1: {
    
    
  },
  slide2: {
    width:"82%",
    height:"82%",
      borderRadius:40 , marginLeft:60
  },
  slide3: {
     
  },
});