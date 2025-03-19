"use client";

import { ArrowIcon, Body, Button, Header, LogoSvg } from "@repo/ui";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const videoSource =
  "https://s3-figma-videos-production-sig.figma.com/video/1334411248645761351/TEAM/2d33/9f81/-b8c5-4218-8b30-f75c91504b62?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=q4WRlDzhikSkFr3fpa0eqlm4yYl9kch7ZeLx4VeHnkHb1Q3mex51JL7h27KDkUGOQeYkTrXC04whgElF7mw3QFBu4yym7p-~mWZfQlhU~05P7KGCsZLOWokJeAewSTobRWMvkB3QdxBPdwJzWC1gztbaGLZVtsiMPVG0hh8ctqKuQSwPsPehuR2uFLpBb-F-ulcABUyv2GWKzl-rlTNBlD-lBt5H-qhC6JSxcR~JRo5x0Q3cSTPViRx9ZXaAJMVyjYAdJhWK~MMtyD1gRRw5fHfkpOaKfsJruyUq7zqvTEPydHnVJ-bYfyromAxNJGwMnagj4gH20adQIUCE-VQfSw__";

export default function Web() {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Auto-play the video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Video playback error:", error);
      });
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#0F063E]">
      <div className="flex-1 flex flex-col">
        <div className="flex justify-center items-center pt-12 pb-6">
          <LogoSvg width={148} height={24} />
        </div>

        <div className="flex-1 flex flex-col justify-center items-center">
          <div className="container mx-auto px-4">
            <div className="w-full max-w-xs mx-auto sm:max-w-sm md:max-w-md mb-8">
              <div className="w-full relative pb-[98%]">
                <video
                  ref={videoRef}
                  className="absolute inset-0 w-full h-full rounded-lg object-cover"
                  src={videoSource}
                  loop
                  muted
                  playsInline
                />
              </div>
            </div>

            <div className="flex flex-col text-center mb-12 mt-8">
              <Header className="text-4xl md:text-5xl font-bold mb-4">{`Shop your way to a `}</Header>
              <Header
                className="text-4xl md:text-5xl font-bold mb-4"
                color="primary"
              >
                Dream Vacation
              </Header>
              <Body className="text-lg">
                Turn your expenses into dream vacations by earning miles every
                time you shop
              </Body>
            </div>
          </div>
        </div>
      </div>

      <div className="flex mt-auto pb-8 flex justify-end px-4">
        <Button
          variant="primary"
          size="md"
          text={"See how it works"}
          onClick={() => router.push("/how-it-works")}
          rightIcon={<ArrowIcon width={16} height={16} className="ml-2" />}
        />
      </div>
    </div>
  );
}
