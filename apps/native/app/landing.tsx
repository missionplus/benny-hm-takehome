import React from "react";
import { Body, Header, Layout, LogoSvg } from "@repo/ui";
import { View, Dimensions } from "react-native";
import { Video, ResizeMode } from "expo-av";

const { width } = Dimensions.get("window");
const VIDEO_WIDTH = width * 0.9;
const videoSource =
  "https://s3-figma-videos-production-sig.figma.com/video/1334411248645761351/TEAM/2d33/9f81/-b8c5-4218-8b30-f75c91504b62?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=q4WRlDzhikSkFr3fpa0eqlm4yYl9kch7ZeLx4VeHnkHb1Q3mex51JL7h27KDkUGOQeYkTrXC04whgElF7mw3QFBu4yym7p-~mWZfQlhU~05P7KGCsZLOWokJeAewSTobRWMvkB3QdxBPdwJzWC1gztbaGLZVtsiMPVG0hh8ctqKuQSwPsPehuR2uFLpBb-F-ulcABUyv2GWKzl-rlTNBlD-lBt5H-qhC6JSxcR~JRo5x0Q3cSTPViRx9ZXaAJMVyjYAdJhWK~MMtyD1gRRw5fHfkpOaKfsJruyUq7zqvTEPydHnVJ-bYfyromAxNJGwMnagj4gH20adQIUCE-VQfSw__";

export default function Landing() {
  return (
    <Layout>
      <View className="flex flex-1 items-center py-12">
        <LogoSvg />
        <View className="py-10">
          <Video
            source={{
              uri: videoSource,
            }}
            style={{ width: VIDEO_WIDTH, height: VIDEO_WIDTH - 20 }}
            resizeMode={ResizeMode.CONTAIN}
            shouldPlay
            isLooping
            useNativeControls={false}
            onError={(error) => {
              console.error("Video error:", JSON.stringify(error));
            }}
          />
        </View>
        <Header>Shop your way to a</Header>
        <Header color="primary">Dream Vacation</Header>
        <Body>
          Turn your expenses into dream vacations by earning miles every time
          you shop
        </Body>
      </View>
    </Layout>
  );
}
