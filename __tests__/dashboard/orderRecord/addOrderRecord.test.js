import 'react-native';
import React from 'react';
import AddOrderRecord from '../../../src/screens/dashboard/orderRecord/addOrderRecord';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<AddOrderRecord />);
});
