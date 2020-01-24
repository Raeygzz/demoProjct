import React from 'react';
import 'react-native';

import Settings from '../../../src/screens/dashboard/settings/settings';
import userDemoImage from '../../../src/components/assets/images/demoUser.jpeg';
import RupiText from '../../../src/components/layouts/RupiText';
import globalStyle from '../../../src/components/styles/styles'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';


import Enzyme from 'enzyme';
import { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });


// const navigation = {
//   navigate: jest.fn()
// }


describe('<Settings />', () => {
  
  it('renders correctly', () => {
    const tree = renderer.create(<Settings />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders ImageBackground, TouchableOpacity, StyleSheet, globalStyle, TextInput, View, ScrollView, NormalButton, InvertButton, BaseGradient, FalseHeader, RupiCheckbox & RupiText components using (enzyme)expect, (enzyme)find, (enzyme)exists and (jest)toEqual', () => {
    const wrapper = shallow(<Settings />);
    expect(wrapper.find('View').exists()).toEqual(true);
    expect(wrapper.find('ImageBackground').exists()).toEqual(true);
    expect(wrapper.find('TouchableOpacity').exists()).toEqual(true);
    expect(wrapper.find('StyleSheet')).toBeTruthy();
    expect(wrapper.find('ScrollView')).toBeTruthy();
    expect(wrapper.find('TextInput').exists()).toEqual(true);
    expect(wrapper.find('globalStyle')).toBeDefined();
    expect(wrapper.find('RupiText').exists()).toEqual(true);
    expect(wrapper.find('BaseGradient').exists()).toEqual(true);
    expect(wrapper.find('FalseHeader').exists()).toEqual(true);
    expect(wrapper.find('RupiCheckbox').exists()).toEqual(true);
    expect(wrapper.find('NormalButton').exists()).toEqual(true);
    expect(wrapper.find('InvertButton').exists()).toEqual(true);
  });


  it('test state and state value using (enzyme)shallow,state,expect & (jest)toBeTruthy,toBeDefined,toBe', () => {
    const wrapper = shallow(<Settings />);
    expect(wrapper.state()).toBeTruthy();
    expect(wrapper.state()).toBeDefined();
    expect(wrapper.state('userProfileImage')).toBe('');
    expect(wrapper.instance().state.userFullName).toBe('');
  })

  it('test image component using (enzyme)shallow,expect,find & (jest)toBeTruthy,toEqual', () => {
    const wrapper = shallow(<Settings />);
    expect(wrapper).toBeTruthy();
    expect(wrapper.find('ImageBackground').length).toEqual(1);
    expect(wrapper.find("ImageBackground").prop("source")).toEqual(userDemoImage);
  })


  // it('renders the RupiText text User Name using (enzyme)shallow,expect,contains & (jest)toEqual', () => {
  //   const wrapper = shallow(<Settings />);
  //   expect(wrapper.length).toEqual(1);
  //   expect(wrapper.contains(<RupiText text="Regan Timsina" style={{fontSize: 36, lineHeight: 45, fontFamily: "Apercu Bold", color: "#223741", flex: 1 }}></RupiText>)).toEqual(true);
  // });


  // it('renders the title with enzyme', () => {   //commented on nov-29 enzyme utility(PASSED), as because expect property is invalid in chai framework
  //   const wrapper = shallow(<Settings title="Regan Timsina" />);
  //   expect(wrapper.find("RupiText").render().text()).toEqual("Regan Timsina");
  // });


  // it('renders the title with enzyme', () => {   //commented on nov-29 enzyme utility(PASSED), as because expect property is invalid in chai framework
  //   const wrapper = shallow(<Settings title="Regan Timsina" />);
  //   // expect(wrapper.text()).toEqual("Regan Timsina");
  //   expect(wrapper.children()).toEqual("Regan Timsina");
  // });


  // it('renders the RupiText text USER THEME using (enzyme)shallow,expect,contains & (jest)toEqual', () => {
  //   const wrapper = shallow(<Settings />);
  //   expect(wrapper.length).toEqual(1);
  //   expect(wrapper.contains(<RupiText text="SELECT THEME" style={{ fontSize: 16, lineHeight: 29, marginVertical: 10, color: "#223741", opacity: 0.7 }} ></RupiText>)).toEqual(true);
  // });


  // it('renders the RupiText text USER PERSONAL NOTE using (enzyme)shallow,expect,contains & (jest)toEqual', () => {
  //   const wrapper = shallow(<Settings />);
  //   expect(wrapper.length).toEqual(1);
  //   expect(wrapper.contains(<RupiText text="USER PERSONAL NOTE" style={[globalStyle.formHeadingNoMarBot, { marginBottom: 20 }]}></RupiText>)).toEqual(true);
  // });

})
