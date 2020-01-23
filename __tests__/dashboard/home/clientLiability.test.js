import React from 'react';
import 'react-native';

import ClientLiability from '../../../src/screens/dashboard/home/clientLiability';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';


import Enzyme from 'enzyme';
import { shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });


const navigation = {
  navigate: jest.fn()
}


describe('<ClientLiability />', () => {

  it('renders correctly', () => {
    const tree = renderer.create(<ClientLiability />).toJSON();
    expect(tree).toMatchSnapshot();
  });


  it('renders View, Text, StyleSheet, ScrollView, RupiSelect, NormalButton, InvertButton, RupiTextInput & clientIssueArr components using (enzyme)shallow,expect,find,exists (jest)toEqual,toBeDefined,toBeTruthy,', () => {
    const wrapper = shallow(<ClientLiability />);
    expect(wrapper.find('View').exists()).toEqual(true);
    expect(wrapper.find('Text').exists()).toEqual(true);
    expect(wrapper.find('StyleSheet')).toBeDefined();
    expect(wrapper.find('ScrollView')).toBeTruthy();
    expect(wrapper.find('RupiSelect').exists()).toEqual(true);
    expect(wrapper.find('InvertButton').exists()).toEqual(true);
    expect(wrapper.find('NormalButton').exists()).toEqual(true);
    expect(wrapper.find('RupiTextInput').exists()).toEqual(true);
    expect(wrapper.find('clientIssueArr').exists());
    expect(wrapper.find('clientIssueArr')).toBeTruthy();
  });


  it('test state and state value using (enzyme)shallow,state,expect & (jest)toEqual,toBeTruthy,toBeDefined,toBe', () => {
    const wrapper = shallow(<ClientLiability />);
    expect(wrapper.state()).toBeTruthy();
    expect(wrapper.state()).toBeDefined();
    expect(wrapper.state('clientIssue')).toBe('');
    expect(wrapper.state('clientIssueOptions')).toEqual([
      { id: 1, value: "Money Pending To Receive", label: "Money Pending To Receive" },
      { id: 2, value: "Money Pending To Pay", label: "Money Pending To Pay" },
      { id: 3, value: "Last Deal With Client", label: "Last Deal With Client" },
      { id: 4, value: "Client Not Applicable For Scheme", label: "Client Not Applicable For Scheme" },
      { id: 5, value: "Client Payment Delay More Than 3 Months", label: "Client Payment Delay More Than 3 Months" },
    ]);
    expect(wrapper.state('clientNameOptions')).toEqual([
      { id: 1, value: 'Regan Timsina', label: 'Regan Timsina' },
      { id: 2, value: 'Gyanu Ojha', label: 'Gyanu Ojha' },
      { id: 3, value: 'Keshav Gautam', label: 'Keshav Gautam' },
      { id: 4, value: 'Romisha Timsina', label: 'Romisha Timsina' },
      { id: 5, value: 'Pukar Ojha', label: 'Pukar Ojha' }
    ]);
  })

  it('calls the clientLiabilityHandler method & test onPress functionality along with tests this.props.navigation.navigate using (enzyme)shallow,instance,find,first,props,expect,exists, (React)forceUpdate, (jest)jest.spyOn,toHaveLength,toHaveBeenCalledWith', () => {
    const wrapper = shallow(<ClientLiability navigation={navigation} />);
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance, 'clientLiabilityHandler');

    instance.forceUpdate();
    wrapper.find('NormalButton').first().props().onItemPressed();

    expect(wrapper.exists());
    expect(spy.mock.calls).toHaveLength(1);
    expect(navigation.navigate).toHaveBeenCalledWith("Home");
  });


  it('calls the clientLiabilityCancel method & test onPress functionality along with tests this.props.navigation.navigate using (enzyme)shallow,instance,find,first,props,expect,exists, (React)forceUpdate, (jest)jest.spyOn,toHaveLength,toHaveBeenCalledWith', () => {
    const wrapper = shallow(<ClientLiability navigation={navigation} />);
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance, 'clientLiabilityCancel');

    instance.forceUpdate();
    wrapper.find('InvertButton').first().props().onInvertItemPressed();

    expect(wrapper.exists());
    expect(spy.mock.calls).toHaveLength(1);
    expect(navigation.navigate).toHaveBeenCalledWith("Home");
  });

})
