import React, { Component } from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";

import RupiText from "../../components/layouts/RupiText";
import { NormalButton } from "../../components/layouts/Buttons";
import RupiTextInput from "../../components/layouts/Forms/RupiTextInput";

import * as api from '../../authentication/api/api';


export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailAddress: "",
      password: "",
      confirmPassword: "",
    };

    // form refs for next input focusing
    this.input2 = React.createRef();
    this.input3 = React.createRef();
  }

  static navigationOptions = {
    title: "Create a new Account"
  };


  createAccountSubmit = () => {
    let obj = JSON.stringify({
      emailAddress: this.state.emailAddress,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    })

    api.signup("POST", obj).then((res) => res.json()).then(response => {
      if(response.status == 200) {
        console.log('response ==> ', response);
        this.props.navigation.navigate('DashboardBar');
      }
    }).catch(err => {
      console.log('Error ==> ', err);
    })
  }


  render() {
    var globalStyle = require('../../components/styles/styles');

    return (
      <View style={[{ paddingHorizontal: 27, paddingVertical: 50 }, globalStyle.br24, globalStyle.purpleBg]}>

        <ScrollView style={{ height: "100%" }} keyboardShouldPersistTaps='handled'>
          <View style={{ height: "100%" }}>
            <RupiTextInput
              labelText="Email Address"
              onChangeText={(emailAddress) => this.setState({ emailAddress })}
              value={this.state.emailAddress}
              returnKeyType={'next'}
              autoFocus={true}
              onSubmitEditing={() => this.input2.current.focus()}
            >
            </RupiTextInput>

            <RupiTextInput
              labelText="Password"
              onChangeText={(password) => this.setState({ password })}
              value={this.state.password}
              hideText={true}
              refs={this.input2}
              onSubmitEditing={() => this.input3.current.focus()}
            >
            </RupiTextInput>

            <RupiTextInput
              labelText="Repeat Password"
              onChangeText={(confirmPassword) => this.setState({ confirmPassword })}
              value={this.state.confirmPassword}
              // for type password
              hideText={true}
              refs={this.input3}
              finalInput={true}
            >
            </RupiTextInput>

            <View style={{ height: 20 }}>
                <Text>&nbsp;</Text>
              </View>


              <TouchableOpacity onPress={this.uploadImageHandler} style={[{ position:"relative", height: 150, width: 150, borderColor: "white", borderWidth: 1, borderStyle: "dashed", alignItems: "center", justifyContent: "center" }, globalStyle.rounded]}>
                <RupiText text="Upload User Image" style={{ color: "yellow" }}></RupiText>
              </TouchableOpacity>


              <View style={{ height: 60 }}>
                <Text>&nbsp;</Text>
              </View>

            <NormalButton onItemPressed={this.createAccountSubmit} title="Create new Account" ></NormalButton>
          </View>

        </ScrollView>
      </View>
    );
  }
}
