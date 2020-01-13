import 'react-native';
import React from 'react';
import OrderRecords from '../../../src/screens/dashboard/orderRecord/orderRecord';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<OrderRecords />).toJSON();
  expect(tree).toMatchSnapshot();
});
