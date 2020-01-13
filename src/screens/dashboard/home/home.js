import React, { Component } from "react";
import { View, TextInput, StyleSheet, ScrollView, Dimensions } from "react-native";

import FalseHeader from '../../../components/layouts/header/falseHeader';
import { RupiSelect } from '../../../components/layouts/Forms/RupiTextInput'

import Icon from "react-native-vector-icons/SimpleLineIcons";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

import { LineChart } from "react-native-chart-kit";


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['S.No.', 'T.Estimate', 'T.ScaledProduct', 'T.Product', 'T.Quantity', 'T.Amount', 'T.ActiveClient', 'T.Client', 'T.OrderReceive', 'T.OrderReceiveAmount'],
      tableData: [
        ['1', '1000', '3', '10', '4', '1000', '4', '5', '4', '500'],
        ['2', '2000', '4', '20', '5', '2000', '5', '6', '5', '1000'],
        ['3', '3000', '5', '30', '6', '3000', '6', '7', '6', '1500'],
      ],
      tableWidthArr: [50, 90, 120, 90, 90, 90, 110, 90, 110],

      selectForShowingList: '',
      selectOptions: [
        { id: 0, value: 'All', label: 'All' },
        { id: 1, value: "Gyanu", label: "Gyanu Ojha" },
        { id: 2, value: "Keshab", label: "Keshab Gautam" },
      ],

      productTableHead: ['S.No.', 'Product Image', 'Scaled Product', 'Product Name', 'Product Quantity', 'Product Amount'],
      productTableData: [
        ['1', 'img', 'High', 'ABC', '4', '1000'],
        ['2', 'img', 'Moderate', 'DEF', '5', '2000'],
        ['3', 'img', 'Fresher', 'GHI', '6', '3000'],
      ],
      productTableWidthArr: [50, 110, 120, 150, 120, 120],


      clientTableHead: ['S.No.', 'Client Active', 'Client Name', 'Client Address', 'Client Email Phone', 'Client Note'],
      clientTableData: [
        ['1', 'High', 'Ram Gopal Verma', 'Itahari, Sunsari, Nepal', 'ram@gmail.com / 9865744324', 'Good Behavior'],
        ['2', 'Moderate', 'Shyam Thapa', 'Biratchowk, Morang, Nepal', 'shyam@gmail.com / 9876555436', 'Not a reliable person while renting product'],
        ['3', 'Fresher', 'Hari Kumar Sah', 'Biratnagar, Morang, Nepal', 'hari@gmail.com / 9856432456', 'Nice person but not able to pay at times'],
      ],
      clientTableWidthArr: [50, 100, 150, 200, 250, 300],
    };
  }

  static navigationOptions = {
    header: null
  };


  liabilityHandler = () => {
    this.props.navigation.navigate('Liability');
  }

  render() {
    var globalStyle = require('../../../components/styles/styles');

    return (
      <ScrollView>
        {/* ================== FALSE HEADER STARTS HERE ========================== */}
        <FalseHeader onIconPressed={this.liabilityHandler} title="Home" iconName="options-vertical"></FalseHeader>


        {/*====================SEARCH BAR STARTS HERE ==============================*/}
        <View style={{ flex: 1, justifyContent: "center" }, styles.searchboxContainer}>
          <TextInput
            placeholder="Search Product or Client"
            style={[{ position: "absolute", left: 0, right: 0, top: 20, height: 40, paddingLeft: 20, backgroundColor: "white", zIndex: 2, marginHorizontal: 20, }, globalStyle.f500]}
            onChangeText={(searchInput) => this.setState({ searchInput }, () => {
              // this.searchBoxFilterArrDisplay();
            })}
            value={this.state.searchInput}
            onSubmitEditing={() => this.setState({ bankFilterVisible: false })}
          >
          </TextInput>

          {/*================== SEARCH BAR ICON =======================*/}
          <View style={styles.searchboxIcon}>
            <Icon style={styles.icon} name="magnifier" size={20} color="white"></Icon>
          </View>
        </View>


        {/*================= TABLE START =============================*/}
        <View style={styles.tableContainer}>
          <ScrollView horizontal={true}>
            <View>
              <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                <Row data={this.state.tableHead} widthArr={this.state.tableWidthArr} style={styles.tableHeader} textStyle={styles.tableText} />
              </Table>
              <ScrollView>
                <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                  {
                    this.state.tableData.map((data, index) => (
                      <Row
                        key={index}
                        data={data}
                        widthArr={this.state.tableWidthArr}
                        style={[styles.row, index % 2 && { backgroundColor: '#F7F6E7' }]}
                        textStyle={styles.tableText}
                      />
                    ))
                  }
                </Table>
              </ScrollView>
            </View>
          </ScrollView>
        </View>

        {/*=========================== LINE CHART STRT ===================================*/}
        <View>
          <LineChart
            data={{
              labels: ["January", "February", "March", "April", "May", "June"],
              datasets: [{
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100
                ]
              }]
            }}
            width={Dimensions.get("window").width} // from react-native
            height={220}
            yAxisLabel={"$"}
            yAxisSuffix={"k"}
            chartConfig={{
              backgroundColor: "#e26a00",
              backgroundGradientFrom: "#fb8c00",
              backgroundGradientTo: "#ffa726",
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                margin: 20,
                borderRadius: 16,
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#ffa726"
              }
            }}
            bezier
            style={{
              margin: 20,
              borderRadius: 16
            }}
          />
        </View>

        {/*================ PICKER START ====================*/}
        <View style={styles.picker}>
          <RupiSelect
            initialLabel="Select User"
            labelText="Select User"
            onValueChange={(selectForShowingList) => this.setState({ selectForShowingList })}
            pickOptions={this.state.selectOptions}
          ></RupiSelect>
        </View>

        {/*============= PRODUCT TABLE START =============*/}
        <View style={styles.productTableContainer}>
          <ScrollView horizontal={true}>
            <View>
              <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                <Row data={this.state.productTableHead} widthArr={this.state.productTableWidthArr} style={styles.tableHeader} textStyle={styles.tableText} />
              </Table>
              <ScrollView>
                <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                  {
                    this.state.productTableData.map((data, index) => (
                      <Row
                        key={index}
                        data={data}
                        widthArr={this.state.productTableWidthArr}
                        style={[styles.row, index % 2 && { backgroundColor: '#F7F6E7' }]}
                        textStyle={styles.tableText}
                      />
                    ))
                  }
                </Table>
              </ScrollView>
            </View>
          </ScrollView>
        </View>


        {/*================ CLIENT TABLE START ===================*/}
        <View style={styles.clientTableContainer}>
          <ScrollView horizontal={true}>
            <View>
              <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                <Row data={this.state.clientTableHead} widthArr={this.state.clientTableWidthArr} style={styles.tableHeader} textStyle={styles.tableText} />
              </Table>
              <ScrollView>
                <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                  {
                    this.state.clientTableData.map((data, index) => (
                      <Row
                        key={index}
                        data={data}
                        widthArr={this.state.clientTableWidthArr}
                        style={[styles.row, index % 2 && { backgroundColor: '#F7F6E7' }]}
                        textStyle={styles.tableText}
                      />
                    ))
                  }
                </Table>
              </ScrollView>
            </View>
          </ScrollView>
        </View>

      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  // Searchbox
  searchboxContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  icon: {
    color: 'black'
  },
  searchboxIcon: {
    zIndex: 999,
    marginTop: 28,
    marginRight: 27,
  },

  // mainTable
  tableContainer: {
    marginVertical: 50,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    backgroundColor: '#fff'
  },
  tableHeader: {
    height: 50,
    backgroundColor: '#537791'
  },
  tableText: {
    textAlign: 'center',
    fontWeight: '100'
  },
  row: {
    height: 40,
    backgroundColor: '#E7E6E1'
  },

  // Picker
  picker: {
    marginLeft: 20,
    width: 170
  },

  // Product table container
  productTableContainer: {
    marginVertical: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    backgroundColor: '#fff'
  },

  // Client table container
  clientTableContainer: {
    marginVertical: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    backgroundColor: '#fff'
  },
})
