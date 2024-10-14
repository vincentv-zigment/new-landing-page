"use client";

import { useRef } from "react";

// gsap
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { useGSAP } from "@gsap/react";

// lib
import { delayTime } from "@/lib/helper/delayTime";

// types

// components
import TitleSection2 from "@/components/shared/title-section/title-section2";

const contentArray = [
  {
    title: 'We study your workflows and requirements',
    description: '',
    image:'/assets/imgs/icon/icon-r-1.png'
  },
  {
    title: 'Train the AI agents with your data and sales goals',
    description: '',
    image:'/assets/imgs/icon/icon-r-2.png'
  },
  {
    title: 'Integrate with your CRM and other software',
    description: '',
    image:'/assets/imgs/icon/icon-r-3.png'
  },
  {
    title: 'Test the agent and the workflows and go live',
    description: '',
    image:'/assets/imgs/icon/icon-r-4.png'
  }
];

 

const GoLive = ( ) => {

  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="py-[70px] lg:py-[100px] xl:py-[185px]">
      <div className="container" ref={containerRef}>
        <div className="mb-[30px] md:mb-[63px]">
          <TitleSection2
            title={`Go live in days`}
            details={``}
            titleClassName="max-w-[710px]"
            detailsClassName="max-w-[710px]"
          />
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {contentArray.map((item, i) => (
              <div
                key={item.title}
                className="has_fade_anim"
                data-delay={delayTime(i + 1)}
              >
                <ServiceCard2 service={item} />
              </div>
            ))}
          </div>
      </div>
    </section>
  );
};

export default GoLive;


import Image from "next/image";
import Link from "next/link";

// types

type ServiceProps = {
  service: {
    title: string;
    description: string;
    image: string;
  };
};

const ServiceCard2 = ({ service }: ServiceProps) => {
  return (
    <div className="px-[20px] py-[30px] lg:py-[20px] xl:px-[0px] xl:py-[40px] border border-border rounded-[40px] text-center h-full flex flex-col justify-between items-center">
      <div className="pb-[16px] md:pb-[35px] w-[60px] mx-auto">
        <Image width={60} height={60} src={service.image} alt="icon" />
      </div>
      <div>
        <Link href="#">
          <div className="text-[16px] xl:text-[20px] p-8 mx-auto  ">
            {service.title}
          </div>
        </Link>
      </div>
      <Link href="#" className="inline-block">
        <div className="rounded-full p-0 flex justify-center items-center w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-transparent border border-border hover:bg-theme">
          <Image
            width={19}
            height={14}
            src="/assets/imgs/icon/arrow.png"
            className="-rotate-45 rtl:-rotate-135"
            alt="icon"
          />
        </div>
      </Link>
    </div>
  );
};


