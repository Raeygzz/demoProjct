import React, { Component } from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import Icon from "react-native-vector-icons/SimpleLineIcons";


export class NormalButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShow: true,
    };
  }

  render() {
    return (
      <TouchableNativeFeedback useForeground={true} onPress={this.props.onItemPressed} style={{ width: "100%" }}>
        <LinearGradient
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 0.63 }}
          locations={[0, 0.3914696, 1]}
          colors={[
            '#FFE37D',
            '#FFBD00',
            '#FFCA2D'
          ]}
          useAngle={true}
          angle={180}
          style={[{ height: 45, borderRadius: 4 }, this.props.style]}
        >

          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", height: 45 }}>
            <Icon name={this.props.iconName} color={this.props.iconColor} size={this.props.iconSize} style={{
              height: this.iconHeight, width: this.props.iconWidth,
              // marginRight: 10
            }}/>

            <View>
              <Text style={{ fontSize: 16, padding: 10, lineHeight: 45, textAlign: "center", fontFamily: 'Apercu Bold', color: "#223741" }}>
                {this.props.title}
              </Text>
            </View>
          </View>

        </LinearGradient>
      </TouchableNativeFeedback>
    );
  }
}




export class InvertButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShow: true,
    };
  }

  render() {
    return (
      <TouchableNativeFeedback useForeground={true} onPress={this.props.onInvertItemPressed} style={{ width: "100%" }}>
        <LinearGradient
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 0.63 }}
          locations={[0, 0.3914696, 1]}
          colors={[
            'lightgrey',
            'lightgrey',
            'lightgrey'
          ]}
          useAngle={true}
          angle={180}
          style={[{ height: 45, borderRadius: 4 }, this.props.style]}>

          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", height: 45 }}>
            <View>
              <Text style={{ fontSize: 16, padding: 10, lineHeight: 45, textAlign: "center", fontFamily: 'Apercu Bold', color: "#223741" }}>
                {this.props.title}
              </Text>
            </View>
          </View>

        </LinearGradient>
      </TouchableNativeFeedback>
    );
  }
}
