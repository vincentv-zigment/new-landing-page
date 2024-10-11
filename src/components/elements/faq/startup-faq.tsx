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

type Props = {
  faq: {
    data: {
      title: string;
      details: string;
      items: {
        question: string;
        answer: string;
      }[];
    };
    content: string;
  };
};

const StartupFAQ = ({ faq }: Props) => {
  const { title, details, items } = faq.data;

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
              title={title}
              details={details}
              className="text-center xl:text-start"
            />
          </div>
          <div>
            {items && items.length && (
              <Accordion
                type="single"
                collapsible
                className="w-full has_fade_anim"
                defaultValue="item-2"
              >
                {items.map((item, i) => (
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
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartupFAQ;
