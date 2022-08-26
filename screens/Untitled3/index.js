import { Slider } from "react-native-elements";
import { RadioGroup } from "react-native-radio-buttons-group";
import React from "react";
import { View } from "react-native";

const Untitled3 = () => {
  return <View style={{
    backgroundColor: '#f0f0f1',
    padding: 10,
    position: 'relative',
    height: '100%'
  }}>
      <RadioGroup radioButtons={[{
      id: "1",
      label: "Option 1",
      value: "option1"
    }, {
      id: "2",
      label: "Option 2",
      value: "option2"
    }]} layout="column" style={{
      left: 120,
      top: 285,
      position: "absolute",
      width: 120,
      height: 70
    }}></RadioGroup><Slider thumbStyle={{
      height: 20,
      width: 20
    }} thumbTintColor="#2d2d77" maximumValue={3} minimumValue={1} style={{
      left: 115,
      top: 179,
      position: "absolute",
      width: 150,
      height: 40
    }} value={2} step={3} minimumTrackTintColor="#b03c3c" maximumTrackTintColor="#6d1919"></Slider></View>;
};

export default Untitled3;