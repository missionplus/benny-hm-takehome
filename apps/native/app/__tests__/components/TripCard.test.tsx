/** @jsxImportSource nativewind */
/// <reference types="jest" />
import React from 'react';
import { View } from 'react-native';
import { render, screen, fireEvent } from '@testing-library/react-native';
import { TripCard } from '../../components/TripCard';

describe('TripCard Component', () => {
  const mockProps = {
    title: 'Test Title',
    description: 'Test Description',
    tagline: 'Test Tagline',
    onPress: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders TripCard with all required props', () => {
    render(<TripCard {...mockProps} />);
    
    expect(screen.getByText('Test Title')).toBeTruthy();
    expect(screen.getByText('Test Description')).toBeTruthy();
    expect(screen.getByText('Test Tagline')).toBeTruthy();
  });

  test('calls onPress when card is pressed', () => {
    render(<TripCard {...mockProps} />);
    
    const pressable = screen.getByText('Test Title').parent.parent;
    fireEvent.press(pressable);
    
    expect(mockProps.onPress).toHaveBeenCalledTimes(1);
  });

  test('renders with custom className', () => {
    render(<TripCard {...mockProps} className="custom-class" />);
    
    // In a real environment with proper NativeWind setup, we could test for styles
    // but in this mock environment we're just testing rendering
    expect(screen.getByText('Test Title')).toBeTruthy();
  });

  test('renders with icon when provided', () => {
    const mockIcon = <TestIcon testID="test-icon" />;
    
    render(<TripCard {...mockProps} icon={mockIcon} />);
    
    // Verify the icon is rendered
    expect(screen.getByTestId('test-icon')).toBeTruthy();
  });
});

// Simple component for testing icon rendering
function TestIcon({ testID }: { testID: string }) {
  return <View testID={testID} />;
}
