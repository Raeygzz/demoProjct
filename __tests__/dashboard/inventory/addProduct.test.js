import 'react-native';
import React from 'react';
import AddProduct from '../../../src/screens/dashboard/inventory/addProduct';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<AddProduct />).toJSON();
  expect(tree).toMatchSnapshot();
});
