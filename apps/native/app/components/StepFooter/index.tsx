import React from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import { Button } from "@repo/ui";
import Entypo from "@expo/vector-icons/Entypo";

export interface StepFooterProps {
  currentStep?: number;
  totalSteps?: number;
  onNext?: () => void;
  onSeeHowItWorks?: () => void;
  hideIcon?: boolean;
  buttonLabel: string;
}

export function StepFooter(props: StepFooterProps & BottomTabBarProps) {
  const {
    currentStep = 0,
    totalSteps = 3,
    onNext,
    hideIcon,
    buttonLabel,
  } = props;

  return (
    <View className="flex flex-row items-center justify-between py-4">
      <View className="w-screen absolute top-0 h-[1px] bg-white/30" />
      <View className="flex flex-1 flex-row items-center justify-between px-4">
        <View className="flex flex-row items-center justify-center space-x-4">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <View
              key={index}
              className={`h-2 w-2 rounded-full mr-2 ${
                index + 1 === currentStep ? "bg-white w-5" : "bg-white/30"
              }`}
            />
          ))}
        </View>

        <Button
          variant="primary"
          size="md"
          text={buttonLabel}
          onClick={onNext}
          rightIcon={
            !hideIcon ? (
              <Entypo name="chevron-right" size={18} color="white" />
            ) : undefined
          }
        />
      </View>
    </View>
  );
}

export default StepFooter;
