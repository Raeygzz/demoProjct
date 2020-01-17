import React from 'react';
import 'react-native';

import Home from '../../../src/screens/dashboard/home/home';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';


import Enzyme from 'enzyme';
import { shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });


const navigation = {
  navigate: jest.fn()
};


describe('<Home />', () => {

  it('renders correctly', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });


  it('test navigation title using (enzyme)shallow,expect,exists & (jest)toBe,toBeTruthy', () => {
    const wrapper = shallow(<Home />);
    expect(Home.navigationOptions.header).toBe(null);
    expect(wrapper.find('navigationOptions')).toBeTruthy();
  })


  it('test state and state value using (enzyme)shallow,state,instance,expect & (jest)toEqual,toBeTruthy,toBeDefined,toBe', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.state()).toBeTruthy();
    expect(wrapper.state()).toBeDefined();
    expect(wrapper.state('selectForShowingList')).toBe('');
    expect(wrapper.state('clientTableWidthArr')).toEqual([50, 100, 150, 200, 250, 300]);
    expect(wrapper.instance().state.productTableWidthArr).toEqual([50, 110, 120, 150, 120, 120]);
    expect(wrapper.state().tableHead).toEqual(["S.No.", "T.Estimate", "T.ScaledProduct", "T.Product", "T.Quantity", "T.Amount", "T.ActiveClient", "T.Client", "T.OrderReceive", "T.OrderReceiveAmount"]);
  })


  it('renders View, TextInput, StyleSheet, ScrollView, Dimension, FalseHeader, RupiSelect, Icon, Table, Row, LineChart & globalStyle components using (enzyme)expect, (enzyme)find, (enzyme)exists and (jest)toEqual', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find('View').exists()).toEqual(true);
    expect(wrapper.find('TextInput').exists()).toEqual(true);
    expect(wrapper.find('StyleSheet')).toBeDefined();
    expect(wrapper.find('ScrollView')).toBeTruthy();
    expect(wrapper.find('Dimension')).toBeDefined();
    expect(wrapper.find('FalseHeader').exists()).toEqual(true);
    expect(wrapper.find('RupiSelect').exists()).toEqual(true);
    expect(wrapper.find('Icon').exists()).toEqual(true);
    expect(wrapper.find('Table').exists()).toEqual(true);
    expect(wrapper.find('Row').exists()).toEqual(true);
    expect(wrapper.find('LineChart').exists()).toEqual(true);
    expect(wrapper.find('globalStyle')).toBeDefined();
  });


  it('calls the liabilityHandler method & test onPress functionality along with tests this.props.navigation.navigate using (enzyme)shallow, (enzyme)instance, (enzyme)find, (enzyme)first,props,expect,exists, (React)forceUpdate, (jest)jest.spyOn, (jest)toHaveLength', () => {
    const wrapper = shallow(<Home navigation={navigation} />);
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance, 'liabilityHandler');

    instance.forceUpdate();
    wrapper.find('FalseHeader').first().props().onIconPressed();

    expect(wrapper.exists());
    expect(spy.mock.calls).toHaveLength(1);
    expect(navigation.navigate).toHaveBeenCalledWith("Liability");
  });

}) 
