import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';

import RupiTextInput, { RupiSelect } from '../../../components/layouts/Forms/RupiTextInput';
import { NormalButton, InvertButton } from '../../../components/layouts/Buttons';

import { clientIssueArr } from '../../../helper/constants/constants';


export default class ClientLiability extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clientName: '',
      clientNameOptions: [
        { id: 1, value: 'Regan Timsina', label: 'Regan Timsina' },
        { id: 2, value: 'Gyanu Ojha', label: 'Gyanu Ojha' },
        { id: 3, value: 'Keshav Gautam', label: 'Keshav Gautam' },
        { id: 4, value: 'Romisha Timsina', label: 'Romisha Timsina' },
        { id: 5, value: 'Pukar Ojha', label: 'Pukar Ojha' }
      ],
      clientIssue: '',
      clientIssueOptions: clientIssueArr,
      clientIssueDescription: '',
    }
  }


  clientLiabilityCancel = () => {
    this.props.navigation.navigate('Home');
  }


  clientLiabilityHandler = () => {
    this.props.navigation.navigate('Home');
  }


  render() {
    return (
      <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
        <ScrollView>
          <RupiSelect
            labelText="Client Name"
            initialLabel="Select Client Name"
            onValueChange={(clientName) => this.setState({ clientName })}
            value={this.state.clientName}
            pickOptions={this.state.clientNameOptions}
          >
          </RupiSelect>

          <RupiSelect
            labelText="Client Issue"
            initialLabel="Select Client Issue"
            onValueChange={(clientIssue) => this.setState({ clientIssue })}
            value={this.state.clientIssue}
            pickOptions={this.state.clientIssueOptions}
          >
          </RupiSelect>

          <RupiTextInput
            labelText="Client Issue Description"
            multilineStatus={true}
            onChangeText={(clientIssueDescription) => this.setState({ clientIssueDescription })}
            value={this.state.clientIssueDescription}
          >
          </RupiTextInput>

          <View style={styles.buttonContiner}>
            <InvertButton style={{ flex: 1 }} title="Cancel" onInvertItemPressed={this.clientLiabilityCancel} />
            <NormalButton style={{ flex: 1 }} title="Save" onItemPressed={this.clientLiabilityHandler} />
          </View>


          <View style={styles.listView}>
            <Text style={styles.textHeading}>Regan Timsina</Text>
            <Text style={styles.textDefect}>Money Pending To Pay :</Text>
            <Text style={styles.textDescription}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs. 20000 is to be paid to the vendor. Is to be paid to the vendor. Is to be paid to the vendor. Is to be paid to the vendor.</Text>
          </View>

          <View style={styles.listView1}>
            <Text style={styles.textHeading1}>Gyanu Ojha</Text>
            <Text style={styles.textDefect1}>Money Pending To Receive :</Text>
            <Text style={styles.textDescription1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs. 20000 is to be paid to the vendor. Is to be paid to the vendor. Is to be paid to the vendor. Is to be paid to the vendor.</Text>
          </View>

          <View style={styles.listView2}>
            <Text style={styles.textHeading2}>Keshav Gautam</Text>
            <Text style={styles.textDefect2}>Last Deal With Client :</Text>
            <Text style={styles.textDescription2}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs. 20000 is to be paid to the vendor. Is to be paid to the vendor. Is to be paid to the vendor. Is to be paid to the vendor.</Text>
          </View>

          <View style={styles.listView3}>
            <Text style={styles.textHeading3}>Romisha Timsina</Text>
            <Text style={styles.textDefect3}>Client Not Applicable For Scheme :</Text>
            <Text style={styles.textDescription3}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs. 20000 is to be paid to the vendor. Is to be paid to the vendor. Is to be paid to the vendor. Is to be paid to the vendor.</Text>
          </View>

          <View style={styles.listView4}>
            <Text style={styles.textHeading4}>Pukar Ojha</Text>
            <Text style={styles.textDefect4}>Client Payment Delay More Than 3 Months :</Text>
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
