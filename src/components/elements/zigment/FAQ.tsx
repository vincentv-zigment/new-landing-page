"use client";

import { useRef } from "react";

// gsap
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

// shadcn components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// components
import TitleSection2 from "@/components/shared/title-section/title-section2";

const faqArray = [
    {
      question: `What is Sassly?`,
      answer: `Sassly is an on-brand AI copilot for businesses. It helps creators use generative AI to break through writer’s block, create original imagery, and repackage content into different formats and languages in your company's brand voice. Unlike most AI tools which are tied to individual tools and can produce pretty generic outputs.`
    },
    {
      question: `Why should I choose Sassly?`,
      answer: `Sassly is an on-brand AI copilot for businesses. It helps creators use generative AI to break through writer’s block, create original imagery, and repackage content into different formats and languages in your company's brand voice. Unlike most AI tools which are tied to individual tools and can produce pretty generic outputs.`
    },
    {
      question: `Can I upgrade to a different plan at a later time?`,
      answer: `Sassly is an on-brand AI copilot for businesses. It helps creators use generative AI to break through writer’s block, create original imagery, and repackage content into different formats and languages in your company's brand voice. Unlike most AI tools which are tied to individual tools and can produce pretty generic outputs.`
    },
    {
      question: `What’s the cost of additional users?`,
      answer: `Sassly is an on-brand AI copilot for businesses. It helps creators use generative AI to break through writer’s block, create original imagery, and repackage content into different formats and languages in your company's brand voice. Unlike most AI tools which are tied to individual tools and can produce pretty generic outputs.`
    },
    {
      question: `What’s the commitment?`,
      answer: ` Sassly is an on-brand AI copilot for businesses. It helps creators use generative AI to break through writer’s block, create original imagery, and repackage content into different formats and languages in your company's brand voice. Unlike most AI tools which are tied to individual tools and can produce pretty generic outputs.`
    }
  ];
 
const FAQ = () => {

  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="sec_space_bottom4">
      <div className="container" ref={containerRef}>
        <div className="relative grid grid-cols-1 xl:grid-cols-[1fr_600px] 2xl:grid-cols-[1fr_740px] gap-10 xl:gap-5">
          <div className="max-w-full md:max-w-[80%] xl:max-w-[350px] mx-auto xl:mx-0">
            <TitleSection2
              title={`Frequently Asked Questions`}
              details={`Explore this section to learn more about our AI chatbots and find answers to your questions.`}
              className="text-center xl:text-start"
            />
          </div>
          <div>
              <Accordion
                type="single"
                collapsible
                className="w-full has_fade_anim"
                defaultValue="item-2"
              >
                {faqArray.map((item, i) => (
                  <AccordionItem
                    key={`accordion_item-${i}`}
                    value={`item-${i + 1}`}
                    className="border-b-0 mb-[7px] overflow-hidden"
                  >
                    <AccordionTrigger className="bg-white text-xl leading-tight text-primary shadow-none text-start font-semibold pt-[21px] lg:pt-[25px] pb-[15px] lg:pb-5 px-[25px] md:px-[30px] border border-border rounded-[10px] hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="bg-white text-lg leading-[1.44] text-secondary pt-0 pb-[23px] lg:pb-6 p-[25px] m:px-[30px] border border-border rounded-[10px] mt-[7px]">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
