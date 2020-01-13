import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";

import { NormalButton } from "../../components/layouts/Buttons";
import RupiTextInput from "../../components/layouts/Forms/RupiTextInput";


export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailAddress: "",
      password: "",
    };

    this.loginPassword = React.createRef();
  }


  static navigationOptions = {
    title: "Login"
  };


  loginSubmit = () => {
    this.props.navigation.navigate('DashboardBar');
  }


  render() {
    var globalStyle = require('../../components/styles/styles');

    return (
      <View style={[{ flex: 1, justifyContent: "center" }, globalStyle.br24, globalStyle.purpleBg, globalStyle.globalPadding]}>
        <ScrollView
          keyboardShouldPersistTaps='handled'
          contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}>
          <RupiTextInput
            labelText="Email Address"
            onChangeText={(emailAddress) => this.setState({ emailAddress })}
            value={this.state.emailAddress}
            returnKeyType={'next'}
            autoFocus={true}
            onSubmitEditing={() => this.loginPassword.current.focus()}
          >
          </RupiTextInput>

          <RupiTextInput
            labelText="Password"
            onChangeText={(password) => this.setState({ password })}
            value={this.state.password}
            // for type password
            hideText={true}
            refs={this.loginPassword}
            finalInput={true}
          >
          </RupiTextInput>

          <View style={{ height: 50 }}>
            <Text>&nbsp;</Text>
          </View>

          <NormalButton onItemPressed={this.loginSubmit} title="Log in"></NormalButton>

        </ScrollView>
      </View>
    );
  }
}
