import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

// import RupiText from "../../components/layouts/RupiText";
import { NormalButton } from "../../components/layouts/Buttons";


export default class LaunchScreen extends Component {
  constructor(props) {
    super(props);

  }


  static navigationOptions = {
    header: null
  };


  launchSubmit = () => {
    this.props.navigation.navigate('Login');
  }

  signupSubmit = () => {
    this.props.navigation.navigate('Signup');
  }


  render() {

    return (
      <View style={{ flex: 1, backfaceVisibility: "visible" }}>

        <View style={{ marginBottom: 0, flex: 6, justifyContent: "center", zIndex: 9999, position: "relative" }}>

          <View style={{ alignItems: "center", marginBottom: 56 }}></View>

          <View style={{ alignItems: "center" }}>
            {/* <RupiText text="Wonder Soft Inventory Management System" style={[{ fontSize: 20, lineHeight: 25, maxWidth: 252 }, globalStyle.textCenter]}></RupiText> */}

            {/* <Image style={{ position: "absolute", bottom: 0, left: 0, right: 0, width: "100%" }} source={require("../../components/assets/images/welcomeImage.png")} /> */}
          </View>

        </View>

        <View style={{ flex: 1, justifyContent: "flex-end", paddingBottom: 50, zIndex: 0, position: "relative" }}>

          {/* <Image style={{ position: "absolute", bottom: 0, left: 0, right: 0, width: "100%" }} source={require("../../components/assets/images/splash_background.png")} /> */}

          <View>
            <View style={{ marginBottom: 26, paddingHorizontal: 27 }}>
              <NormalButton title="LogIn Into App" onItemPressed={this.launchSubmit} />
            </View>

            <View>
              <TouchableOpacity onPress={this.signupSubmit}>
                <Text style={{ textAlign: "center", color: "#fff" }}>
                  Create Account
                </Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>

      </View>
    );
  }
}
