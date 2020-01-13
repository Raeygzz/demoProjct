import React, { Component } from "react";
import { View, ScrollView, StyleSheet, TextInput } from "react-native";

import BaseGradient from "../../../components/layouts/baseGradient";
import FalseHeader from '../../../components/layouts/header/falseHeader';
import { OrderList } from "../../../components/layouts/list/orderList";

import Icon from "react-native-vector-icons/SimpleLineIcons";


export default class OrderRecords extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sellSubmission: false,
    };
  }


  addOrderRecordsHandler = () => {
    this.props.navigation.navigate('AddOrderRecord');
  }

  orderRecordsDetailsHandler = () => {
    this.props.navigation.navigate('OrderRecordDetails');
  }


  orderRecordDetailsHandlerDelete = () => {
    console.log('Order Record Details Handler Delete');
  }


  render() {
    let globalStyle = require('../../../components/styles/styles');

    return (
      <View style={{ flex: 1 }}>

        {/* ================== FALSE HEADER STARTS HERE ========================== */}
        <FalseHeader onIconPressed={this.addOrderRecordsHandler} title="Order Records" iconName="plus"></FalseHeader>

        <BaseGradient></BaseGradient>

        <View style={[{ flex: 1, paddingHorizontal: 20, paddingTop: 20, paddingBottom: 34 }, globalStyle.purpleBg, globalStyle.br24]}>
          <ScrollView>

            {/*====================SEARCH BAR STARTS HERE ==============================*/}
            <View style={{ flex: 1, justifyContent: "center" }, styles.searchboxContainer}>
              <TextInput placeholder="Search Order Records" style={[{ position: "absolute", left: 0, right: 0, top: 0, height: 40, paddingLeft: 20, backgroundColor: "white", zIndex: 2 }, globalStyle.f500]}
                onChangeText={(searchInput) => this.setState({ searchInput })}
                value={this.state.searchInput}
                onSubmitEditing={() => this.setState({ bankFilterVisible: false })}
              ></TextInput>

              {/*================== SEARCH BAR ICON =======================*/}
              <View style={styles.searchboxIcon}>
                <Icon style={styles.icon} name="magnifier" size={20} color="white"></Icon>
              </View>
            </View>


            <View style={styles.listView}>
              <OrderList onItemPressed={this.orderRecordsDetailsHandler} onIconPressed={this.orderRecordDetailsHandlerDelete}
                productImage="img"
                productName="Vaseline Cream"
                productQuantity="10"
                productPerAmount="10000"
                productTotalAmount="100000"
                productMarketScale="Deprecated"
                productMarketScaleColor="red"

                productDateOfSell="20 / 01 / 2020"

                clientName="Regan Timsina"
                clientAddress="SundarHaraicha-1, Biratchowk, Morang, Nepal"
                clientPhone="9842566750"
                clientNote="Client Behavior is good"
                clientActiveScale="High"
                clientActiveScaleColor="green"
                pendingActivity="The product is nice but need to consult with the client and also ask for remaining amounts to be paid."

                sellSubmission={true}

                iconName="trash"
                iconColor="red"
                iconSize={20}
              /></View>


            <View style={styles.listView}>
              <OrderList onItemPressed={this.orderRecordsDetailsHandler} onIconPressed={this.orderRecordDetailsHandlerDelete}
                productImage="img"
                productName="Lip Care"
                productQuantity="5"
                productPerAmount="1000"
                productTotalAmount="5000"
                productMarketScale="High"
                productMarketScaleColor="green"

                productDateOfSell="08 / 01 / 2020"

                clientName="Romisha Timsina"
                clientAddress="SundarHaraicha-1, Biratchowk, Morang, Nepal"
                clientPhone="9803597091"
                clientNote="Is an active client"
                clientActiveScale="Moderate"
                clientActiveScaleColor="lightgreen"
                pendingActivity="The product is nice but need to consult with the client and also ask for remaining amounts to be paid. The product is nice but need to consult with the client. "

                sellSubmission={true}

                iconName="trash"
                iconColor="red"
                iconSize={20}
              /></View>

          </ScrollView>

        </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  // list view
  listView: {
    marginVertical: 15,
  },

  // Searchbox
  searchboxContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20
  },
  icon: {
    color: 'black',
  },
  searchboxIcon: {
    zIndex: 999,
    marginTop: 10,
    marginRight: 12,
  },
})
