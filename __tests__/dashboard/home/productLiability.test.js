import React from 'react';
import 'react-native';

import ProductLiability from '../../../src/screens/dashboard/home/productLiability';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';


import Enzyme from 'enzyme';
import { shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });


const navigation = {
  navigate: jest.fn()
}


describe('<ProductLiability />', () => {

  it('renders correctly', () => {
    const tree = renderer.create(<ProductLiability />).toJSON();
    expect(tree).toMatchSnapshot();
  });


  it('renders View, Text, StyleSheet, ScrollView, RupiSelect, NormalButton, InvertButton, RupiTextInput & clientIssueArr components using (enzyme)shallow,expect,find,exists (jest)toEqual,toBeDefined,toBeTruthy,', () => {
    const wrapper = shallow(<ProductLiability />);
    expect(wrapper.find('View').exists()).toEqual(true);
    expect(wrapper.find('Text').exists()).toEqual(true);
    expect(wrapper.find('StyleSheet')).toBeDefined();
    expect(wrapper.find('ScrollView')).toBeTruthy();
    expect(wrapper.find('RupiSelect').exists()).toEqual(true);
    expect(wrapper.find('InvertButton').exists()).toEqual(true);
    expect(wrapper.find('NormalButton').exists()).toEqual(true);
    expect(wrapper.find('RupiTextInput').exists()).toEqual(true);
    expect(wrapper.find('productDefectsArr').exists());
    expect(wrapper.find('productDefectsArr')).toBeTruthy();
  });


  it('test state and state value using (enzyme)shallow,state,expect & (jest)toEqual,toBeTruthy,toBeDefined,toBe', () => {
    const wrapper = shallow(<ProductLiability />);
    expect(wrapper.state()).toBeTruthy();
    expect(wrapper.state()).toBeDefined();
    expect(wrapper.state('productName')).toBe('');
    expect(wrapper.state().productDefect).toBe('');
    expect(wrapper.state('productDefectOptions')).toEqual([
      { id: 1, value: "Money Pending To Receive", label: "Money Pending To Receive" },
      { id: 2, value: "Money Pending To Pay", label: "Money Pending To Pay" },
      { id: 3, value: "Product Quantity To Demand", label: "Product Quantity In Demand" },
      { id: 4, value: "Product Defect", label: "Product Defect" },
      { id: 5, value: "Product Scheme", label: "Product Scheme" },
    ]);
    expect(wrapper.state('productNameOptions')).toEqual([
      { id: 1, value: 'ABC', label: 'ABC' },
      { id: 2, value: 'DEF', label: 'DEF' },
      { id: 3, value: 'GHI', label: 'GHI' },
      { id: 4, value: 'JKL', label: 'JKL' },
      { id: 5, value: 'MNO', label: 'MNO' }
    ]);
    expect(wrapper.instance().state.productDefectDescription).toBe('');
  })

  it('calls the productLiabilityHandler method & test onPress functionality along with tests this.props.navigation.navigate using (enzyme)shallow,instance,find,first,props,expect,exists, (React)forceUpdate, (jest)jest.spyOn,toHaveLength,toHaveBeenCalledWith', () => {
    const wrapper = shallow(<ProductLiability navigation={navigation} />);
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance, 'productLiabilityHandler');

    instance.forceUpdate();
    wrapper.find('NormalButton').first().props().onItemPressed();

    expect(wrapper.exists());
    expect(spy.mock.calls).toHaveLength(1);
    expect(navigation.navigate).toHaveBeenCalledWith("Home");
  });


  it('calls the productLiabilityCancel method & test onPress functionality along with tests this.props.navigation.navigate using (enzyme)shallow,instance,find,first,props,expect,exists, (React)forceUpdate, (jest)jest.spyOn,toHaveLength,toHaveBeenCalledWith', () => {
    const wrapper = shallow(<ProductLiability navigation={navigation} />);
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance, 'productLiabilityCancel');

    instance.forceUpdate();
    wrapper.find('InvertButton').first().props().onInvertItemPressed();

    expect(wrapper.exists());
    expect(spy.mock.calls).toHaveLength(1);
    expect(navigation.navigate).toHaveBeenCalledWith("Home");
  });

})
