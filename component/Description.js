import React from "react";
import { View, Text } from "react-native";
const  Description = (props, { data }) => {
    return(
        <View style={{marginBottom:10 , margin:3}}>
        <Text numberOfLines={2} ellipsizeMode='tail' size={20}>
        {props.data.description}
        </Text>
        </View>
    )
}
    export default  Description;