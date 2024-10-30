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
import { MdOutlineSecurity } from "react-icons/md";
import { FaHandshake, FaMagnifyingGlass } from "react-icons/fa6";
 

const items = [
  {
    image:'',
    title:'Data Security',
    description:`Ensuring that your proprietary data isn’t shared on public domains. And only the permitted data is shared with the users and nothing more. `,
    logo:MdOutlineSecurity 
  },
  {
    image:'',
    title:'Trustability',
    description:`External guardrails to ensure that the AI output is not only free of hallucinations but also compliant with your enterprise policies and benchmarks.`,
    logo:FaHandshake 

  }
  ,
  {
    image:'',
    title:'Observability',
    description:`Gain visibility into the underlying costs and ensure service reliability with a complete traceability of data flowing within the system with real-time monitoring.`,
    logo:FaMagnifyingGlass 
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
           <div className="max-w-[520px] mx-auto text-center py-8">
              <p className="has_fade_anim">{`Zigment is ISO 27001, SOC2 and HIPPA compliant`}</p></div>
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
                      <div className="w-[84px] h-[84px] inline-flex items-center rounded-full justify-center bg-gray-100">
                        <item.logo className="text-primary w-10 h-10 object-fit" />
                      </div>
                      {/* <Avatar className="w-[63px] h-[63px]">

                        <AvatarImage src={item.image} alt="Avatar" />
                        <AvatarFallback>AV</AvatarFallback>
                      </Avatar> */}
                      <div>
                        <h2 className="text-[22px] leading-none">
                          {item.title}
                        </h2>
                      
                      </div>
                    </div>
                    <p className="text-[19px] text-center 2xl:text-[22px] leading-[1.36] mt-[36px]">
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
