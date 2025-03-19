import React from 'react';
import { Text } from 'react-native';

// Mock Entypo icon component
const Entypo = ({ name, size, color }) => (
  <Text testID={`entypo-icon-${name}`} style={{ fontSize: size, color }}>
    {name}
  </Text>
);

export default Entypo;
