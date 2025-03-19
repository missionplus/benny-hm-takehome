import "../global.css";
import { Tabs, useRouter } from "expo-router";
import { StepFooter } from "./components";
import { useCallback, useMemo, useState } from "react";
import { Linking } from "react-native";
import { HEY_AI_LINK } from "@repo/utils";

const TabsNavigator = () => {
  const [step, setStep] = useState(1);
  const router = useRouter();

  const handleNext = useCallback(() => {
    if (step < 3) {
      setStep((prevStep) => prevStep + 1);
    }
    if (step === 1) {
      router.push("/step1");
    } else if (step === 2) {
      router.push("/step2");
    } else if (step === 3) {
      Linking.openURL(HEY_AI_LINK);
    }
  }, [step]);

  const buttonLabel = useMemo(() => {
    switch (step) {
      case 1:
        return "See how it works";
      case 2:
        return "";
      case 3:
        return "Get started";
      default:
        return "";
    }
  }, [step]);

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => (
        <StepFooter
          buttonLabel={buttonLabel}
          hideIcon={step === 3}
          currentStep={step}
          totalSteps={3}
          onNext={handleNext}
          {...props}
        />
      )}
    >
      <Tabs.Screen name="landing" />
      <Tabs.Screen name="step1" />
      <Tabs.Screen name="step2" />
    </Tabs>
  );
};

export default TabsNavigator;
