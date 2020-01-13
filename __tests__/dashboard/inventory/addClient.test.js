import 'react-native';
import React from 'react';
import AddClient from '../../../src/screens/dashboard/inventory/addClient';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<AddClient />).toJSON();
  expect(tree).toMatchSnapshot();
});
