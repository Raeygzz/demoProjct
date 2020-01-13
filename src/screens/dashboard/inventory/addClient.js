import React, { Component } from 'react';
import { Modal, View, KeyboardAvoidingView, ScrollView, StyleSheet } from "react-native";

import BaseGradient from "../../../components/layouts/baseGradient";
import { NormalButton, InvertButton } from "../../../components/layouts/Buttons";
import RupiTextInput, { RupiSelect } from "../../../components/layouts/Forms/RupiTextInput";
import RupiText from "../../../components/layouts/RupiText";

import { clientActiveScaleArr } from '../../../helper/constants/constants';


export default class AddClient extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clientName: '',
      clientAddress: '',
      clientEmail: "",
      clientPhone: "",
      clientAnotherPhone: '',
      clientNote: '',
      clientActiveScale: '',

      clientActiveScaleOptions: clientActiveScaleArr,

      modalVisible: true,
    };

    this.input2 = React.createRef();
    this.input3 = React.createRef();
    this.input4 = React.createRef();
    this.input5 = React.createRef();
    this.input6 = React.createRef();
    this.input7 = React.createRef();
  }

  addClientSubmit = () => {
    this.props.navigation.navigate('Inventory');
  }


  cancelClientHandler = () => {
    this.props.navigation.navigate('Inventory');
  }


  render() {
    var globalStyle = require('../../../components/styles/styles');

    return (
      <Modal animationType="slide" transparent={false} visible={this.state.modalVisible}>

        <View style={[{ flex: 1, paddingHorizontal: 27, paddingVertical: 50 }, globalStyle.br24, globalStyle.purpleBg]}>
          <BaseGradient></BaseGradient>

          <ScrollView style={{ height: "100%" }} keyboardShouldPersistTaps='handled'>
            <View style={{ height: "100%" }}>

              <RupiText text="ADD CLIENTS" style={globalStyle.formHeading}></RupiText>

              <RupiTextInput
                labelText="Client Name"
                onChangeText={(clientName) => this.setState({ clientName })}
                value={this.state.clientName}
                returnKeyType={'next'}
                autoFocus={true}
                onSubmitEditing={() => this.input2.current.focus()}
              ></RupiTextInput>


              <RupiTextInput
                labelText="Client Address"
                multilineStatus={true}
                onChangeText={(clientAddress) => this.setState({ clientAddress })}
                value={this.state.clientAddress}
                refs={this.input2}
                onSubmitEditing={() => this.input3.current.focus()}
              ></RupiTextInput>


              <RupiTextInput
                labelText="Client Email"
                onChangeText={(clientEmail) => this.setState({ clientEmail })}
                value={this.state.clientEmail}
                refs={this.input3}
                onSubmitEditing={() => this.input4.current.focus()}
              ></RupiTextInput>


              <RupiTextInput
                labelText="Client Phone"
                onChangeText={(clientPhone) => this.setState({ clientPhone })}
                value={this.state.clientPhone}
                refs={this.input4}
                onSubmitEditing={() => this.input5.current.focus()}
              ></RupiTextInput>


              <RupiTextInput
                labelText="Client Another Phone"
                onChangeText={(clientAnotherPhone) => this.setState({ clientAnotherPhone })}
                value={this.state.clientAnotherPhone}
                refs={this.input5}
                onSubmitEditing={() => this.input6.current.focus()}
              ></RupiTextInput>


              <RupiTextInput
                labelText="Client Note"
                maxLengthStatus={250}
                onChangeText={(clientNote) => this.setState({ clientNote })}
                value={this.state.clientNote}
                refs={this.input6}
                finalInput={true}
              ></RupiTextInput>


              <RupiSelect
                labelText="Client Active Scale"
                initialLabel="Select Client Active Scale"
                onValueChange={(clientActiveScale) => this.setState({ clientActiveScale })}
                value={this.state.clientActiveScale}
                pickOptions={this.state.clientActiveScaleOptions}
                blockStyle={{ flex: 1 }}
              ></RupiSelect>


              <View style={styles.buttonContainer}>
                <InvertButton onInvertItemPressed={this.cancelClientHandler} title="Cancel"></InvertButton>
                <NormalButton onItemPressed={this.addClientSubmit} title="Add Client"></NormalButton>
              </View>

            </View>
          </ScrollView>
        </View>
      </Modal>
    );
  }
}


const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  }
})
