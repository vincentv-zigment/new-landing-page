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
    title: "End-user Experience",
    short_description:
      "AI agents’ behavior trained with your business personality",
    image: `/assets/imgs/zigment-landing-page/workflow-section/icon-s-29.png`,
  },
  {
    title: "Realtime Analytics Dashboard",
    short_description: "View every interaction or the macro metrics",
    image: `/assets/imgs/zigment-landing-page/workflow-section/icon-s-30.png`,
  },
  {
    title: "Integrations",
    short_description:
      "The platform is already integrated with most of the popular CRMs",
    image: `/assets/imgs/zigment-landing-page/workflow-section/icon-s-31.png`,
  },
  {
    title: "Human Supervision",
    short_description:
      "Every deployment with Zigment is monitored and supervised by our supervision team",
    image: `/assets/imgs/zigment-landing-page/workflow-section/icon-s-32.png`,
  },
];

const WorkflowsSection = () => {
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
    <section className="sec_space1">
      <div className="container" ref={containerRef}>
        <div
          className="flex justify-between flex-col xl:flex-row gap-x-[20px] gap-y-[40px] bg-white"
          ref={pinArea}
        >
          <div className="w-full bg-white" ref={pinElement}>
            <div className={cn("text-center", `text-left`)}>
        <div>
          <span
            className={cn(
              "text-[12px] font-bold uppercase text-primary bg-[#EAFAF2] px-[16px] py-[8px] inline-block rounded-[10px] mb-[17px] has_fade_anim",
              ``
            )}
          >
            Workflows
          </span>
        </div>
              <Title1
                text={`AI platform built for  custom(er) workflows 
`}
                className={cn("max-w-[565px] mx-auto has_fade_anim", ``)}
              />
              <p
                className={cn(
                  "mt-[23px] lg:mt-[33px] max-w-[550px] mx-auto has_fade_anim",
                  ``
                )}
              >
                {`Every business operates differently! Zigment platform is built with customization in mind. `}
              </p>
              <p
                className={cn(
                  "mt-[23px] lg:mt-[33px] max-w-[550px] mx-auto has_fade_anim",
                  ``
                )}
              >
                {`You don’t have to force fit into what the other Saas platforms offer. We use the power of AI to adapt our platform tweaked to your sales workflows.`}
                <strong> This is Service as a Software!</strong>
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
          <div className="max-w-full xl:max-w-[700px] overflow-hidden bg-white">
            <div className="grid grid-cols-1 bg-white md:grid-cols-2   md:gap-y-[70px] -mx-[50px]">
              {contentArray.map((service) => (
                <div
                  key={service.title}
                  className="border-s border-border has_fade_anim bg-white  py-[25px] md:p-0"
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

export default WorkflowsSection;
