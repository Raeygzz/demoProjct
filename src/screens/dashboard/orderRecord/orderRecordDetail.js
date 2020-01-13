import React, { Component } from 'react';
import { Modal, View, Text, ScrollView, StyleSheet, Image } from "react-native";

import BaseGradient from "../../../components/layouts/baseGradient";
import { NormalButton, InvertButton } from "../../../components/layouts/Buttons";
import RupiTextInput, { RupiSelect } from "../../../components/layouts/Forms/RupiTextInput";
import RupiText from "../../../components/layouts/RupiText";

import { productQuantityArr, productMarketScaleArr, clientActiveScaleArr, monthArr, daysArr, yearsArr } from '../../../helper/constants/constants';


export default class OrderRecordDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productImageUpload: '',
      productName: '',
      productNameOptions: [
        { id: 1, value: "Cleansing Milk", label: "Cleasing Milk" },
        { id: 2, value: "Ayur Herbal", label: "Ayur Herbal" },
        { id: 3, value: "Suns Cream", label: "Suns Cream" },
        { id: 4, value: "Vaseline Cream", label: "Vaseline Cream" },
        { id: 5, value: "Lip Care", label: "Lip Care" },
      ],
      productQuantity: '',
      productQuantityOptions: productQuantityArr,
      productPerAmount: "",
      productTotalAmount: "1000",
      productMarketScale: '',
      productMarketScaleOptions: productMarketScaleArr,

      selectedMonthName: '',
      monthOptions: monthArr,
      selectedDay: '',
      dayOptions: daysArr,
      selectedYear: '',
      yearOptions: yearsArr,

      clientName: '',
      clientNameOptions: [
        { id: 1, value: "Regan Timsina", label: "Regan Timsina" },
        { id: 2, value: "Romisha Timsina", label: "Romisha Timsina" },
        { id: 3, value: "Gyanu ojha", label: "Gyanu ojha" },
        { id: 4, value: "Keshav Gautam", label: "Keshav Gautam" },
        { id: 5, value: "Pukar Ojha", label: "Pukar Ojha" },
      ],
      clientAddress: '',
      clientPhone: '',
      clientNote: '',
      clientActiveScale: '',
      clientActiveScaleOptions: clientActiveScaleArr,

      pendingActivity: '',

      modalVisible: true,
    };

    this.input2 = React.createRef();
    this.input3 = React.createRef();
    this.input4 = React.createRef();
    this.input5 = React.createRef();
    this.input6 = React.createRef();
    this.input7 = React.createRef();
    this.input8 = React.createRef();
  }

  orderRecordDetailsSubmit = () => {
    this.props.navigation.navigate('OrderRecord');
  }


  cancelOrderRecordDetailsHandler = () => {
    this.props.navigation.navigate('OrderRecord');
  }


  render() {
    var globalStyle = require('../../../components/styles/styles');

    return (
      <Modal animationType="slide" transparent={false} visible={this.state.modalVisible}>
        <View style={[{ flex: 1, paddingHorizontal: 27, paddingVertical: 50 }, globalStyle.br24, globalStyle.purpleBg]}>

          <BaseGradient></BaseGradient>

          <ScrollView style={{ height: "100%" }}>
            <View style={{ height: "100%" }}>

              <RupiText text="ORDER RECORD DETAILS" style={globalStyle.formHeading}></RupiText>

              <Text style={{ opacity: 0.48, lineHeight: 17, fontFamily: "Apercu Bold", fontSize: 14, color: "#fff", fontWeight: "700" }}>PRODUCT</Text>

              <View style={{ height: 12 }}>
                <Text>&nbsp;</Text>
              </View>

              <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <View style={{ flex: 1 }}>
                  <Image style={{ width: "95%", height: 60 }} source={require('../../../components/assets/images/vaseline.jpg')} />
                </View>

                <View style={{ flex: 5 }}>
                  <RupiSelect
                    labelText="Product Name"
                    initialLabel="Select Product Name"
                    onValueChange={(productName) => this.setState({ productName })}
                    value={this.state.productName}
                    pickOptions={this.state.productNameOptions}
                  ></RupiSelect>
                </View>

              </View>

              <RupiSelect
                labelText="Product Quantity"
                initialLabel="Select Product Quantity"
                onValueChange={(productQuantity) => this.setState({ productQuantity })}
                value={this.state.productQuantity}
                pickOptions={this.state.productQuantityOptions}
              ></RupiSelect>

              <RupiTextInput
                labelText="Product Per Amount"
                editableStatus={false}
                onChangeText={(productPerAmount) => this.setState({ productPerAmount })}
                value={this.state.productPerAmount}
              ></RupiTextInput>

              <RupiTextInput
                labelText="Product Total Amount"
                editableStatus={false}
                onChangeText={(productTotalAmount) => this.setState({ productTotalAmount })}
                value={this.state.productTotalAmount}
              ></RupiTextInput>

              <RupiSelect
                labelText="Product Market scale"
                initialLabel="Select Product Market Scale"
                onValueChange={(productMarketScale) => this.setState({ productMarketScale })}
                value={this.state.productMarketScale}
                pickOptions={this.state.productMarketScaleOptions}
                blockStyle={{ flex: 1 }}
              ></RupiSelect>

              <View style={{ height: 12 }}>
                <Text>&nbsp;</Text>
              </View>

              <Text style={{ opacity: 0.48, lineHeight: 17, fontFamily: "Apercu Bold", fontSize: 14, color: "#fff", fontWeight: "700" }}>DATE OF SELL</Text>

              <View style={{ height: 12 }}>
                <Text>&nbsp;</Text>
              </View>

              <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <View style={{ flex: 4 }}>
                  <RupiSelect
                    initialLabel="Month"
                    labelText="Month"
                    onValueChange={(selectedMonthName) => this.setState({ selectedMonthName })}
                    value={this.state.selectedMonthName}
                    pickOptions={this.state.monthOptions}
                  >
                  </RupiSelect>
                </View>

                <View style={{ flex: 3 }}>
                  <RupiSelect
                    initialLabel="Day"
                    labelText="Day"
                    onValueChange={(selectedDay) => this.setState({ selectedDay })}
                    value={this.state.selectedDay}
                    pickOptions={this.state.dayOptions}
                  >
                  </RupiSelect>
                </View>

                <View style={{ flex: 3 }}>
                  <RupiSelect
                    initialLabel="Year"
                    labelText="Year"
                    onValueChange={(selectedYear) => this.setState({ selectedYear })}
                    value={this.state.selectedYear}
                    pickOptions={this.state.yearOptions}
                  >
                  </RupiSelect>
                </View>

              </View>


              <View style={{ height: 12 }}>
                <Text>&nbsp;</Text>
              </View>

              <Text style={{ opacity: 0.48, lineHeight: 17, fontFamily: "Apercu Bold", fontSize: 14, color: "#fff", fontWeight: "700" }}>CLIENT</Text>

              <View style={{ height: 12 }}>
                <Text>&nbsp;</Text>
              </View>


              <RupiSelect
                labelText="Client Name"
                initialLabel="Select Client Name"
                onValueChange={(clientName) => this.setState({ clientName })}
                value={this.state.clientName}
                pickOptions={this.state.clientNameOptions}
              >
              </RupiSelect>


              <RupiTextInput
                labelText="Client Address"
                multilineStatus={true}
                onChangeText={(clientAddress) => this.setState({ clientAddress })}
                value={this.state.clientAddress}
              ></RupiTextInput>


              <RupiTextInput
                labelText="Client Phone"
                onChangeText={(clientPhone) => this.setState({ clientPhone })}
                value={this.state.clientPhone}
              ></RupiTextInput>


              <RupiTextInput
                labelText="Client Note"
                onChangeText={(clientNote) => this.setState({ clientNote })}
                value={this.state.clientNote}
              ></RupiTextInput>


              <RupiSelect
                labelText="Client Active scale"
                initialLabel="Select Client Active Scale"
                onValueChange={(clientActiveScale) => this.setState({ clientActiveScale })}
                value={this.state.clientActiveScale}
                pickOptions={this.state.clientActiveScaleOptions}
                blockStyle={{ flex: 1 }}
              ></RupiSelect>


              <RupiTextInput
                labelText="Pending Activity"
                multilineStatus={true}
                onChangeText={(pendingActivity) => this.setState({ pendingActivity })}
                value={this.state.pendingActivity}
              ></RupiTextInput>


              <View style={styles.buttonContainer}>
                <InvertButton onInvertItemPressed={this.cancelOrderRecordDetailsHandler} title="Cancel"></InvertButton>
                <NormalButton onItemPressed={this.orderRecordDetailsSubmit} title="Update Order Record"></NormalButton>
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
