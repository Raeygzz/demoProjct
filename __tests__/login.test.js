import React from 'react';
import 'react-native';

import Login from '../src/screens/login/login';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';


import Enzyme from 'enzyme';
import { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });


const navigation = {
  navigate: jest.fn()
}


describe('<Login />', () => {

  it('renders correctly using (jest)renderer, (jest)expect & (jest)toMatchSnapshot', () => {
    const tree = renderer.create(<Login />).toJSON();
    expect(tree).toMatchSnapshot();
  });


  it('renders globalStyle, Text, View, ScrollView, NormalButton & RupiTextInput components using (enzyme)expect, (enzyme)find, (enzyme)exists and (jest)toEqual', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('ScrollView')).toBeTruthy();
    expect(wrapper.find('ScrollView')).toBeDefined();
    expect(wrapper.find('globalStyle')).toBeTruthy();
    expect(wrapper.find('globalStyle')).toBeDefined();
    expect(wrapper.find('Text').exists()).toEqual(true);
    expect(wrapper.find('View').exists()).toEqual(true);
    expect(wrapper.find('NormalButton').exists()).toEqual(true);
    expect(wrapper.find('RupiTextInput').exists()).toEqual(true);
  });


  it('calls the loginSubmit method & test onPress functionalityalong with tests this.props.navigation.navigate using (enzyme)shallow, (enzyme)instance, (enzyme)find, (enzyme)first,props,expect,exists, (React)forceUpdate, (jest)jest.spyOn, (jest)toHaveLength', () => {
    const wrapper = shallow(<Login navigation={navigation} />);
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance, 'loginSubmit');

    instance.forceUpdate();
    wrapper.find('NormalButton').first().props().onItemPressed();

    expect(wrapper.exists());
    expect(spy.mock.calls).toHaveLength(1);
    expect(navigation.navigate).toHaveBeenCalledWith("DashboardBar");
  });


  it('test navigation title using (enzyme)shallow,expect,exists & (jest)toBe,toBeTruthy', () => {
    const wrapper = shallow(<Login />);
    expect(Login.navigationOptions.title).toBe('Login');
    expect(wrapper.find('navigationOptions')).toBeTruthy();
  })

})
