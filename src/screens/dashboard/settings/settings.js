import React, { Component } from "react";
import { View, ImageBackground, TouchableOpacity, StyleSheet, ScrollView, TextInput } from "react-native";

import RupiText from "../../../components/layouts/RupiText";
import BaseGradient from "../../../components/layouts/baseGradient";
import FalseHeader from "../../../components/layouts/header/falseHeader";
import RupiCheckbox from '../../../components/layouts/Forms/RupiCheckbox';
import { NormalButton, InvertButton } from "../../../components/layouts/Buttons";


export default class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userProfileImage: '',
      userFullName: '',
    };

    // form refs for next input focusing
    this.input2 = React.createRef();
  }


  settingsLogoutHandler = () => {
    this.props.navigation.navigate('Welcome');
  }


  updateUserImage = () => {
    console.log('Update User Image');
  }


  fingerPrintChangeHandler = () => {
    console.log('Finger Print Change Handler');
  }


  userRoleChangeHandler = () => {
    console.log('User Role Change Handler');
  }


  userPersonalNoteSaveHandler = () => {
    console.log('User Personal Note Save Handler')
  }


  render() {
    let globalStyle = require('../../../components/styles/styles');

    return (
      <View style={{ paddingBottom: 39 }}>

        <BaseGradient></BaseGradient>

        {/* ================== FALSE HEADER STARTS HERE ========================== */}
        <FalseHeader title="Settings" iconName="logout" onIconPressed={this.settingsLogoutHandler}></FalseHeader>

        {/* ============ SCREEN STARTS HERE =============== */}
        <ScrollView contentContainerStyle={{ paddingTop: 10 }}>
          <View style={[{ backgroundColor: "white", marginTop: 26 }, globalStyle.globalPadding, globalStyle.br24, { paddingBottom: 61 }]}>

            <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 9 }}>

              {/* ==================== USER THUMBNAIL ======================= */}
              <TouchableOpacity onPress={this.updateUserImage}>
                <ImageBackground
                  style={[
                    {
                      height: 80,
                      width: 80,
                      alignItems: "center",
                      justifyContent: "center",
                      overflow: "hidden",
                      position: 'absolute',
                      left: 0,
                      top: -86
                    },
                    globalStyle.rounded
                  ]}
                  source={require('../../../components/assets/images/demoUser.jpeg')}
                />
              </TouchableOpacity>

              <RupiText text="Regan Timsina" style={{ fontSize: 36, lineHeight: 45, fontFamily: "Apercu Bold", color: "#223741", flex: 1 }}></RupiText>
            </View>

            <RupiText text="SELECT THEME" style={{ fontSize: 16, lineHeight: 29, marginVertical: 10, color: "#223741", opacity: 0.7 }} ></RupiText>

            {/* ================= THEME STATUS ======================== */}
            <View style={{ flexDirection: "column", justifyContent: "space-around", alignItems: "flex-start", marginBottom: 20 }}>
              <RupiCheckbox
                onValueChange={(darkTheme) => this.setState({ darkTheme })}
                checkboxText="Dark Theme"
              ></RupiCheckbox>

              <RupiCheckbox
                onValueChange={(lightTheme) => this.setState({ lightTheme })}
                checkboxText="Light Theme"
              ></RupiCheckbox>
            </View>


            {/* ============== SECURITY INFO ================================== */}
            <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
              <NormalButton title="Finger Print Change" onItemPressed={this.fingerPrintChangeHandler}></NormalButton>
              <InvertButton title="User Role Change" onInvertItemPressed={this.userRoleChangeHandler}></InvertButton>
            </View>

          </View>
         
          <View style={[globalStyle.purpleBg, globalStyle.br24, { paddingHorizontal: 20, paddingTop: 30, paddingBottom: 34, marginTop: -37 }]}>

            {/* ================ USER PERSONAL NOTE ======================  */}
            <View style={{ paddingBottom: 20 }}>
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <RupiText text="USER PERSONAL NOTE" style={[globalStyle.formHeadingNoMarBot, { marginBottom: 20 }]}></RupiText>
              </View>

            </View>

            <View style={{ paddingBottom: 75, flexDirection: "column", justifyContent: "center" }}>
              <View>
                <TextInput
                  style={{ height: 320, backgroundColor: "darkgrey", color: '#FFCA2D', fontSize: 16, borderWidth: 2, borderColor: "#FFCA2D" }}
                  multiline={true}
                  onChangeText={userNote => this.setState({ userNote })}
                  value={this.state.userNote}
                />
              </View>
              
              <View style={{ width: "20%", top: 5, right: -280 }}>
                <NormalButton title="Save" onItemPressed={this.userPersonalNoteSaveHandler}></NormalButton>
              </View>
            </View>

          </View>

        </ScrollView>
      </View>
    );
  }
}


// const styles = StyleSheet.create({
//   userName: {
    
//   }
// });
