import React from "react";
import { View, Dimensions, StatusBar } from "react-native";
import LinearGradient from "react-native-linear-gradient";

import AppContainer from "./src/navigation/navigation";

let ScreenHeight = Dimensions.get("window").height;

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <View>
        <StatusBar
          backgroundColor="transparent"
          barStyle="light-content"
          translucent={true}
          style={{ height: 56 }}
        />

        <View style={{ height: '100%', position: "relative" }}>
          <View
            style={{
              backgroundColor: "#10354b",
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              right: 0
            }}
          >
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              locations={[0, 0.36087942, 0.8752376, 1]}
              colors={["#9932c9", "#521a87", "#0e3648", "#1c365a"]}
              useAngle={true}
              angle={135}
              style={{ flex: 1, opacity: 0.32, height: ScreenHeight }}
            />
          </View>

          <AppContainer />

        </View>
      </View>
    );
  }
}
