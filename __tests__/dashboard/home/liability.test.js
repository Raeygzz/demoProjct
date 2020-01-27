import React from 'react';
import 'react-native';

import Liability from '../../../src/screens/dashboard/home/liability';
import RupiText from '../../../src/components/layouts/RupiText';
import globalStyle from '../../../src/components/styles/styles';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';


import Enzyme from 'enzyme';
import { shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });


describe('<Liability', () => {

  it('renders correctly', () => {
    const tree = renderer.create(<Liability />).toJSON();
    expect(tree).toMatchSnapshot();
  });


  it('renders View, Modal, TouchableOpacity, ScrollView, RupiText, BaseGradient, Icon, ProductLiability & ClientLiability components using (enzyme)shallow,expect,find,exists (jest)toEqual,toBeDefined,toBeTruthy,', () => {
    const wrapper = shallow(<Liability />);
    expect(wrapper.find('View').exists()).toEqual(true);
    expect(wrapper.find('Modal')).toBeDefined();
    expect(wrapper.find('TouchableOpacity').exists()).toEqual(true);
    expect(wrapper.find('ScrollView')).toBeTruthy();
    expect(wrapper.find('RupiText').exists()).toEqual(true);
    expect(wrapper.find('BaseGradient').exists()).toEqual(true);
    expect(wrapper.find('Icon').exists()).toEqual(true);
    expect(wrapper.find('ClientLiability')).toBeTruthy();
    expect(wrapper.find('ProductLiability')).toBeDefined();
  });


  it('test state and state value using (enzyme)shallow,state,instance,expect & (jest)toEqual,toBeTruthy,toBeDefined,toBe', () => {
    const wrapper = shallow(<Liability />);
    expect(wrapper.state()).toBeTruthy();
    expect(wrapper.state()).toBeDefined();
    expect(wrapper.state('productLiability')).toBe(true);
    expect(wrapper.state().clientLiability).toEqual(false);
    expect(wrapper.instance().state.modalVisible).toEqual(true);
  })


  it('test the changes in boolean value of clientLiability & productLiability using (enzyme)shallow,expect,state,setState,instance & (jest)toEqual,toBe', () => {
    const wrapper = shallow(<Liability />);
    expect(wrapper.length).toEqual(1);
    expect(wrapper.state('productLiability')).toBe(true);
    wrapper.setState({ productLiability: false, clientLiability: true });
    expect(wrapper.state().clientLiability).toEqual(true);
    expect(wrapper.instance().state.productLiability).toEqual(false);
  });


  it('renders the RupiText text using (enzyme)shallow,expect,contains & (jest)toEqual', () => {
    const wrapper = shallow(<Liability />);
    expect(wrapper.length).toEqual(1);
    expect(wrapper.contains(<RupiText text="LIABILITIES" style={globalStyle.formHeading}></RupiText>)).toEqual(true);
  });


  it('renders the productLiability text using (enzyme)shallow,expect,state,contains & (jest)toEqual', () => {
    const wrapper = shallow(<Liability />);
    expect(wrapper.length).toEqual(1);
    expect(wrapper.contains(<RupiText text="productLiability" style={[{ color: wrapper.state().productLiability ? "#FFBD00" : "white", }, globalStyle.formGroupTitle, wrapper.state().productLiability ? globalStyle.bold : null]}></RupiText>)).toEqual(true);
  });


  it('renders the clientLiability text using (enzyme)shallow,expect,state,contains & (jest)toEqual', () => {
    const wrapper = shallow(<Liability />);
    expect(wrapper.length).toEqual(1);
    expect(wrapper.contains(<RupiText text="clientLiability" style={[{ color: wrapper.instance().state.clientLiability ? "#FFBD00" : "white", }, globalStyle.formGroupTitle, wrapper.state('clientLiability') ? globalStyle.bold : null]}></RupiText>)).toEqual(true);
  });

})
