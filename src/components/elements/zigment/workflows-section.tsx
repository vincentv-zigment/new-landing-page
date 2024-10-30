"use client";

import { useRef } from "react";
import Link from "next/link";

// gsap
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

// lib
import { cn } from "@/lib/utils";

// types
import { ActionBtnType } from "@/types";

// shadcn components
import { buttonVariants } from "@/components/ui/button";

// components
import Title1 from "@/components/shared/title/title1";
import ServiceCard4 from "../service/card/service-card4";
import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const services = [
  {
    title: "End-user Experience",
    sub_title: "AI agents’ behavior trained with your business personality and brand voice",
    image: "/path/to/end-user-experience-image.jpg"
  },
  {
    title: "Realtime Dashboard",
    sub_title: "View every interaction or the macro metrics. Track and control every conversation",
    image: "/path/to/realtime-dashboard-image.jpg"
  },
  {
    title: "Integrations",
    sub_title: "The platform is already integrated with most of the popular CRMs and marketing platforms",
    image: "/path/to/integrations-image.jpg"
  },
  {
    title: "Human Supervision",
    sub_title: "Every deployment with Zigment is monitored and supervised by our supervision team",
    image: "/path/to/human-supervision-image.jpg"
  }
];
const WorkflowsSection = ( ) => {


  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="sec_space1">
      <div className="container" ref={containerRef}>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-[auto_660px] gap-[30px] md:gap-[50px] 2xl:gap-[195px]">
          <div>
            <div className="mb-[25px] md:mb-[51px]">
              <h2 className="sec_title2 has_fade_anim">{`AI platform built for  custom(er) workflows `}</h2>
            </div>
            <div className="max-w-[520px]">
              <p className="has_fade_anim">{`Every business operates differently! Zigment platform is built with customization in mind. This is `}<strong>Service as a Software!</strong> </p>
            </div>
            <div>
              <Accordion
                type="single"
                collapsible
                className="w-full mt-[43px] border-t border-border has_fade_anim"
                defaultValue="item-2"
              >
                {services.map((item, i) => (
                  <AccordionItem
                    key={`accordion_item-${i}`}
                    value={`item-${i + 1}`}
                    className="border-b border-border overflow-hidden"
                  >
                    <AccordionTrigger className="shadow-none text-lg font-medium leading-[1.44] text-primary pt-[16px] pb-[14px] font-primary hover:no-underline">
                      {i + 1}. {item.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-lg leading-[1.44] text-secondary pt-1 pb-[23px] lg:pb-7">
                      {item.sub_title}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
          <div className="relative pt-0 md:pt-[50px] max-w-[500px] bg-gray-100 rounded-xl mx-auto">
            <Image alt="" width={500} height={500} className="w-full h-auto object-contain" src={`/assets/imgs/zigment-landing-page/workflow-section/mock5.png`}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowsSection;
