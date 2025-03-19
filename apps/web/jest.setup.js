// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Mock the window.open function globally
global.open = jest.fn();

// Mock NativeWind to prevent styling issues in tests
jest.mock('nativewind', () => ({
  styled: () => (component) => component,
}));

// Mock React Native Web components
jest.mock('react-native-web', () => {
  const React = require('react');
  const ReactNativeWeb = jest.requireActual('react-native-web');

  ReactNativeWeb.TouchableOpacity = ({ onPress, children, disabled, className, ...props }) => 
    React.createElement('button', { 
      onClick: onPress, 
      disabled, 
      'data-testid': props.accessibilityLabel || props['data-testid'],
      ...props 
    }, children);

  ReactNativeWeb.View = ({ children, className, ...props }) => 
    React.createElement('div', props, children);

  ReactNativeWeb.Text = ({ children, className, ...props }) => 
    React.createElement('span', props, children);

  return ReactNativeWeb;
});

// Mock SVG components
jest.mock('react-native-svg', () => {
  const React = require('react');
  return {
    Svg: (props) => React.createElement('svg', props),
    Path: (props) => React.createElement('path', props),
    Circle: (props) => React.createElement('circle', props),
    Rect: (props) => React.createElement('rect', props),
    G: (props) => React.createElement('g', props),
  };
});

// Mock class-variance-authority
jest.mock('class-variance-authority', () => ({
  cva: () => () => '',
}));
