import 'react-native';
import React from 'react';
import Product from '../../../src/screens/dashboard/inventory/product';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<Product />).toJSON();
  expect(tree).toMatchSnapshot();
});
