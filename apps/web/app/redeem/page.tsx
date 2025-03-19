"use client";

import {
  Button,
  FlightSvg,
  GiftSvg,
  Header,
  Label,
  PassportSvg,
  SubTitle,
  SvgProps,
  Title,
} from "@repo/ui";
import { HEY_AI_LINK } from "@repo/utils";

export default function RedeemPage() {
  const options = [
    {
      title: "Transfer miles",
      description: "25 Airline and Hotel Partners, No Fees, 1:1 Transfer Ratio",
      tag: "Best for Business & First Class",
      icon: (props: SvgProps) => <FlightSvg {...props} />,
    },
    {
      title: "Fly and Claim",
      description:
        "Upload your flight ticket, and get reimbursed within 5 days.",
      tag: "Best for Economy",
      icon: (props: SvgProps) => <PassportSvg {...props} />,
    },
    {
      title: "Not flying soon",
      description: "You can always redeem Gift Cards with your Max Miles.",
      tag: "Best for Starters",
      icon: (props: SvgProps) => <GiftSvg {...props} />,
    },
  ];

  return (
    <div className="flex h-screen flex-col bg-[#0F063E] w-full md:w-auto text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center mb-12">
          <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
            2
          </div>
          <div className="flex-1 h-0.5 bg-purple-600/30" />
        </div>

        <Header
          className="text-4xl md:text-5xl font-bold mb-4"
          textAlign="right"
        >
          Redeem your trip
        </Header>

        <div className="space-y-6 mt-12">
          {options.map((option) => (
            <div
              key={option.title}
              className="bg-gradient-to-r from-[#a32eff1f] to-[#5046c51f] rounded-xl p-6 flex items-center space-x-6"
            >
              <div className="flex items-center justify-center flex-1 w-16 h-16">
                {option.icon({})}
              </div>
              <div className="flex flex-[4] flex-col ml-3">
                <Title textAlign="start">{option.title}</Title>
                <SubTitle textAlign="start" className="mt-1">
                  {option.description}
                </SubTitle>
                <Label textAlign="start" color="accent" className="mt-2">
                  {option.tag}
                </Label>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex mt-auto pb-8 justify-end px-4">
        <Button
          variant="primary"
          size="md"
          text={"Get started"}
          onClick={() => {
            window.open(HEY_AI_LINK, "_blank");
          }}
        />
      </div>
    </div>
  );
}
