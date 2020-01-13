import 'react-native';
import React from 'react';
import ProductDetails from '../../../src/screens/dashboard/inventory/productDetail';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<ProductDetails />);
});
