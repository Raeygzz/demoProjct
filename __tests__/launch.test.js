import React from 'react';
import 'react-native';

import LaunchScreen from '../src/screens/welcome/launch';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';


import sinon from 'sinon';


import Enzyme from 'enzyme';
import { shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });


import chai from "chai";
import { expect } from 'chai';
import chaiJestSnapshot from "chai-jest-snapshot";
chai.use(chaiJestSnapshot);


const navigation = {
  navigate: jest.fn()
};


describe('<Launch />', () => {

  it("renders correctly using chai-jest-snapshot", () => {
    const tree = renderer.create(<LaunchScreen />).toJSON();
    expect(tree).to.matchSnapshot();
  });


  it('renders Image, View, Text, NormalButton & TouchableOpacity components using (enzyme)shallow,find (chai)expect, to.have, lengthOf, length', () => {
    const wrapper = shallow(<LaunchScreen />);
    expect(wrapper.find('Image')).to.have.lengthOf(2);
    expect(wrapper.find('View')).to.have.lengthOf(8);
    expect(wrapper.find('Text')).to.have.lengthOf(1);
    expect(wrapper.find('NormalButton')).to.have.lengthOf(1);
    expect(wrapper.find('TouchableOpacity')).to.have.lengthOf(1);
  });


  it('calls the launchSubmit method & test onPress functionality along with tests this.props.navigation.navigate with enzyme, jest.spyOn & chai', () => {
    const wrapper = shallow(<LaunchScreen navigation={navigation} />);
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance, 'launchSubmit');

    instance.forceUpdate();
    wrapper.find('NormalButton').first().props().onItemPressed();

    expect(wrapper.exists());
    expect(spy.mock.calls).to.have.property('length', 1);
    expect(navigation.navigate.mock.calls[0][0]).to.include("Login");
  });


  it('calls the signupSubmit method & test onPress functionality along with tests this.props.navigation.navigate with enzyme, jest.spyOn & chai', () => {
    const wrapper = shallow(<LaunchScreen navigation={navigation} />);
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance, 'signupSubmit');

    instance.forceUpdate();
    wrapper.find('TouchableOpacity').first().props().onPress();

    expect(wrapper.exists());
    expect(spy.mock.calls).to.have.property('length', 1);
    expect(navigation.navigate.mock.calls[1][0]).to.include("Signup");
  });

})

