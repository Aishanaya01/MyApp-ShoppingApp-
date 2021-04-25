import React, { useState, useEffect } from 'react';
import {
  View,
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Animated,
} from 'react-native';
import Swiper from 'react-native-web-swiper';
import { Ionicons } from '@expo/vector-icons';
// import Styles from "./component/Styles";
import Price from './component/Price';
import Count from './component/Count';
import Description from './component/Description';
import Cart from './component/Cart';
import Code from './component/Code';
import { FoodData as data } from './Apis/FoodData';
const App = () => {
  return (
    <View style={{ flex: 1, marginTop: 50, padding: 12, borderRadius: 5 }}>
      <View>
        <View style={{ flexDirection: 'row' }}>
          <Ionicons name="arrow-back-outline" size={28} />
        </View>
        <View style={{ flexDirection: 'row', marginLeft: 250, marginTop: -30 }}>
          <Ionicons name="search-outline" size={28} />
          <Ionicons name="cart-outline" size={28} />
              
        </View>
      </View>
      <View style={styles.container}>
      
        <Swiper>
        
          <View style={[styles.slideContainer, styles.slide1]}>
            <Image source={data.image}  style={{   width:"94%", height:"80%"}} imageStyle={{borderRadius:21 , marginLeft:20}} 
            />
            
          </View>
          <View style={[styles.slideContainer, styles.slide2]}>
          
            <Image source={data.image} style={{   width:"94%", height:"82%"}} imageStyle={{borderRadius:21 , marginLeft:20}} />
          </View>
          <View style={[styles.slideContainer, styles.slide3]}>
        <Image source={data.image} style={{   width:"94%", height:"82%"}} imageStyle={{borderRadius:21 , marginLeft:20}}/>
            
          </View>
         <View>
        <Ionicons name="share-outline" size={28} style={{
                        opacity: 0.7,
                        alignItems: "center",
                        justifyContent: "center",
                        borderWidth: 1,
                        borderColor: "transparent",
                        borderRadius: 10,
                        marginTop:90,
                        marginLeft:-59,
                        marginBottom:100,
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
                        marginLeft:-378,
                        marginBottom:280,
                        marginTop:150,
                      }} />
        </View>
        </Swiper>
        
      </View>
      
      <Code />
      <Text style={{ fontWeight: 'bold', fontSize: 25, margin: 5 }}>
        {data.title}
      </Text>
      <Description data={data} />
      <Price data={data} />
      <Count data={data} />
      <View style={{ flexDirection: 'row' }}>
        <View style={{ marginBottom: -6 }}>
          <Text>20% Off Today</Text>
        </View>
        <View
          style={{ flexDirection: 'row', marginLeft: 120, marginBottom: -20 }}>
          <Ionicons name="paper-plane-outline" size={18} />
          <Text>Express Delivery</Text>
        </View>
      </View>
      <Cart />
    </View>
  );
};
export default App;
const styles = StyleSheet.create({
 
  container: {
    flex: 1,
   width:"94%",
    height:"82%",
     marginLeft:21,
     marginBottom:180,
    borderRadius: 11
  },
  image:{
     width:"85%",
    height:"42%",
    borderRadius:20,
    marginLeft:20,
  },
  slideContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide1: {},
  slide2: {},
  slide3: {},

    
    
});