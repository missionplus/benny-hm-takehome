import React, { ReactNode } from "react";
import { View } from "react-native";

export interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export const Layout = ({ children, className = "" }: LayoutProps) => {
  return (
    <View className={`flex flex-1 bg-secondary px-6 ${className}`}>
      {children}
    </View>
  );
};

export default Layout;
