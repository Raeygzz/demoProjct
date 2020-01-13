import React, { Component } from "react";
import { Modal, View, TouchableOpacity, ScrollView } from "react-native";

import RupiText from "../../../components/layouts/RupiText";
import BaseGradient from "../../../components/layouts/baseGradient";

import Icon from "react-native-vector-icons/SimpleLineIcons";

import ProductLiability from "./productLiability";
import ClientLiability from "./clientLiability";


export default class Liability extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productLiability: true,
      clientLiability: false,

      modalVisible: true,
    };
  }


  render() {
    let globalStyle = require('../../../components/styles/styles');

    return (
      <Modal animationType="slide" transparent={false} visible={this.state.modalVisible}>
        <View style={[{ flex: 1, paddingHorizontal: 27, paddingVertical: 50, }, globalStyle.br24, globalStyle.purpleBg]}>
          <BaseGradient></BaseGradient>

          <RupiText text="LIABILITIES" style={globalStyle.formHeading}></RupiText>

          <View style={[{ flex: 1 }, globalStyle.purpleBg, globalStyle.br24]}>

            {/* ====== NAVIGATION OPTIONS FOR LIABILITIES EDITING ======== */}
            <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'center' }}>

              {/* =============== productLiability INFO ================ */}
              <TouchableOpacity style={{ flex: 1 }} onPress={() => this.setState({ productLiability: true, clientLiability: false })}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Icon
                    name="list"
                    size={20}
                    style={{
                      marginRight: 10,
                      color: this.state.productLiability ? "#FFBD00" : "white",
                    }}
                  ></Icon>
                  <RupiText text="productLiability" style={[{
                    color: this.state.productLiability ? "#FFBD00" : "white",
                  },
                  globalStyle.formGroupTitle,
                  this.state.productLiability ? globalStyle.bold : null]}></RupiText>
                </View>
              </TouchableOpacity>

              {/* =============== clientLiability INFO ================ */}
              <TouchableOpacity style={{ flex: 1, marginLeft: 100 }} onPress={() => this.setState({ productLiability: false, clientLiability: true })}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Icon
                    name="people"
                    size={20}
                    style={{
                      marginRight: 10,
                      color: this.state.clientLiability ? "#FFBD00" : "white",
                    }}
                  ></Icon>
                  <RupiText text="clientLiability" style={[{
                    color: this.state.clientLiability ? "#FFBD00" : "white",
                  },
                  globalStyle.formGroupTitle,
                  this.state.clientLiability ? globalStyle.bold : null]}></RupiText>
                </View>
              </TouchableOpacity>
            </View>

            {/* ============= EDIT SCREENS ============= */}
            <View style={{ flex: 1 }}>
              <View style={{ flex: 1 }}>

                {/* productLiability EDITING SCREENS */}
                {this.state.productLiability ?
                  <ScrollView contentContainerStyle={{ flex: 1 }}>
                    <ProductLiability navigation={this.props.navigation}></ProductLiability>
                  </ScrollView>
                  : null}

                {/* clientLiability EDITIGN SCREENS */}
                {this.state.clientLiability ?
                  <ScrollView>
                    <ClientLiability navigation={this.props.navigation}></ClientLiability>
                  </ScrollView>
                  : null}
              </View>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}
