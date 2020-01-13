import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';

import Icon from "react-native-vector-icons/SimpleLineIcons";


export default class PlusButton extends Component {
  render() {

    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate('AddBeneficiary')}>
        <Icon
          name="plus"
          color="#FFF"
          size={20}
          style={{
            width: 44,
            height: 44,
            lineHeight: 44,
            textAlign: "center",
            marginRight: 14
          }}
        />
      </TouchableOpacity>
    );
  }
}
