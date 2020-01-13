import 'react-native';
import React from 'react';
import ClientDetails from '../../../src/screens/dashboard/inventory/clientDetail';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<ClientDetails />);
});
