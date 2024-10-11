"use client";

import { useRef } from "react";
import Image from "next/image";

// gsap
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

// components
import Title1 from "@/components/shared/title/title1";

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
      image:'/assets/imgs/icon/icon-r-5.png'
    },
    {
      title: 'Personal Concierge',
      description: `AI agent who is trained to serve as your customer’s personal concierge and available at all times and capable of performing most tasks.`,
      image:'/assets/imgs/icon/icon-r-6.png'

    },
    {
      title: '24/7 Support',
      description: `Provide personalized human-like support for your customers, with quicker ticket resolution and make them feel heard and attended to.`,
      image:'/assets/imgs/icon/icon-r-6.png'
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
        <div className="grid grid-cols-1 lg:grid-cols-[7fr_6fr] gap-x-6 gap-y-12 items-center">
          <div>
            <Title1
              text={`Zigment for retention`}
              className="pb-[15px] md:pb-[24px] max-w-[463px] has_fade_anim"
            />
            <div className="max-w-[520px]">
              <p className="has_fade_anim">{`Start with a pre-designed template to create a Facebook ad that’s visually appealing and engaging. Select a professionally designed.

`}</p>
            </div>
              <div className="mt-[30px] md:mt-[45px] has_fade_anim">
                {contentArray.map((item, i) => (
                  <div
                    key={`feature_item-${i}`}
                    className="mb-[30px] md:mb-[50px] last:mb-0 flex gap-[15px] md:gap-[30px]"
                  >
                    <div className="shrink-0">
                      <Image
                        width={70}
                        height={70}
                        src={item.image}
                        alt="icon"
                      />
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
          <div className="relative max-w-full lg:max-w-[630px] rounded-[40px] mx-auto bg-[#FAFAFA] mt-[50px] md:mt-0 p-0 md:px-[50px] md:py-[60px]">
              <Image
                width={492}
                height={542}
                src={`/assets/imgs/zigment-landing-page/zigment-retention/img-r-7.webp`}
                alt="community-thumb"
              />
              <Image
                width={205}
                height={120}
                src={`/assets/imgs/zigment-landing-page/zigment-retention/img-r-8.webp`}
                data-speed="1.2"
                className="absolute bottom-[142px] left-[23px] "
                alt="community-thumb"
              />
              <Image
                width={272}
                height={272}
                src={`/assets/imgs/zigment-landing-page/zigment-retention/img-r-9.webp`}

                data-speed="0.8"
                className="absolute -right-[60px] top-[48px]"
                alt="community-thumb"
              />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZigmentRetention;
