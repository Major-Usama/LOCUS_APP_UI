import "react-native-gesture-handler";
import React from "react";
import { StyleSheet } from "react-native";

import Navigation from "./Navigation/Navigation";

export default function App() {
  console.disableYellowBox = true;
  return <Navigation />;
}

const styles = StyleSheet.create({});
