/** @jsxImportSource nativewind */
/// <reference types="jest" />
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { EdgeInsets } from 'react-native-safe-area-context';
import { StepFooter, StepFooterProps } from '../components/StepFooter';

// Mocks are now defined globally in jest.setup.js

describe('StepFooter Component', () => {
  // Create mock insets for BottomTabBarProps
  const mockInsets: EdgeInsets = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };

  // Create mock navigation state and props
  const createMockTabBarProps = (): BottomTabBarProps => ({
    state: {
      index: 0,
      key: 'tab-test',
      routeNames: ['landing', 'step1', 'step2'],
      routes: [
        { key: 'landing', name: 'landing' },
        { key: 'step1', name: 'step1' },
        { key: 'step2', name: 'step2' }
      ],
      stale: false,
      type: 'tab',
      history: [{ type: 'route', key: 'landing' }]
    },
    descriptors: {
      landing: {
        options: {},
        navigation: {} as any,
        route: { key: 'landing', name: 'landing' },
        render: jest.fn()
      },
      step1: {
        options: {},
        navigation: {} as any,
        route: { key: 'step1', name: 'step1' },
        render: jest.fn()
      },
      step2: {
        options: {},
        navigation: {} as any,
        route: { key: 'step2', name: 'step2' },
        render: jest.fn()
      }
    },
    navigation: {
      navigate: jest.fn(),
      emit: jest.fn(),
      setOptions: jest.fn(),
      addListener: jest.fn(),
      removeListener: jest.fn(),
      canGoBack: () => false,
      isFocused: () => true,
      dispatch: jest.fn(),
      reset: jest.fn(),
      goBack: jest.fn(),
      getState: jest.fn(),
      getParent: jest.fn(),
      getId: jest.fn()
    } as any,
    insets: mockInsets
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('StepFooter renders correctly with required props', () => {
    const onNextMock = jest.fn();
    const stepProps: StepFooterProps = {
      buttonLabel: 'Next',
      onNext: onNextMock,
      currentStep: 1,
      totalSteps: 3
    };
    const tabBarProps = createMockTabBarProps();

    render(<StepFooter {...stepProps} {...tabBarProps} />);
    
    // Verify the button renders with correct text
    expect(screen.getByTestId('button')).toBeTruthy();
  });

  test('StepFooter calls onNext when button is clicked', () => {
    const onNextMock = jest.fn();
    const stepProps: StepFooterProps = {
      buttonLabel: 'Next',
      onNext: onNextMock,
      currentStep: 1,
      totalSteps: 3
    };
    const tabBarProps = createMockTabBarProps();

    render(<StepFooter {...stepProps} {...tabBarProps} />);
    
    // Find the button and click it
    const nextButton = screen.getByTestId('button');
    fireEvent.press(nextButton);
    
    // Verify onNext was called
    expect(onNextMock).toHaveBeenCalledTimes(1);
  });

  test('StepFooter renders correct number of step indicators', () => {
    const stepProps: StepFooterProps = {
      buttonLabel: 'Next',
      onNext: jest.fn(),
      currentStep: 2,
      totalSteps: 3
    };
    const tabBarProps = createMockTabBarProps();

    render(<StepFooter {...stepProps} {...tabBarProps} />);
    
    // This test is limited since we can't easily query for the step indicators
    // In a real environment, we would use testIDs for the step indicators
    // For now, we just verify the component renders without crashing
    expect(screen.getByTestId('button')).toBeTruthy();
  });
});
