import React, { Component } from 'react';
import { Text } from 'react-native';


export default class RupiText extends Component {
  render() {
    return (
      <Text style={[{ fontFamily: "Apercu_Regular", color: "#fff", fontSize: 16 }, this.props.style]} minimumFontScale={16} allowFontScaling={this.props.allowFontScaling} adjustsFontSizeToFit={this.props.adjustsFontSizeToFit}>
        {this.props.text}
      </Text>
    );
  }
}


export class RupiBlackText extends Component {
  render() {
    return (
      <Text style={[{ fontFamily: "Apercu_Regular", color: "#223741", fontSize: 16 }, this.props.style]} minimumFontScale={16} allowFontScaling={this.props.allowFontScaling} adjustsFontSizeToFit={this.props.adjustsFontSizeToFit}>
        {this.props.text}
        {this.props.children}
      </Text>
    );
  }
}
