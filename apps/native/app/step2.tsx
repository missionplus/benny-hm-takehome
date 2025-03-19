import { View } from "react-native";
import { FlightSvg, GiftSvg, Header, Layout, PassportSvg } from "@repo/ui";
import { StepHeader, TripCard } from "./components";

export default function Step2() {
  return (
    <Layout>
      <StepHeader step={2} total={2} />
      <Header textAlign="right">Redeem your trip</Header>
      <View className="py-9">
        <TripCard
          title="Transfer miles"
          description="25 Airline and Hotel Partners, No Fees, 1:1 Transfer Ratio"
          tagline="Best for Business & First Class"
          icon={<FlightSvg />}
          onPress={() => console.log("Card pressed")}
        />
        <TripCard
          title="Fly and Claim"
          description="Upload your flight ticket, and get reimbursed within 5 days."
          tagline="Best for Economy"
          icon={<PassportSvg />}
          onPress={() => console.log("Card pressed")}
        />
        <TripCard
          title="Not flying soon"
          description="You can always redeem Gift Cards with your Max Miles."
          tagline="Best for Starters"
          icon={<GiftSvg />}
          onPress={() => console.log("Card pressed")}
        />
      </View>
    </Layout>
  );
}
