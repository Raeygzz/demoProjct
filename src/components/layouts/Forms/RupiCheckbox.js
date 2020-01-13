import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';

import Icon from "react-native-vector-icons/Entypo";


export default class RupiCheckbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: false,
    };
  }

  render() {

    return (
      <View style={{ position: "relative", paddingLeft: 40, marginVertical: 12 }}>

        <TouchableWithoutFeedback onPress={() => {
          this.setState({ value: !this.state.value }, () => {
            this.props.onValueChange(this.state.value);
          });
        }}>

          <Text style={{ position: "absolute", left: 0, bottom: 0, top: 0, right: 0, zIndex: 9, opacity: 0.5, fontSize: 0, color: "transparent" }}>.</Text>

        </TouchableWithoutFeedback>

        <View style={[formstyle.checkbox, this.state.value ? formstyle.checked : null]}>
          {this.state.value ? <Icon name="check" size={30} color="green"></Icon> : null}
        </View>

        <Text style={{ color: "#000", fontFamily: "Apercu Light" }}>
          {this.props.checkboxText}
        </Text>

      </View>
    );
  }
}

const formstyle = StyleSheet.create({
  checkbox: {
    height: 26,
    width: 26,
    backgroundColor: "white",
    borderWidth: 1,
    marginRight: 20,
    borderRadius: 4,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    top: 0,
    zIndex: 0
  },
  checked: {
    backgroundColor: "#fff"
  }
})
