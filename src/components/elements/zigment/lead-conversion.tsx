"use client";

import { useRef } from "react";
import Link from "next/link";

// gsap
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasPinContent from "@/lib/animation/hasPinContent";

// lib
import { cn } from "@/lib/utils";

// types
import { ActionBtnType } from "@/types";

// shadcn components
import { buttonVariants } from "@/components/ui/button";

// components
import TitleSection2 from "@/components/shared/title-section/title-section2";
import ServiceCard6 from "../service/card/service-card6";
import Title1 from "@/components/shared/title/title1";

const contentArray = [
  {
    title: "Digital Marketing Campaigns",
    short_description:
      "Engage customers directly from your digital campaigns like CTWA or Lead Form Ads",
    image: `/assets/imgs/zigment-landing-page/workflow-section/icon-s-32.png`,
  },
  {
    title: "Website Chat",
    short_description:
      "Convert your website visitors into customers with Zigment AI Agents for your website",
    image: `/assets/imgs/zigment-landing-page/workflow-section/icon-s-29.png`,
  },
  {
    title: "Email / SMS / Whatsapp",
    short_description: "Let Zigment be the first point of contact for all your touchpoints engaging with new prospects and driving a sales motion",
    image: `/assets/imgs/zigment-landing-page/workflow-section/icon-s-30.png`,
  },
  {
    title: "Social Media",
    short_description:
      "Zigment engages with your audience who are trying to engage with you via comments and DM",
    image: `/assets/imgs/zigment-landing-page/workflow-section/icon-s-31.png`,
  },
  
];

const LeadConversion = () => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const pinElement = useRef<HTMLDivElement>(null!);
  const pinArea = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  useGSAP(
    () => {
      hasPinContent(pinElement.current, pinArea.current, "top 100px", 1024);
    },
    { scope: containerRef }
  );

  return (
    <section className="sec_space1 ">
      <div className="container bg-white" ref={containerRef}>
        <div
          className="flex justify-between flex-col xl:flex-row gap-x-[20px] gap-y-[40px]"
          ref={pinArea}
        >
          <div className="w-full" ref={pinElement}>
            <div className={cn("text-center", `text-left`)}>
        <div>
          <span
            className={cn(
              "text-[12px] font-bold uppercase text-primary bg-[#EAFAF2] px-[16px] py-[8px] inline-block rounded-[10px] mb-[17px] has_fade_anim",
              ``
            )}
          >
            Lead Conversion
          </span>
        </div>
              <Title1
                text={`Zigment for lead conversion`}
                className={cn("max-w-[565px] mx-auto has_fade_anim", ``)}
              />
              <p
                className={cn(
                  "mt-[23px] lg:mt-[33px] max-w-[550px] mx-auto has_fade_anim",
                  ``
                )}
              >
                {`Increase your lead conversion by almost 35% with Zigment AI agents trained as SDRs. Resulting in lower CAC across most of your marketing channels.
 `}
              </p>
 
            </div>
            <div className="py-[25px] lg:py-[45px] has_fade_anim text-left">
              <Link
                href={"#"}
                className={cn(buttonVariants({ variant: "primary2" }))}
              >
                Explore workflows
              </Link>
            </div>
          </div>
          <div className="max-w-full xl:max-w-[700px] overflow-hidden bg-white" style={{background:'white'}}>
            <div className="grid grid-cols-1 md:grid-cols-2  md:gap-y-[70px] -mx-[50px] bg-white" style={{background:'white'}}>
              {contentArray.map((service) => (
                <div
                  key={service.title}
                  className="border-s border-border has_fade_anim bg-white py-[25px] md:p-0"
                >
                  <ServiceCard6
                    service={{
                      data: {
                        ...service,
                      },
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadConversion;
