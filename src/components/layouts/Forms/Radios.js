import * as React from 'react';
import { View, TouchableOpacity } from 'react-native';

import RupiText from "../RupiText";

import Icon from "react-native-vector-icons/SimpleLineIcons";


export default class SelectRadio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      radioSelected: 0,
      radioSelectedValue: null
    }
  }

  render() {
    let globalStyle = require('../../styles/styles');
    const products = this.props.options;

    return (
      products.map((val) => {

        return (
          <TouchableOpacity key={val.id}
            onPress={() => {
              this.setState({ radioSelected: val.id, radioSelectedValue: val.text })
              this.props.onRadioButtonChange(val.id, val.text)
            }} >
            <View style={{ flexDirection: "row", flex: 1, justifyContent: "space-between", maxWidth: 352, alignItems: "center" }}>
              <RupiText text={val.text}
                style={[{ lineHeight: 60, color: val.id == this.state.radioSelected ? "#FFBD00" : "white" },
                this.props.textStyles]}></RupiText>
              {
                val.id == this.state.radioSelected ?
                  <Icon
                    name="check"
                    color="#FFBD00"
                    size={20}
                    style={{
                      height: 22,
                      width: 22,
                      marginRight: 10
                    }}
                  />
                  : null
              }
            </View>
          </TouchableOpacity>
        )
      })
    );
  }
}

export class NormalRadios extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      radioSelected: "MALE"
    }
  }

  render() {
    let globalStyle = require('../../styles/styles')

    const products = this.props.options

    return (
      products.map((val) => {
        return (
          <TouchableOpacity key={val.id}
            onPress={() => {
              this.setState({ radioSelected: val.id })
              this.props.onRadioButtonChange(val.id)
            }} >
            <View style={{ flexDirection: "row", flex: 1, justifyContent: "space-between", maxWidth: 352, alignItems: "center", height: 45 }}>
              {
                <Icon
                  size={16}
                  style={[{
                    height: 16,
                    width: 16,
                    marginRight: 10,
                    borderWidth: 1,
                    borderColor: "white"
                  },
                  globalStyle.rounded,
                  val.id == this.state.radioSelected ? globalStyle.radioChecked : null
                  ]}
                />
              }
              <RupiText text={val.text}
                style={[{ flex: 1, fontSize: 16, lineHeight: 45, color: val.id == this.state.radioSelected ? "#FFBD00" : "white" }]}></RupiText>
              <View style={{ height: 16, width: 16, }}></View>
            </View>
          </TouchableOpacity>
        )
      })
    );
  }
}