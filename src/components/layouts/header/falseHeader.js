import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';

import RupiText from '../RupiText';

import Icon from "react-native-vector-icons/SimpleLineIcons";


export default class FalseHeader extends Component {
  render() {
    let globalStyle = require('../../styles/styles');

    return (
      <View style={[{ height: 44, paddingHorizontal: 22, flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 55, marginBottom: 20 }, this.props.style]}>

        <RupiText text={this.props.title} style={[globalStyle.formNotion, { opacity: 1, marginBottom: 0 }]}></RupiText>

        <View style={{ flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>

          <TouchableOpacity onPress={this.props.onIconPressed1}>
            <Icon size={20} name={this.props.iconName1} style={{ color: "white" }}></Icon>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.props.onIconPressed}>
            <Icon size={20} name={this.props.iconName} style={{ marginLeft: 20, color: "white" }}></Icon>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}
