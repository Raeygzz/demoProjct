import React, { Component } from 'react';
import { View, Text, TouchableNativeFeedback, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import RupiCheckbox from '../Forms/RupiCheckbox';

import Icon from "react-native-vector-icons/SimpleLineIcons";


export class OrderList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShow: true,
    };
  }

  render() {

    return (
      <TouchableNativeFeedback useForeground={true} onPress={this.props.onItemPressed} style={{ width: "100%" }}>
        <LinearGradient
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 0.63 }}
          locations={[0, 0.3914696, 1]}
          colors={[
            '#FFE37D',
            '#FFBD00',
            '#FFCA2D'
          ]}
          useAngle={true}
          angle={180}
          style={[{ height: 350, borderRadius: 4 }, this.props.style]}
        >

          <View style={{ padding: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "stretch" }}>
            <View style={{ flex: 5 }}>
              <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" }}>
                <View style={{ flex: 1 }}>
                  <Image
                    style={{ width: "85%", height: 80 }}
                    source={require('../../assets/images/vaseline.jpg')}
                  />
                </View>

                <View style={{ flex: 5 }}>
                  <Text>
                    <Text style={{ fontWeight: "700" }}>Product Name:   </Text>
                    {this.props.productName}
                  </Text>

                  <Text>
                    <Text style={{ fontWeight: "700" }}>Qntity: </Text>
                    {this.props.productQuantity} * <Text style={{ fontWeight: "700" }}>Amnt: </Text>{this.props.productPerAmount}  =
                  </Text>

                  <Text>
                    <Text style={{ fontWeight: "700" }}>Total: </Text>
                    {this.props.productTotalAmount}
                  </Text>

                  <Text style={{ color: "#fff", backgroundColor: this.props.productMarketScaleColor, textAlign: "center" }}>
                    {this.props.productMarketScale}
                  </Text>

                  <Text>
                    <Text style={{ fontWeight: "700" }}>Date Of Sell:  </Text>
                    {this.props.productDateOfSell}
                  </Text>

                  <Text>
                    <Text style={{ fontWeight: "700" }}>Client Name: </Text>
                    {this.props.clientName}
                  </Text>

                  <Text>
                    <Text style={{ fontWeight: "700" }}>Client Address: </Text>
                    {this.props.clientAddress}
                  </Text>

                  <Text>
                    <Text style={{ fontWeight: "700" }}>Client Phone: </Text>
                    {this.props.clientPhone}
                  </Text>

                  <Text>
                    <Text style={{ fontWeight: "700" }}>Client Note: </Text>
                    {this.props.clientNote}
                  </Text>

                  <Text style={{ color: "#fff", backgroundColor: this.props.clientActiveScaleColor, textAlign: "center" }}>
                    {this.props.clientActiveScale}
                  </Text>

                  <View style={{ height: 10 }}>
                    <Text>&nbsp;</Text>
                  </View>

                  <Text style={{ fontWeight: "700" }}>Pending Activity: </Text>
                  <Text style={{ flexShrink: 1 }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.props.pendingActivity}
                  </Text>

                </View>
              </View>
            </View>

            <View style={{ flexDirection: "column", justifyContent: "space-around", alignItems: "center", marginLeft: 15 }}>
              <RupiCheckbox
                onValueChange={(sellSubmission) => this.setState({ sellSubmission })}
              ></RupiCheckbox>

              <TouchableOpacity onPress={this.props.onIconPressed}>
                <Icon name={this.props.iconName} color={this.props.iconColor} size={this.props.iconSize} style={{ height: this.iconHeight, width: this.props.iconWidth, marginRight: 5 }} />
              </TouchableOpacity>
            </View>
          </View>

        </LinearGradient>
      </TouchableNativeFeedback>
    );
  }
}
