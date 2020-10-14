import React, { Component } from "react";
import { Picker, SafeAreaView, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default class CityPicker extends Component {
  state = {
    hand: "right",
  };

  render() {
    return (
      <SafeAreaView style={{}}>
        <Picker
          selectedValue={this.state.hand}
          onValueChange={(hand) => this.setState({ hand })}
          style={{
            width: wp("65%"),
            postion: "absolute",
            color: "#707070",
            opacity: 0.7,
            marginHorizontal: wp("-.5%"),
          }}
          mode="dialog"
        >
          <Picker.Item label="City1" value="right" />
          <Picker.Item label="City2 " value="left" />
          <Picker.Item label="City3" value="right2" />
          <Picker.Item label="City4" value="left3" />
        </Picker>
      </SafeAreaView>
    );
  }
}
