import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Picker, Animated } from 'react-native';

import RupiText from '../RupiText';

import Icon from "react-native-vector-icons/SimpleLineIcons";


export default class RupiTextInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShow: true,
      touched: false,
      blockTouched: false,
      labelTop: new Animated.Value(20),
      opaq: new Animated.Value(1),
      text: this.props.value,
    };

    this.searchInputArr = [];
  }

  setFocus(touched, blockTouched) {
    this.setState({ touched });
    this.setState({ blockTouched });
    Animated.parallel([
      Animated.timing(                  // Animate over time
        this.state.labelTop,            // The animated value to drive
        {
          toValue: 0,                   // Animate to value top 0
          duration: 300,              // Make it take a while
        }
      ),
      Animated.timing(
        this.state.opaq,
        {
          toValue: 1,
          duration: 100,
        }
      )
    ]).start();
  }


  setBlur(touched) {
    this.setState({ touched });
  }


  render() {
    let { labelTop, opaq } = this.state;

    return (
      <View style={[formstyle.blockheight, this.props.blockStyle, { paddingBottom: this.state.haserror ? 22 : 0 }]}>
        <Animated.Text style={[formstyle.label,
        this.props.validateHasError || this.props.validateHasErrorM || this.props.validateHasErrorL || this.props.validateHasErrorA1 || this.props.validateHasErrorE || this.props.validateHasErrorP || this.props.validateHasErrorCP || this.props.validateHasErrorPH || this.props.validateHasErrorACC || this.props.validateHasErrorCity || this.props.validateHasErrorZCode || this.props.validateHasErrorSS1 || this.props.validateHasErrorSS2 || this.props.validateHasErrorSS3 || this.props.validateHasErrorMinute || this.props.validateHasErrorTransferTitle ? [formstyle.haserror, { marginTop: 0 }] : "",
        this.state.blockTouched || this.props.value != "" ? { top: labelTop, opacity: opaq } : null]}
        >
          {this.props.labelText}
        </Animated.Text>

        <TextInput
          textContentType="password"
          selectionColor="#71648E"
          maxLength={this.props.maxLengthStatus}
          label={this.props.label}
          value={this.state.text}
          style={[formstyle.inputPlaceholder,
          this.state.touched ? formstyle.inputTouched : null,
          this.props.inputStyle,

          // error cases hadling in some cases
          {
            height: this.props.validateHasError || this.props.validateHasErrorSS1 || this.props.validateHasErrorSS2 || this.props.validateHasErrorSS3 || this.props.validateHasErrorM || this.props.validateHasErrorL || this.props.validateHasErrorA1 || this.props.validateHasErrorE || this.props.validateHasErrorP || this.props.validateHasErrorCP || this.props.validateHasErrorPH || this.props.validateHasErrorACC || this.props.validateHasErrorCity || this.props.validateHasErrorZCode || this.props.validateHasErrorSS1 || this.props.validateHasErrorSS2 || this.props.validateHasErrorSS3 || this.props.validateHasErrorTransferTitle ? 25 : 37,
            lineHeight: this.props.validateHasError || this.props.validateHasErrorSS1 || this.props.validateHasErrorSS2 || this.props.validateHasErrorSS3 || this.props.validateHasErrorM || this.props.validateHasErrorL || this.props.validateHasErrorA1 || this.props.validateHasErrorE || this.props.validateHasErrorP || this.props.validateHasErrorCP || this.props.validateHasErrorPH || this.props.validateHasErrorACC || this.props.validateHasErrorCity || this.props.validateHasErrorZCode || this.props.validateHasErrorSS1 || this.props.validateHasErrorSS2 || this.props.validateHasErrorSS3 || this.props.validateHasErrorTransferTitle ? 22 : 12,
            borderBottomColor: this.props.validateHasError || this.props.validateHasErrorSS1 || this.props.validateHasErrorSS2 || this.props.validateHasErrorSS3 || this.props.validateHasErrorM || this.props.validateHasErrorL || this.props.validateHasErrorA1 || this.props.validateHasErrorE || this.props.validateHasErrorP || this.props.validateHasErrorCP || this.props.validateHasErrorPH || this.props.validateHasErrorACC || this.props.validateHasErrorCity || this.props.validateHasErrorZCode || this.props.validateHasErrorSS1 || this.props.validateHasErrorSS2 || this.props.validateHasErrorSS3 || this.props.validateHasErrorTransferTitle ? "red" : "white"
          },
          this.props.haserror ? { height: 37, lineHeight: 12, color: "red" } : null

          ]}

          // ON KEYPRESS EVENT
          onKeyPress={this.props.onKeyPress}

          onFocus={this.setFocus.bind(this, true, true)}
          onBlur={this.setBlur.bind(this, false)}
          parentData={this.props.parentData}
          secureTextEntry={this.props.hideText}
          underlineColorAndroid="transparent"
          textContentType={this.props.textContentType}
          keyboardType={this.props.keyboardType}
          autoCapitalize={this.props.autoCapitalize !== undefined ? this.props.autoCapitalize : "none"}
          placeholder={this.props.placeholder}
          autoFocus={this.props.autoFocus}
          placeholderTextColor="rgba(255,255,255,0.7)"
          returnKeyType={this.props.onSubmitEditing ? "next" : "done"}
          ref={this.props.refs}
          onSubmitEditing={this.props.onSubmitEditing ? this.props.onSubmitEditing : null}
          editable={this.props.editableStatus}
          multiline={this.props.multilineStatus}

          onChangeText={(text) => {
            this.setState({ text });
            this.props.onChangeText(text)
          }}>
        </TextInput>

        {/* if errors happen (ERR block) */}
        {
          this.props.validateReq == 'fName' && this.props.validateHasError ? (
            <Text style={formstyle.haserror}>{this.props.validateResult}</Text>
          ) : (null)
        }
        {
          this.props.validateReqM == 'mName' && this.props.validateHasErrorM ? (<Text style={formstyle.haserror}>{this.props.validateResultM}</Text>) : (null)
        }
        {
          this.props.validateReqL == 'lName' && this.props.validateHasErrorL ? (<Text style={formstyle.haserror}>{this.props.validateResultL}</Text>) : (null)
        }
        {
          this.props.validateReqA1 == 'aLine1' && this.props.validateHasErrorA1 ? (<Text style={formstyle.haserror}>{this.props.validateResultA1}</Text>) : (null)
        }
        {
          this.props.validateReqE == 'email' && this.props.validateHasErrorE ? (<Text style={formstyle.haserror}>{this.props.validateResultE}</Text>) : (null)
        }
        {
          this.props.validateReqP == 'pswd' && this.props.validateHasErrorP ? (<Text style={formstyle.haserror}>{this.props.validateResultP}</Text>) : (null)
        }
        {
          this.props.validateReqCP == 'cpswd' && this.props.validateHasErrorCP ? (<Text style={formstyle.haserror}>{this.props.validateResultCP}</Text>) : (null)
        }
        {
          this.props.validateReqPH == 'phone' && this.props.validateHasErrorPH ? (<Text style={formstyle.haserror}>{this.props.validateResultPH}</Text>) : (null)
        }
        {
          this.props.validateReqACC == 'account' && this.props.validateHasErrorACC ? (<Text style={formstyle.haserror}>{this.props.validateResultACC}</Text>) : (null)
        }
        {
          this.props.validateReqCity == 'city' && this.props.validateHasErrorCity ? (<Text style={formstyle.haserror}>{this.props.validateResultCity}</Text>) : (null)
        }
        {
          this.props.validateReqZCode == 'zip' && this.props.validateHasErrorZCode ? (<Text style={formstyle.haserror}>{this.props.validateResultZCode}</Text>) : (null)
        }
        {
          this.props.validateReqTransferTitle == 'transferTitle' && this.props.validateHasErrorTransferTitle ? (<Text style={formstyle.haserror}>{this.props.validateResultTransferTitle}</Text>) : (null)
        }

      </View>
    );
  }
}


export class RupiSelect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      picked: false,
      value: undefined,
      label: "",
      choosenIndex: 0,
      labelInitial: 0,
      labelTop: new Animated.Value(16),
      transalabel: 0.68,
      opaq: new Animated.Value(0.68),
    };
  }


  render() {
    let globalStyle = require('../../styles/styles');
    let { labelTop, opaq } = this.state;

    this.items = this.props.pickOptions.map((item) =>
      <Picker.Item key={item.id} label={item.label} value={item.value} />
    );

    return (
      <View style={[{ borderBottomColor: "white", borderBottomWidth: 1, height: 68 }, formstyle.blockheight, this.props.blockStyle]}>

        <View>

          <Icon name="arrow-down" color="#71648E" size={12} style={{ position: "absolute", top: 18, right: 18 }}></Icon>
          <Animated.Text style={[formstyle.label,
          // this.state.haserror?formstyle.haserror:"",
          this.props.validateHasErrorB || this.props.validateHasErrorACCT || this.props.validateHasErrorMonth || this.props.validateHasErrorDay || this.props.validateHasErrorYear || this.props.validateHasErrorISource || this.props.validateHasErrorState || this.props.validateHasErrorR || this.props.validateHasErrorHour ? formstyle.haserror : "",
          this.state.picked ? { top: labelTop, opacity: opaq } : { top: 16 }
          ]}>
            {this.props.labelText}
          </Animated.Text>

          <RupiText
            style={[{ position: "absolute", left: 0, bottom: 16, fontSize: 18 }, globalStyle.f500]}
            text={this.state.value !== null ? this.state.label : this.props.initialLabel ? this.props.initialLabel : "Select Option"}
          ></RupiText>

          <Picker
            mode='dialogs'
            // prompt="asdasd"
            onValueChange={(itemValue, itemPosition) =>
              this.setState({ value: itemValue, choosenIndex: itemPosition },
                this.setFocus.bind(this, true),
                this.props.onValueChange(itemValue),
                this.items.filter(obj => {
                  if (obj.props.value == itemValue) {
                    this.setState({
                      label: obj.props.label
                    })
                  }
                })

              )}
            selectedValue={this.state.value}
            style={[{ padding: 0, margin: 0, height: 50, opacity: this.state.picked ? 0 : 0, backgroundColor: "transparent", marginLeft: -9 },
            globalStyle.bold,
            formstyle.inputPlaceholder,
            this.state.touched ? formstyle.inputTouched : null,
            { color: "white" },
            ]}>
            <Picker.Item enabled={false} label={this.props.initialLabel ? this.props.initialLabel : "Select Option"} value={null} />
            {this.items}
          </Picker>


          {/* if errors happen (ERR block) */}
          {
            this.props.validateReqB == 'bName' && this.props.validateHasErrorB ? (<Text style={formstyle.haserror}>{this.props.validateResultB}</Text>) : (null)
          }
          {
            this.props.validateReqACCT == 'accT' && this.props.validateHasErrorACCT ? (<Text style={formstyle.haserror}>{this.props.validateResultACCT}</Text>) : (null)
          }
        </View>

      </View>
    );
  }

  setFocus(picked) {
    this.setState({ picked });
    Animated.parallel([
      Animated.timing(                  // Animate over time
        this.state.labelTop,            // The animated value to drive
        {
          toValue: -20,                   // Animate to value top 0
          duration: 300,              // Make it take a while
          // easing: Easing.ease(), // easing funktions
        }
      ),
      Animated.timing(
        this.state.opaq,
        {
          toValue: 1,
          duration: 100,
          // easing: Easing.ease(),
        }
      )
    ]).start();
  }
}


const formstyle = StyleSheet.create({
  blockheight: {
    display: "flex",
    marginBottom: 20,
    position: "relative",
    minHeight: 68,
    paddingTop: 20,
    overflow: "hidden",
    justifyContent: 'flex-end'
  },
  label: {
    fontFamily: "Apercu_Regular",
    color: "white",
    lineHeight: 17,
    fontSize: 14,
    opacity: 0.68,
    position: "absolute",
    top: 26,
    left: 0
  },
  labelTouched: {
    opacity: 1,
    top: 0
  },
  inputPlaceholder: {
    fontSize: 18,
    padding: 0,
    fontFamily: "Apercu Medium",
    color: "white",
    borderBottomColor: "white",
    borderBottomWidth: 1
  },
  inputTouched: {
    color: '#FFBD00',
    borderBottomColor: "#FFBD00",
    borderBottomWidth: 2
  },
  old: {
    color: "white"
  },
  haserror: {
    color: "#FF4949",
    fontFamily: "Apercu Light",
    marginTop: 3
  }
})
