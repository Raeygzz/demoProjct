import React, { Component } from 'react';
import { Modal, View, ScrollView, StyleSheet } from "react-native";

import RupiText from "../../../components/layouts/RupiText";
import BaseGradient from "../../../components/layouts/baseGradient";
import { NormalButton, InvertButton } from "../../../components/layouts/Buttons";
import RupiTextInput, { RupiSelect } from "../../../components/layouts/Forms/RupiTextInput";

import { clientActiveScaleArr } from '../../../helper/constants/constants';


export default class ClientDetails extends Component {
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
  }

  updateClientSubmit = () => {
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

          <ScrollView style={{ height: "100%" }}>
            <View style={{ height: "100%" }}>

              <RupiText text="CLIENT DETAILS" style={globalStyle.formHeading}></RupiText>

              <RupiTextInput
                labelText="Client Name"
                onChangeText={(clientName) => this.setState({ clientName })}
                value={this.state.clientName}
              ></RupiTextInput>


              <RupiTextInput
                labelText="Client Address"
                multilineStatus={true}
                onChangeText={(clientAddress) => this.setState({ clientAddress })}
                value={this.state.clientAddress}
              ></RupiTextInput>


              <RupiTextInput
                labelText="Client Email"
                onChangeText={(clientEmail) => this.setState({ clientEmail })}
                value={this.state.clientEmail}
              ></RupiTextInput>


              <RupiTextInput
                labelText="Client Phone"
                onChangeText={(clientPhone) => this.setState({ clientPhone })}
                value={this.state.clientPhone}
              ></RupiTextInput>


              <RupiTextInput
                labelText="Client Another Phone"
                onChangeText={(clientAnotherPhone) => this.setState({ clientAnotherPhone })}
                value={this.state.clientAnotherPhone}
              ></RupiTextInput>


              <RupiTextInput
                labelText="Client Note"
                maxLengthStatus={250}
                onChangeText={(clientNote) => this.setState({ clientNote })}
                value={this.state.clientNote}
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
                <NormalButton onItemPressed={this.updateClientSubmit} title="Update Client"></NormalButton>
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
