"use client";

import { useRef } from "react";

// gsap
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

// shadcn components
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

// components
import Title1 from "@/components/shared/title/title1";
import RattingStar2 from "../rating/ratting-star2";
import { Description } from "@radix-ui/react-dialog";
 

const items = [
  {
    image:'',
    title:'Data Security',
    description:`We ensure that your proprietary data isn’t available in public domains while running LLMs. We also ensure that only the permitted data is shared with the users and nothing more. We are ISO 27001, SOC 2, HIPAA complaint.`
  },
  {
    image:'',
    title:'Trustability',
    description:`Zigment Platform implements external guardrails to ensure that the output from the LLMs is not only free of any hallucinations but also compliant with your enterprise policies and benchmarks.`
  }
  ,
  {
    image:'',
    title:'Observability',
    description:`Gain visibility into the underlying costs and ensure service reliability with a complete traceability of data flowing within the system. Realtime monitoring of all the systems both at macro and micro levels so that you are in the know all the time.
`
  }
]

const EnterpriseGradeAI = ( ) => {

  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="  ">
      <div className="container" ref={containerRef}>
        <Title1
          text={`Enterprise grade AI`}
          className="w-full mx-auto text-center has_fade_anim"
        />
        <Carousel
          dir="ltr"
          opts={{
            duration: 60,
          }}
          className="w-full mt-[51px] 2xl:mt-[61px] mx-auto has_fade_anim"
        >
          <CarouselContent className="gap-[14px]">
             { items.map((item, i) => (
                <CarouselItem
                  key={`testimonial_item-${i}`}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-[25px] lg:p-[45px] bg-white border border-border rounded-theme h-full">
                    <div className="flex flex-col justify-center items-center  gap-[20px]">
                      <Avatar className="w-[63px] h-[63px]">
                        <AvatarImage src={item.image} alt="Avatar" />
                        <AvatarFallback>AV</AvatarFallback>
                      </Avatar>
                      <div>
                        <h2 className="text-[22px] leading-none">
                          {item.title}
                        </h2>
                      
                      </div>
                    </div>
                    <p className="text-[19px] 2xl:text-[22px] leading-[1.36] mt-[36px]">
                      {item.description}
                    </p>
                    
                  </div>
                </CarouselItem>
              ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default EnterpriseGradeAI;
