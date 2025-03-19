/** @jsxImportSource nativewind */
import React from "react";
import { View } from "react-native";
import {
  ShoppeSvg,
  LazadaSvg,
  HnMSvg,
  FaveSvg,
  UniqloSvg,
  NutcSvg,
  AmazonSvg,
  SvgProps,
} from "@repo/ui";

type Brand = {
  id: string;
  name: string;
  icon: (props: SvgProps) => React.ReactNode;
  backgroundColor: string;
};

const brands: Brand[] = [
  {
    id: "shopee",
    name: "Shopee",
    icon: (props) => <ShoppeSvg {...props} />,
    backgroundColor: "#EE4E2C",
  },
  {
    id: "lazada",
    name: "Lazada",
    icon: (props) => <LazadaSvg {...props} />,
    backgroundColor: "#0F146E",
  },
  {
    id: "hnm",
    name: "H&M",
    icon: (props) => <HnMSvg {...props} />,
    backgroundColor: "#CC0000",
  },
  {
    id: "fave",
    name: "Fave",
    icon: (props) => <FaveSvg {...props} />,
    backgroundColor: "#DE206A",
  },
  {
    id: "uniqlo",
    name: "Uniqlo",
    icon: (props) => <UniqloSvg {...props} />,
    backgroundColor: "#FFFFFF",
  },
  {
    id: "amazon",
    name: "Amazon",
    icon: (props) => <AmazonSvg {...props} />,
    backgroundColor: "#FFFFFF",
  },
  {
    id: "ntuc",
    name: "NTUC",
    icon: (props) => <NutcSvg {...props} />,
    backgroundColor: "#003D7A",
  },
];

interface BrandGridProps {}

const BrandCard = ({
  brand,
  className,
}: {
  brand: Brand;
  className?: string;
}) => {
  return (
    <View
      style={{ backgroundColor: brand.backgroundColor }}
      className={`flex items-center justify-center rounded-2xl ${className}`}
    >
      {brand.icon({})}
    </View>
  );
};

export function BrandGrid({}: BrandGridProps) {
  return (
    <View className="h-[50%] gap-3">
      <View className="flex flex-row flex-[2] gap-3">
        <View className="flex-[3] gap-3">
          <BrandCard className="flex-[1.25]" brand={brands[0]} />
          <View className="flex flex-row flex-1 gap-4">
            <BrandCard className="flex-1 aspect-square" brand={brands[3]} />
            <BrandCard className="flex-1 aspect-square" brand={brands[3]} />
          </View>
        </View>
        <View className="flex-[2] gap-3">
          <BrandCard className="flex-[2]" brand={brands[1]} />
          <BrandCard className="flex-[1]" brand={brands[4]} />
        </View>
      </View>
      <View className="flex flex-row flex-[1] gap-3">
        <BrandCard className="flex-[1]" brand={brands[5]} />
        <BrandCard className="flex-[1]" brand={brands[5]} />
      </View>
    </View>
  );
}
