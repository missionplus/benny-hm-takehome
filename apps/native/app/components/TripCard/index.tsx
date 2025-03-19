/** @jsxImportSource nativewind */
import React from "react";
import { View, Pressable, PressableProps } from "react-native";
import { Body, Title, SubTitle, Label } from "@repo/ui";
import { LinearGradient } from "expo-linear-gradient";

export interface TripCardProps extends PressableProps {
  title: string;
  description: string;
  tagline: string;
  icon?: React.ReactNode;
  className?: string;
}

export function TripCard({
  title,
  description,
  tagline,
  icon,
  className = "",
  ...props
}: TripCardProps) {
  return (
    <Pressable
      className={`rounded-2xl overflow-hidden mb-5 ${className}`}
      {...props}
    >
      <LinearGradient
        colors={["rgba(163, 46, 255, 0.12)", "rgba(80, 70, 197, 0.12)"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <View className="p-4 flex-row items-center">
          <View className="flex-1 items-center justify-center">{icon}</View>
          <View className="flex-[4] ml-3">
            <Title textAlign="start">{title}</Title>
            <SubTitle textAlign="start" className="mt-1">
              {description}
            </SubTitle>
            <Label textAlign="start" color="accent" className="mt-2">
              {tagline}
            </Label>
          </View>
        </View>
      </LinearGradient>
    </Pressable>
  );
}

export default TripCard;
