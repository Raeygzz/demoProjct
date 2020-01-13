import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { withNavigation } from 'react-navigation';

import Icon from "react-native-vector-icons/SimpleLineIcons";


export class HeaderBackButton extends Component {
  render() {

    return (
      <TouchableOpacity style={{ display: "flex", flexDirection: "row", alignItems: "center", }}
        onPress={() => { this.props.navigation.goBack() }}>

        <Icon name="arrow-left" color="white" size={20} style={{ height: 44, width: 44, textAlign: "center", lineHeight: 44 }} />

        <Text style={{ fontSize: 16, fontFamily: 'Apercu_Regular', color: "white" }}>Back</Text>
      </TouchableOpacity>

    );
  }
}

export default withNavigation(HeaderBackButton);
