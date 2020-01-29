import React from 'react';
import { Text, View } from 'react-native';

import OrderRecordDetails from '../../../src/screens/dashboard/orderRecord/orderRecordDetail';
import globalStyle from '../../../src/components/styles/styles';
import RupiText from '../../../src/components/layouts/RupiText';
import productImage from '../../../src/components/assets/images/vaseline.jpg';
// import RupiTextInput, { RupiSelect } from '../../../src/components/layouts/Forms/RupiTextInput';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';


import Enzyme from 'enzyme';
import { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });


const navigation = {
  navigate: jest.fn()
}


describe('<OrderRecordDetails />', () => {

  it('renders correctly', () => {
    const tree = renderer.create(<OrderRecordDetails />).toJSON();
    expect(tree).toMatchSnapshot();
  });


  it('renders View, Text, Modal, ScrollView, StyleSheet, Image, BaseGradient, NormalButton, InvertButton, RupiTextInput, RupiSelect, RupiText, globalStyle, productQuantityArr, productMarketScaleArr, clientActiveScaleArr, monthArr, daysArr & yearsArr components using (enzyme)expect, (enzyme)find, (enzyme)exists and (jest)toEqual', () => {
    const wrapper = shallow(<OrderRecordDetails />);
    expect(wrapper.find('View').exists()).toEqual(true);
    expect(wrapper.find('Text').exists()).toEqual(true);
    expect(wrapper.find('Modal')).toBeDefined();
    expect(wrapper.find('ScrollView')).toBeTruthy();
    expect(wrapper.find('StyleSheet')).toBeTruthy();
    expect(wrapper.find('Image').exists()).toEqual(true);
    expect(wrapper.find('BaseGradient').exists()).toEqual(true);
    expect(wrapper.find('NormalButton').exists()).toEqual(true);
    expect(wrapper.find('InvertButton').exists()).toEqual(true);
    expect(wrapper.find('RupiTextInput').exists()).toEqual(true);
    expect(wrapper.find('RupiSelect').exists()).toEqual(true);
    expect(wrapper.find('RupiText').exists()).toEqual(true);
    expect(wrapper.find('globalStyle')).toBeDefined();
    expect(wrapper.find('productQuantityArr')).toBeDefined();
    expect(wrapper.find('productMarketScaleArr')).toBeTruthy();
    expect(wrapper.find('clientActiveScaleArr')).toBeDefined();
    expect(wrapper.find('monthArr')).toBeTruthy();
    expect(wrapper.find('daysArr')).toBeDefined();
    expect(wrapper.find('yearsArr')).toBeTruthy();
  });


  it('test state and state value using (enzyme)shallow,state,expect & (jest)toEqual,toBeTruthy,toBeDefined,toBe', () => {
    const wrapper = shallow(<OrderRecordDetails />);
    expect(wrapper.state()).toBeTruthy();
    expect(wrapper.state()).toBeDefined();
    expect(wrapper.state('productImageUpload')).toBe('');
    expect(wrapper.state().productName).toBe('');
    expect(wrapper.state().modalVisible).toBe(true);
    expect(wrapper.state('productNameOptions')).toEqual([
      { id: 1, value: "Cleansing Milk", label: "Cleasing Milk" },
      { id: 2, value: "Ayur Herbal", label: "Ayur Herbal" },
      { id: 3, value: "Suns Cream", label: "Suns Cream" },
      { id: 4, value: "Vaseline Cream", label: "Vaseline Cream" },
      { id: 5, value: "Lip Care", label: "Lip Care" },
    ]);
    expect(wrapper.state('productMarketScaleOptions')).toEqual([
      { id: 1, value: "High", label: "High" },
      { id: 2, value: "Moderate", label: "Moderate" },
      { id: 3, value: "Low", label: "Low" },
      { id: 4, value: "Fresher", label: "Fresher" },
      { id: 5, value: "Deprecated", label: "Deprecated" },
    ]);
    expect(wrapper.state('clientNameOptions')).toEqual([
      { id: 1, value: "Regan Timsina", label: "Regan Timsina" },
      { id: 2, value: "Romisha Timsina", label: "Romisha Timsina" },
      { id: 3, value: "Gyanu ojha", label: "Gyanu ojha" },
      { id: 4, value: "Keshav Gautam", label: "Keshav Gautam" },
      { id: 5, value: "Pukar Ojha", label: "Pukar Ojha" },
    ]);
    expect(wrapper.instance().state.productTotalAmount).toBe('1000');
  })


  it('renders the RupiText text using (enzyme)shallow,expect,contains & (jest)toEqual', () => {
    const wrapper = shallow(<OrderRecordDetails />);
    expect(wrapper.length).toEqual(1);
    expect(wrapper.contains(<RupiText text="ORDER RECORD DETAILS" style={globalStyle.formHeading}></RupiText>)).toEqual(true);
    expect(wrapper.contains(<Text style={{ opacity: 0.48, lineHeight: 17, fontFamily: "Apercu Bold", fontSize: 14, color: "#fff", fontWeight: "700" }}>PRODUCT</Text>)).toEqual(true);
    expect(wrapper.contains(<Text style={{ opacity: 0.48, lineHeight: 17, fontFamily: "Apercu Bold", fontSize: 14, color: "#fff", fontWeight: "700" }}>DATE OF SELL</Text>)).toEqual(true);
    expect(wrapper.contains(<Text style={{ opacity: 0.48, lineHeight: 17, fontFamily: "Apercu Bold", fontSize: 14, color: "#fff", fontWeight: "700" }}>CLIENT</Text>)).toEqual(true);
  });


  it('renders the View in design using (enzyme)shallow,expect,contains & (jest)toEqual', () => {
    const wrapper = shallow(<OrderRecordDetails />);
    expect(wrapper.length).toEqual(1);
    expect(wrapper.contains(
      <View style={{ height: 12 }}>
        <Text>&nbsp;</Text>
      </View>)).toEqual(true);
  });


  // it('renders the RupiTextInput Component in design using (enzyme)shallow,expect,contains & (jest)toEqual', () => {
  //   const wrapper = shallow(<OrderRecordDetails />);
  //   expect(wrapper.length).toEqual(1);
  //   expect(wrapper.contains(      
  //     <RupiTextInput
  //       labelText="Product Per Amount"
  //       editableStatus={false}
  //       onChangeText={(productPerAmount) => wrapper.setState({ productPerAmount })}
  //       value={wrapper.state().productPerAmount}
  //     ></RupiTextInput>
  //   )).toEqual(true);
  // });


  it('test image component using (enzyme)shallow,expect,find & (jest)toBeTruthy,toEqual', () => {
    const wrapper = shallow(<OrderRecordDetails />);
    expect(wrapper).toBeTruthy();
    expect(wrapper.find('Image').length).toEqual(1);
    expect(wrapper.find("Image").prop("source")).toEqual(productImage);
  })


  it('calls the orderRecordDetailsSubmit, cancelOrderRecordDetailsHandler methods & test onPress functionality along with tests this.props.navigation.navigate using (enzyme)shallow,instance,find,first,props,expect,exists, (React)forceUpdate, (jest)jest.spyOn,toHaveLength,toHaveBeenCalledWith', () => {
    const wrapper = shallow(<OrderRecordDetails navigation={navigation} />);
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance, 'orderRecordDetailsSubmit');
    const spy1 = jest.spyOn(instance, 'cancelOrderRecordDetailsHandler');

    instance.forceUpdate();
    wrapper.find('NormalButton').first().props().onItemPressed();
    wrapper.find('InvertButton').first().props().onInvertItemPressed();

    expect(wrapper.exists());
    expect(spy.mock.calls).toHaveLength(1);
    expect(navigation.navigate).toHaveBeenCalledWith("OrderRecord");
    expect(spy1.mock.calls).toHaveLength(1);
    expect(navigation.navigate).toHaveBeenCalledWith("OrderRecord");
  });

})
