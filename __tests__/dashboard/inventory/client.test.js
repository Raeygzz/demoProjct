import 'react-native';
import React from 'react';
import Client from '../../../src/screens/dashboard/inventory/client';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<Client />).toJSON();
  expect(tree).toMatchSnapshot();
});
