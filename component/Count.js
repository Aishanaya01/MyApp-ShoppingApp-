import React, { useState } from "react";
import { View } from "react-native";
const Count = (props, { data }) => {
    const[count , setCount] = useState(0)
    return (
        <View>
        {props.data.count}
            <button onClick={() => setCount(count + 1)}> </button><Ionicons name="add-circle-outline" size={20} style={{padding:4}} />
            <button onClick={() => setCount(count - 1)}> </button><Ionicons name="remove-circle-outline" size={20} style={{padding:4}} />
        </View>

    )
}
export default Count;
