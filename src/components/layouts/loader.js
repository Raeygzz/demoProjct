import React, { Component } from 'react';
import { View, ActivityIndicator, Modal } from 'react-native';

import { withNavigation } from 'react-navigation';


export class RupiLoader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShow: this.props.loadingState,
    };
  }

  static getDerivedStateFromProps = (props, state) => {
    if (props.loadingState !== '' || props.loadingState !== undefined) {
      return {
        isShow: props.loadingState
      }
    }
    return null;
  }


  render() {
    return (
      <Modal animationType="fade" transparent={true} visible={this.state.isShow} style={{ background: "red" }}>

        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.68)" }}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>

      </Modal>
    );
  }
}

export default withNavigation(RupiLoader);
