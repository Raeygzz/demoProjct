import React, { Component } from 'react';
import { View, Text, TouchableNativeFeedback, TouchableOpacity } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Icon from "react-native-vector-icons/SimpleLineIcons";

export class ItemList extends Component {
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
          style={[{ height: 50, borderRadius: 4 }, this.props.style]}
        >

          <View style={{ height: 50, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>

            <View style={{ fontSize: 16, lineHeight: 50, fontFamily: 'Apercu Bold', color: "#223741" }}>
              <Text style={{ flex: 1, padding: 10, color: this.props.textColor, backgroundColor: this.props.backgroundColor, textAlign: "left" }}>{this.props.scale}</Text>
            </View>

            <View style={{ marginLeft: 0, fontSize: 16, lineHeight: 50, fontFamily: 'Apercu Bold', color: "#223741" }}>
              <Text numberOfLines={1} style={{ textAlign: "left", marginLeft: 5 }}>{this.props.title.length < 24
                ? `${this.props.title}`
                : `${this.props.title.substring(0, 22)}...`}</Text>
            </View>

            <TouchableOpacity onPress={this.props.onIconPressed}>
              <Icon name={this.props.iconName} color={this.props.iconColor} size={this.props.iconSize} style={{ height: this.iconHeight, width: this.props.iconWidth, marginRight: 5 }} />
            </TouchableOpacity>

          </View>

        </LinearGradient>
      </TouchableNativeFeedback>
    );
  }
}
