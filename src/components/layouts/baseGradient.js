import React, { Component } from 'react';
import { View, Dimensions, Platform } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';


export default class BaseGradient extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShow: true,
    };

    this.ScreenHeight = Dimensions.get("window").height;
  }

  render() {
    return (
      Platform.OS === "ios" ?
        <View
          style={[{
            backgroundColor: "#10354b",
            position: "absolute",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            zIndex: -1
          },
          this.props.style
          ]}
        >
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            locations={[0, 0.36087942, 0.8752376, 1]}
            colors={["#9932c9", "#521a87", "#0e3648", "#1c365a"]}
            useAngle={true}
            angle={135}
            style={{ flex: 1, opacity: 0.32, height: this.ScreenHeight + 200, position: "relative", zIndex: -1 }}
          />
        </View>
        : null
    );
  }
}
