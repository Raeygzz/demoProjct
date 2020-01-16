import React from 'react';
import 'react-native';

import Signup from '../src/screens/signup/signup';
import RupiText from '../src/components/layouts/RupiText';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';


import Enzyme from 'enzyme';
import { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });


const navigation = {
  navigate: jest.fn()
}


describe('<Signup />', () => {

  it('renders correctly using (jest)renderer, (jest)expect & (jest)toMatchSnapshot', () => {
    const tree = renderer.create(<Signup />).toJSON();
    expect(tree).toMatchSnapshot();
  });


  it('renders the RupiText text using (enzyme)shallow, (enzyme)expect, (enzyme)contains & (jest)toEqual', () => {
    const wrapper = shallow(<Signup />);
    expect(wrapper.length).toEqual(1);
    expect(wrapper.contains(<RupiText text="Upload User Image" style={{ color: "yellow" }}></RupiText>)).toEqual(true);
  });


  it('renders TouchableOpacity, RupiText, globalStyle, Text, View, ScrollView, NormalButton & RupiTextInput components using (enzyme)expect, (enzyme)find, (enzyme)exists and (jest)toEqual', () => {
    const wrapper = shallow(<Signup />);
    expect(wrapper.find('ScrollView')).toBeTruthy();
    expect(wrapper.find('ScrollView')).toBeDefined();
    expect(wrapper.find('globalStyle')).toBeTruthy();
    expect(wrapper.find('globalStyle')).toBeDefined();
    expect(wrapper.find('Text').exists()).toEqual(true);
    expect(wrapper.find('View').exists()).toEqual(true);
    expect(wrapper.find('RupiText').exists()).toEqual(true);
    expect(wrapper.find('NormalButton').exists()).toEqual(true);
    expect(wrapper.find('RupiTextInput').exists()).toEqual(true);
    expect(wrapper.find('TouchableOpacity').exists()).toEqual(true);
  });


  it('calls the createAccountSubmit method & test onPress functionalityalong with tests this.props.navigation.navigate using (enzyme)shallow, (enzyme)instance, (enzyme)find, (enzyme)first,props,expect,exists, (React)forceUpdate, (jest)jest.spyOn, (jest)toHaveLength', () => {
    const wrapper = shallow(<Signup navigation={navigation} />);
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance, 'createAccountSubmit');

    instance.forceUpdate();
    wrapper.find('NormalButton').first().props().onItemPressed();

    expect(wrapper.exists());
    expect(spy.mock.calls).toHaveLength(1);
    expect(navigation.navigate).toHaveBeenCalledWith("DashboardBar");
  });


  it('test navigation title using (enzyme)shallow,expect,exists & (jest)toBe,toBeTruthy', () => {
    const wrapper = shallow(<Signup />);
    expect(Signup.navigationOptions.title).toBe('Create a new Account');
    expect(wrapper.find('navigationOptions')).toBeTruthy();
  })

})
