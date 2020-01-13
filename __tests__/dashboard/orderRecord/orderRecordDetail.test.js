import 'react-native';
import React from 'react';
import OrderRecordDetails from '../../../src/screens/dashboard/orderRecord/orderRecordDetail';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<OrderRecordDetails />).toJSON();
  expect(tree).toMatchSnapshot();
});
