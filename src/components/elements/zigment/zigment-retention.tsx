"use client";

import { useRef } from "react";
import Image from "next/image";

// gsap
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

// components
import Title1 from "@/components/shared/title/title1";
import { MdSupportAgent } from "react-icons/md";
import { LuConciergeBell } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";

type Props = {
  feature: {
    data: {
      title: string;
      details: string;
      image: string;
      items: {
        name: string;
        short_description: string;
        image: string;
      }[];
      shape1_img: string;
      shape2_img: string;
    };
  };
};

const contentArray = [
    {
      title: 'Customer Onboarding',
      description: `Use Zigment’s AI agents to handhold your customers while they learn about your platform and to ensure the best possible onboarding for them.`,
      icon: FaRegUserCircle 
    },
    {
      title: 'Personal Concierge',
      description: `AI agent who is trained to serve as your customer’s personal concierge and available at all times and capable of performing most tasks.`,
      icon: LuConciergeBell 

    },
    {
      title: '24/7 Support',
      description: `Provide personalized human-like support for your customers, with quicker ticket resolution and make them feel heard and attended to.`,
      icon: MdSupportAgent 
    }
  ];

const ZigmentRetention = ( ) => {

  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="sec_space2">
      <div className="container" ref={containerRef}>
        <div className="grid grid-cols-1 lg:grid-cols-[7fr_6fr] gap-x-6 gap-y-12 items-end">
          <div>
            <Title1
              text={`Zigment for retention`}
              className="pb-[15px] md:pb-[24px] max-w-[463px] has_fade_anim"
            />
            <div className="max-w-[520px]">
              <p className="has_fade_anim">{`Deploy Zigment as a 24/7 concierge for your customers and make them feel valued much more. Increase your customer retention by over 45%.`}</p>
            </div>
              <div className="mt-[30px] md:mt-[45px] has_fade_anim">
                {contentArray.map((item, i) => (
                  <div
                    key={`feature_item-${i}`}
                    className="mb-[30px] md:mb-[50px] last:mb-0 flex gap-[15px] md:gap-[30px]"
                  >
                    <div className={`shrink-0 
                        ${i === 0 && 'bg-[#fbe3ae]'} 
                        ${i === 1 && 'bg-[#b7b6f4]'}  
                        ${i === 2 && 'bg-[#f7c6c8]'}  
                        w-16 h-16 flex items-center justify-center rounded-full 
                      `}>

                      {item.icon && <item.icon className="text-primary w-7 h-7" />}
                    </div>
                    <div>
                      <h2 className="text-[18px] md:text-[24px] pb-0 md:pb-[13px]">
                        {item.title}
                      </h2>
                      <div className="w-full">
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
          </div>
          <div className="relative max-w-full lg:max-w-[630px] h-auto lg:h-[75%] rounded-[40px] mx-auto bg-[#FAFAFA] mt-[50px] md:mt-0 p-0 lg:p-10">
              <Image
                width={492}
                height={542}
                src={`/assets/imgs/zigment-landing-page/zigment-retention/mock-3.jpg`}
                alt="community-thumb"
                className="h-full w-auto object-contain"
              />
               
             
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZigmentRetention;
