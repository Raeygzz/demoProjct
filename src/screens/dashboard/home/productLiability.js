import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';

import RupiTextInput, { RupiSelect } from '../../../components/layouts/Forms/RupiTextInput';
import { NormalButton, InvertButton } from '../../../components/layouts/Buttons';

import { productDefectsArr } from '../../../helper/constants/constants';


export default class ProductLiability extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productName: '',
      productNameOptions: [
        { id: 1, value: 'ABC', label: 'ABC' },
        { id: 2, value: 'DEF', label: 'DEF' },
        { id: 3, value: 'GHI', label: 'GHI' },
        { id: 4, value: 'JKL', label: 'JKL' },
        { id: 5, value: 'MNO', label: 'MNO' }
      ],
      productDefect: '',
      productDefectOptions: productDefectsArr,
      productDefectDescription: '',
    }
  }


  productLiabilityCancel = () => {
    this.props.navigation.navigate('Home');
  }


  productLiabilityHandler = () => {
    this.props.navigation.navigate('Home');
  }


  render() {
    return (
      <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
        <ScrollView>
          <RupiSelect
            labelText="Product Name"
            initialLabel="Select Product Name"
            onValueChange={(productName) => this.setState({ productName })}
            value={this.state.productName}
            pickOptions={this.state.productNameOptions}
          >
          </RupiSelect>

          <RupiSelect
            labelText="Product Defect"
            initialLabel="Select Product Defect"
            onValueChange={(productDefect) => this.setState({ productDefect })}
            value={this.state.productDefect}
            pickOptions={this.state.productDefectOptions}
          >
          </RupiSelect>

          <RupiTextInput
            labelText="Product Description"
            multilineStatus={true}
            onChangeText={(productDefectDescription) => this.setState({ productDefectDescription })}
            value={this.state.productDefectDescription}
          >
          </RupiTextInput>

          <View style={styles.buttonContiner}>
            <InvertButton style={{ flex: 1 }} title="Cancel" onInvertItemPressed={this.productLiabilityCancel} />
            <NormalButton style={{ flex: 1 }} title="Save" onItemPressed={this.productLiabilityHandler} />
          </View>


          <View style={styles.listView}>
            <Text style={styles.textHeading}>Cleansing Milk</Text>
            <Text style={styles.textDefect}>Money Pending To Pay :</Text>
            <Text style={styles.textDescription}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs. 20000 is to be paid to the vendor. Is to be paid to the vendor. Is to be paid to the vendor. Is to be paid to the vendor.</Text>
          </View>

          <View style={styles.listView1}>
            <Text style={styles.textHeading1}>Ayur Cream</Text>
            <Text style={styles.textDefect1}>Money Pending To Receive :</Text>
            <Text style={styles.textDescription1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs. 20000 is to be paid to the vendor. Is to be paid to the vendor. Is to be paid to the vendor. Is to be paid to the vendor.</Text>
          </View>

          <View style={styles.listView2}>
            <Text style={styles.textHeading2}>Acnamouist Cream</Text>
            <Text style={styles.textDefect2}>Product Quantity To Demand :</Text>
            <Text style={styles.textDescription2}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs. 20000 is to be paid to the vendor. Is to be paid to the vendor. Is to be paid to the vendor. Is to be paid to the vendor.</Text>
          </View>

          <View style={styles.listView3}>
            <Text style={styles.textHeading3}>Vaseline Cream </Text>
            <Text style={styles.textDefect3}>Product Defect :</Text>
            <Text style={styles.textDescription3}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs. 20000 is to be paid to the vendor. Is to be paid to the vendor. Is to be paid to the vendor. Is to be paid to the vendor.</Text>
          </View>

          <View style={styles.listView4}>
            <Text style={styles.textHeading4}>Sanitary Pad</Text>
            <Text style={styles.textDefect4}>Product Quantity To Demand :</Text>
            <Text style={styles.textDescription4}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs. 20000 is to be paid to the vendor. Is to be paid to the vendor. Is to be paid to the vendor. Is to be paid to the vendor.</Text>
          </View>
        </ScrollView>

      </View>
    )
  }
}


const styles = StyleSheet.create({
  // Button
  buttonContiner: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  // Listview
  listView: {
    marginTop: 30,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: 'red',
  },
  listView1: {
    marginVertical: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: 'green',
  },
  listView2: {
    marginVertical: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: 'lightgreen',
  },
  listView3: {
    marginVertical: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: 'pink',
  },
  listView4: {
    marginVertical: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: 'darkgrey',
  },

  // Listview text
  textHeading: {
    fontWeight: "bold",
    color: 'white',
    textAlign: 'center',
    marginBottom: 20
  },
  textDefect: {
    fontWeight: "bold",
    color: 'white',
  },
  textDescription: {
    color: 'white',
  },
  textHeading1: {
    fontWeight: "bold",
    color: 'white',
    textAlign: 'center',
    marginBottom: 20
  },
  textDefect1: {
    fontWeight: "bold",
    color: 'white',
  },
  textDescription1: {
    color: 'white',
  },
  textHeading2: {
    fontWeight: "bold",
    color: 'white',
    textAlign: 'center',
    marginBottom: 20
  },
  textDefect2: {
    fontWeight: "bold",
    color: 'white',
  },
  textDescription2: {
    color: 'white',
  },
  textHeading3: {
    fontWeight: "bold",
    color: 'white',
    textAlign: 'center',
    marginBottom: 20
  },
  textDefect3: {
    fontWeight: "bold",
    color: 'white',
  },
  textDescription3: {
    color: 'white',
  },
  textHeading4: {
    fontWeight: "bold",
    color: 'white',
    textAlign: 'center',
    marginBottom: 20
  },
  textDefect4: {
    fontWeight: "bold",
    color: 'white',
  },
  textDescription4: {
    color: 'white',
  }
})
