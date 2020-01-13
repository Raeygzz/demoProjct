import React, { Component } from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";

import RupiText from "../../../components/layouts/RupiText";
import BaseGradient from "../../../components/layouts/baseGradient";
import FalseHeader from '../../../components/layouts/header/falseHeader';

import Icon from "react-native-vector-icons/SimpleLineIcons";

import Product from "./product";
import Client from "./client";

export default class Inventory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: true,
      client: false,
    };
  }


  static navigationOptions = {
    header: null
  };


  addClientHandler = () => {
    this.props.navigation.navigate("AddClient");
  }

  addProductHandler = () => {
    this.props.navigation.navigate("AddProduct");
  }


  render() {
    let globalStyle = require('../../../components/styles/styles');

    return (
      <View style={{ flex: 1 }}>

        {/* ================== FALSE HEADER STARTS HERE ========================== */}
        <FalseHeader onIconPressed1={this.addClientHandler} onIconPressed={this.addProductHandler} title="Inventory" iconName1="user" iconName="plus"></FalseHeader>

        <BaseGradient></BaseGradient>

        <View style={[{ flex: 1 }, globalStyle.purpleBg, globalStyle.globalPadding, globalStyle.br24, { paddingTop: 12 }]}>

          {/* ====== NAVIGATION OPTIONS FOR INVENTORY EDITING ======== */}
          <View style={{ flexDirection: "row", marginBottom: 20 }}>

            {/* =============== PRODUCT INFO ================ */}
            <TouchableOpacity style={{ flex: 1 }} onPress={() => this.setState({ product: true, client: false })}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon
                  name="list"
                  size={20}
                  style={{
                    marginRight: 10,
                    color: this.state.product ? "#FFBD00" : "white",
                  }}
                ></Icon>
                <RupiText text="Product" style={[{
                  color: this.state.product ? "#FFBD00" : "white",

                },
                globalStyle.formGroupTitle,
                this.state.product ? globalStyle.bold : null]}></RupiText>
              </View>
            </TouchableOpacity>

            {/* =============== CLIENT INFO ================ */}
            <TouchableOpacity style={{ flex: 1, marginLeft: 180 }} onPress={() => this.setState({ product: false, client: true })}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon
                  name="people"
                  size={20}
                  style={{
                    marginRight: 10,
                    color: this.state.client ? "#FFBD00" : "white",
                  }}
                ></Icon>
                <RupiText text="Client" style={[{
                  color: this.state.client ? "#FFBD00" : "white",

                },
                globalStyle.formGroupTitle,
                this.state.client ? globalStyle.bold : null]}></RupiText>
              </View>
            </TouchableOpacity>
          </View>

          {/* ============= EDIT SCREENS ============= */}
          <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>

              {/* PRODUCT EDITING SCREENS */}
              {this.state.product ?
                <ScrollView contentContainerStyle={{ flex: 1 }}>
                  <Product navigation={this.props.navigation}></Product>
                </ScrollView>
                : null}

              {/* CLIENT EDITIGN SCREENS */}
              {this.state.client ?
                <ScrollView>
                  <Client navigation={this.props.navigation}></Client>
                </ScrollView>
                : null}
            </View>
          </View>
        </View>
      </View>
    );
  }
}
