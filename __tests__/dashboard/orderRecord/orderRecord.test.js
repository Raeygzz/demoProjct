import React from 'react';
import 'react-native';

import OrderRecords from '../../../src/screens/dashboard/orderRecord/orderRecord';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';


import Enzyme from 'enzyme';
import { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });


const navigation = {
  navigate: jest.fn()
}


describe('<OrderRecords />', () => {
  
  it('renders correctly', () => {
    const tree = renderer.create(<OrderRecords />).toJSON();
    expect(tree).toMatchSnapshot();
  });


  it('renders View, ScrollView, StyleSheet, TextInput, BaseGradient, FalseHeader, OrderList & Icon components using (enzyme)expect,find,exists and (jest)toEqual,toBeTruthy', () => {
    const wrapper = shallow(<OrderRecords />);
    expect(wrapper.find('View').exists()).toEqual(true);
    expect(wrapper.find('ScrollView')).toBeTruthy();
    expect(wrapper.find('StyleSheet')).toBeTruthy();
    expect(wrapper.find('globalStyle')).toBeDefined();
    expect(wrapper.find('TextInput').exists()).toEqual(true);
    expect(wrapper.find('BaseGradient').exists()).toEqual(true);
    expect(wrapper.find('FalseHeader').exists()).toEqual(true);
    expect(wrapper.find('OrderList').exists()).toEqual(true);
    expect(wrapper.find('Icon').exists()).toEqual(true);
  });


  it('test state and state value using (enzyme)shallow,state,expect,instance & (jest)toBeTruthy,toBeDefined,toBe', () => {
    const wrapper = shallow(<OrderRecords />);
    expect(wrapper.state()).toBeTruthy();
    expect(wrapper.state()).toBeDefined();
    expect(wrapper.state('sellSubmission')).toBe(false);
    expect(wrapper.instance().state.sellSubmission).toBe(false);
  })


  it('calls the addOrderRecordsHandler, orderRecordsDetailsHandler & orderRecordDetailsHandlerDelete methods & test onPress functionality along with tests this.props.navigation.navigate using (enzyme)shallow,instance,find,first,props,expect,exists, (React)forceUpdate, (jest)jest.spyOn,toHaveLength,toHaveBeenCalledWith', () => {
    const wrapper = shallow(<OrderRecords navigation={navigation} />);
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance, 'addOrderRecordsHandler');
    const spy1 = jest.spyOn(instance, 'orderRecordsDetailsHandler');
    const spy2 = jest.spyOn(instance, 'orderRecordDetailsHandlerDelete');

    instance.forceUpdate();
    wrapper.find('FalseHeader').first().props().onIconPressed();
    wrapper.find('OrderList').first().props().onItemPressed();
    wrapper.find('OrderList').first().props().onIconPressed();

    expect(wrapper.exists());
    expect(spy.mock.calls).toHaveLength(1);
    expect(navigation.navigate).toHaveBeenCalledWith("AddOrderRecord");
    expect(spy1.mock.calls).toHaveLength(1);
    expect(navigation.navigate).toHaveBeenCalledWith("OrderRecordDetails");
    expect(spy2.mock.calls).toHaveLength(1);
  });

})
