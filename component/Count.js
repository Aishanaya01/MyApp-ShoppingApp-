import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { View , Text, Button} from "react-native";
const Count = (props, { data }) => {
    const[count , setCount] = useState(1);
    return (
        <View style={{flexDirection:"row" , marginBottom2:-120 ,marginTop:-34, marginLeft: 260,  padding:2, alignItems:"center"  }}>
        
            
            <Button title="+" onPress ={() => setCount(count + 1)}></Button>
            <Text>
        {count}
        </Text>
            <Button title="-" onPress ={() => setCount(count - 1)}></Button>
            
            
        </View>

    );
}
export default Count;
