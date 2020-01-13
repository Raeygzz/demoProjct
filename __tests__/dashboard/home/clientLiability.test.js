import 'react-native';
import React from 'react';
import ClientLiability from '../../../src/screens/dashboard/home/clientLiability';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<ClientLiability />);
});