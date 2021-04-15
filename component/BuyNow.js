import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "../style";
const BuyNow = () => {
  return (
    <View>
      <TouchableOpacity style={styles.btncontainer}>
        <Text style={styles.btntext}>BuyNow</Text>
      </TouchableOpacity>
    </View>
  );
};
export default BuyNow;