import React, { Component } from 'react';
import { Modal, View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";

import BaseGradient from "../../../components/layouts/baseGradient";
import { NormalButton, InvertButton } from "../../../components/layouts/Buttons";
import RupiTextInput, { RupiSelect } from "../../../components/layouts/Forms/RupiTextInput";
import RupiText from "../../../components/layouts/RupiText";

import { productQuantityArr, productMarketScaleArr } from '../../../helper/constants/constants';


export default class AddProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productName: '',
      productQuantity: '',
      productPerAmount: "",
      productTotalAmount: "1000",
      productDescription: '',
      productMarketScale: '',
      productImageUpload: '',

      quantityOptions: productQuantityArr,
      productMarketScaleOptions: productMarketScaleArr,

      modalVisible: true,
    };

    this.input2 = React.createRef();
    this.input3 = React.createRef();
  }


  addProductSubmit = () => {
    this.props.navigation.navigate('Inventory');
  }


  cancelProductHandler = () => {
    this.props.navigation.navigate('Inventory');
  }


  uploadImageHandler = () => {
    console.log('Upload Image Handler');
  }


  render() {
    var globalStyle = require('../../../components/styles/styles');

    return (
      <Modal animationType="slide" transparent={false} visible={this.state.modalVisible}>

        <View style={[{ flex: 1, paddingHorizontal: 27, paddingVertical: 50 }, globalStyle.br24, globalStyle.purpleBg]}>
          <BaseGradient></BaseGradient>

          <ScrollView style={{ height: "100%" }} keyboardShouldPersistTaps='handled'>
            <View style={{ height: "100%" }}>

              <RupiText text="ADD PRODUCTS" style={globalStyle.formHeading}></RupiText>

              <RupiTextInput
                labelText="Product Name"
                onChangeText={(productName) => this.setState({ productName })}
                value={this.state.productName}
                returnKeyType={'next'}
                autoFocus={true}
              ></RupiTextInput>

              <RupiSelect
                labelText="Product Quantity"
                initialLabel="Select Product Quantity"
                onValueChange={(productQuantity) => this.setState({ productQuantity })}
                value={this.state.productQuantity}
                pickOptions={this.state.quantityOptions}
                blockStyle={{ flex: 1 }}
              ></RupiSelect>

              <RupiTextInput
                labelText="Product Per Amount"
                onChangeText={(productPerAmount) => this.setState({ productPerAmount })}
                value={this.state.productPerAmount}
                onSubmitEditing={() => this.input2.current.focus()}
              ></RupiTextInput>

              <RupiTextInput
                labelText="Product Total Amount"
                onChangeText={(productTotalAmount) => this.setState({ productTotalAmount })}
                value={this.state.productTotalAmount}
                editableStatus={false}
              ></RupiTextInput>

              <RupiTextInput
                labelText="Product Description"
                multilineStatus={true}
                onChangeText={(productDescription) => this.setState({ productDescription })}
                value={this.state.productDescription}
                refs={this.input2}
                finalInput={true}
              ></RupiTextInput>


              <View style={{ height: 20 }}>
                <Text>&nbsp;</Text>
              </View>


              <TouchableOpacity onPress={this.uploadImageHandler}>
                <RupiText text="Upload Image" style={{ color: "yellow" }}></RupiText>
              </TouchableOpacity>


              <View style={{ height: 20 }}>
                <Text>&nbsp;</Text>
              </View>


              <RupiSelect
                labelText="Product Market scale"
                initialLabel="Select Product Market Scale"
                onValueChange={(productMarketScale) => this.setState({ productMarketScale })}
                value={this.state.productMarketScale}
                pickOptions={this.state.productMarketScaleOptions}
                blockStyle={{ flex: 1 }}
              ></RupiSelect>

              <View style={styles.buttonContainer}>
                <InvertButton onInvertItemPressed={this.cancelProductHandler} title="Cancel"></InvertButton>
                <NormalButton onItemPressed={this.addProductSubmit} title="Add Product"></NormalButton>
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
