/** @jsxImportSource nativewind */
import React from "react";
import { View, Text } from "react-native";

function StepStart({ step }: { step: number }) {
  return (
    <View className="w-full flex flex-row items-center justify-start py-7 relative">
      <View className="flex items-center justify-center relative z-10">
        <View className="h-9 w-9 rounded-full flex items-center justify-center bg-primary shadow-md shadow-primary/80">
          <Text className="text-white font-bold text-lg">{step}</Text>
        </View>
      </View>
      <View className="h-[2px] bg-primary absolute top-[38px] left-[0px] right-[-20px]" />
    </View>
  );
}

function StepMiddle({ step }: { step: number }) {
  return (
    <View className="w-full flex flex-row items-center justify-center py-7 relative">
      <View className="h-[2px] bg-primary absolute top-[38px] left-[-20px] right-[-20px]" />
      <View className="flex items-center justify-center relative z-10">
        <View className="h-8 w-8 rounded-full flex items-center justify-center bg-primary shadow-md shadow-primary/80">
          <Text className="text-white font-bold text-lg">{step}</Text>
        </View>
      </View>
    </View>
  );
}

function StepEnd({ step }: { step: number }) {
  return (
    <View className="w-full flex flex-row items-center justify-end py-7 relative">
      <View className="h-[2px] bg-primary absolute top-[38px] right-[0px] left-[-20px]" />
      <View className="flex items-center justify-center relative z-10">
        <View className="h-8 w-8 rounded-full flex items-center justify-center bg-primary shadow-md shadow-primary/80">
          <Text className="text-white font-bold text-lg">{step}</Text>
        </View>
      </View>
    </View>
  );
}

export function StepHeader({
  step = 1,
  total = 3,
}: {
  step: number;
  total: number;
}) {
  if (step === 1) {
    return <StepStart step={1} />;
  } else if (step < total) {
    return <StepMiddle step={step} />;
  } else {
    return <StepEnd step={total} />;
  }
}
