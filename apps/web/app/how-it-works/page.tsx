"use client";

import {
  Body,
  Button,
  Header,
  SvgProps,
  ShoppeSvg,
  LazadaSvg,
  HnMSvg,
  FaveSvg,
  UniqloSvg,
  AmazonSvg,
  NutcSvg,
  Label,
  ArrowIcon,
} from "@repo/ui";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Brand = {
  id: string;
  name: string;
  icon: (props: SvgProps) => React.ReactNode;
  backgroundColor: string;
};

type BrandType = {
  id: string;
  name: string;
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

const brandTypes: BrandType[] = [
  {
    id: "shop_online",
    name: "Shop online",
  },
  {
    id: "book_travel",
    name: "Book travel",
  },
  {
    id: "order_food",
    name: "Order food",
  },
  {
    id: "book_hotels",
    name: "Book hotels",
  },
  {
    id: "more",
    name: "More",
  },
];

export default function HowItWorksPage() {
  const router = useRouter();
  const [selectedType, setSelectedType] = useState<string>("shop_online");

  const BrandCard = ({
    brand,
    className,
  }: {
    brand: Brand;
    className?: string;
  }) => {
    return (
      <div
        style={{ backgroundColor: brand.backgroundColor }}
        className={`flex items-center justify-center rounded-2xl ${className}`}
      >
        {brand.icon({})}
      </div>
    );
  };

  const BrandTypeItem = ({ item }: { item: BrandType }) => (
    <div className="my-6" onClick={() => setSelectedType(item.id)}>
      <div
        className={`px-4 py-2 mx-2 rounded-full ${
          selectedType === item.id
            ? "bg-primary shadow-md shadow-primary/60"
            : "bg-[#B377FF33] shadow-md shadow-[#B377FF]/0"
        }`}
      >
        <Label
          className={`${selectedType === item.id ? "font-[500]" : "font-[400]"}`}
          color={selectedType === item.id ? "white" : "muted"}
          textAlign="center"
        >
          {item.name}
        </Label>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen flex-col bg-[#0F063E] w-full md:w-auto">
      <div className="container flex-1 mx-auto px-4 py-12">
        <div className="flex items-center mb-8">
          <Body className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
            1
          </Body>
          <div className="flex-1 h-0.5 bg-purple-600/30" />
        </div>

        <Header className="text-4xl md:text-5xl font-bold mb-4">
          Shop your favourite brands, earn miles
        </Header>

        <div className="my-2">
          <div className="flex overflow-x-auto hide-scrollbar">
            {brandTypes.map((item, index) => (
              <div key={`${item.id}-${index}`} className="mr-3 flex-shrink-0">
                <BrandTypeItem item={item} />
              </div>
            ))}
          </div>
          <style jsx global>{`
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
            .hide-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}</style>
        </div>

        <div className="h-[60%] flex flex-col gap-4">
          <div className="h-3/4 flex flex-row gap-4">
            <div className="w-2/3 flex flex-col gap-4">
              <div className="h-3/5">
                <BrandCard className="h-full w-full" brand={brands[0]} />
              </div>
              <div className="h-2/5 flex flex-row gap-4">
                <BrandCard className="w-1/2 h-full" brand={brands[3]} />
                <BrandCard className="w-1/2 h-full" brand={brands[3]} />
              </div>
            </div>
            <div className="w-1/3 flex flex-col gap-4">
              <div className="h-2/3">
                <BrandCard className="h-full w-full" brand={brands[1]} />
              </div>
              <div className="h-1/3">
                <BrandCard className="h-full w-full" brand={brands[4]} />
              </div>
            </div>
          </div>
          <div className="h-1/4 flex flex-row gap-4">
            <BrandCard className="w-1/2 h-full" brand={brands[5]} />
            <BrandCard className="w-1/2 h-full" brand={brands[6]} />
          </div>
        </div>
      </div>
      <div className="flex mt-auto pb-8 justify-end px-4">
        <Button
          variant="primary"
          size="md"
          text={""}
          rightIcon={<ArrowIcon width={20} height={20} />}
          onClick={() => router.push("/redeem")}
        />
      </div>
    </div>
  );
}
