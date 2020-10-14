import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function InterestsBox({ text }) {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp("35%"),
    height: hp("15%"),
    borderWidth: 0.25,
    borderColor: "#707070",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: hp("4%"),
    marginLeft: wp("5%"),
  },
});
