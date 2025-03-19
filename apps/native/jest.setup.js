import '@testing-library/jest-native/extend-expect';

// Add global Jest type definitions
global.describe = describe;
global.it = it;
global.test = test;
global.expect = expect;
global.beforeEach = beforeEach;
global.afterEach = afterEach;
global.jest = jest;

// Mock expo-router
jest.mock('expo-router', () => {
  return {
    useRouter: () => ({
      push: jest.fn(),
      replace: jest.fn(),
      back: jest.fn(),
    }),
    useSegments: () => [''],
    usePathname: () => '',
    Link: 'Link',
    Tabs: ({ children }) => children,
    Stack: ({ children }) => children,
  };
});

// Mock expo-linear-gradient
jest.mock('expo-linear-gradient', () => {
  return {
    LinearGradient: ({ children }) => children,
  };
});

// Mock NativeWind
jest.mock('nativewind', () => {
  return {
    styled: (component) => component,
  };
});

// Mock the Platform module
jest.mock('react-native/Libraries/Utilities/Platform', () => ({
  OS: 'ios',
  select: jest.fn().mockImplementation((obj) => obj.ios),
}));

// Silence the warning: Animated: `useNativeDriver` is not supported
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// Mock modules will be defined in the __mocks__ directory
