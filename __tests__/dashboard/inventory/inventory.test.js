import 'react-native';
import React from 'react';
import Inventory from '../../../src/screens/dashboard/inventory/inventory';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<Inventory />).toJSON();
  expect(tree).toMatchSnapshot();
});
