import { View } from "react-native";
import { Header, Layout } from "@repo/ui";
import { BrandGrid, BrandTypeList, StepHeader } from "./components";

export default function Step1() {
  return (
    <Layout>
      <StepHeader step={1} total={3} />
      <Header textAlign="start">Shop your favourite brands, earn miles</Header>
      <View>
        <BrandTypeList defaultSelected="shop_online" />
      </View>
      <BrandGrid />
    </Layout>
  );
}
