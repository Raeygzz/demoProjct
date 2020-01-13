import 'react-native';
import React from 'react';
import Liability from '../../../src/screens/dashboard/home/liability';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<Liability />).toJSON();
  expect(tree).toMatchSnapshot();
});
