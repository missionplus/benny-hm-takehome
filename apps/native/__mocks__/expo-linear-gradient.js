import React from 'react';
import { View } from 'react-native';

// Mock LinearGradient component
export const LinearGradient = ({ children, colors, ...props }) => (
  <View testID="linear-gradient" {...props}>
    {children}
  </View>
);
