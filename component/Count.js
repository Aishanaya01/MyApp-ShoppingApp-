import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { View , Text } from "react-native";
const Count = (props, { data }) => {
    const[count , setCount] = useState(0)
    return (
        <View>
        <Text>
        {props.data.count}
        </Text>
            <Text><button onClick={() => setCount(count + 1)}> </button><Ionicons name="add-circle-outline" size={20} style={{padding:4}}/>
            <button onClick={() => setCount(count - 1)}> </button><Ionicons name="remove-circle-outline" size={20} style={{padding:4}} />
            </Text>
        </View>

    )
}
export default Count;
