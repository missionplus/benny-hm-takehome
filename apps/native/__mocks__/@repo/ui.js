import React from 'react';
import { Text, View, Pressable } from 'react-native';

// Mock Button component
export const Button = ({ text, onClick, rightIcon, ...props }) => (
  <Pressable testID="button" onPress={onClick} {...props}>
    <Text>{text}</Text>
    {rightIcon}
  </Pressable>
);

// Mock Typography components
export const Typography = ({ children, ...props }) => (
  <Text testID="typography" {...props}>{children}</Text>
);

export const Header = ({ children, ...props }) => (
  <Text testID="header" {...props}>{children}</Text>
);

export const Body = ({ children, ...props }) => (
  <Text testID="body" {...props}>{children}</Text>
);

export const Label = ({ children, ...props }) => (
  <Text testID="label" {...props}>{children}</Text>
);

export const Title = ({ children, ...props }) => (
  <Text testID="title" {...props}>{children}</Text>
);

export const SubTitle = ({ children, ...props }) => (
  <Text testID="subtitle" {...props}>{children}</Text>
);
