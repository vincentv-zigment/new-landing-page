"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

// lib
import { cn } from "@/lib/utils";

// types
import { ActionBtnType } from "@/types";

// gsap
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

// shadcn components
import { buttonVariants } from "@/components/ui/button";

// components
import TitleSection2 from "@/components/shared/title-section/title-section2";

type Props = {
  integration: {
    data: {
      title: string;
      details: string;
      items: string[];
      action_btn?: ActionBtnType;
    };
    content: string;
  };
};

const items = [
    
    '/assets/imgs/zigment-landing-page/integration/icon-app-1.png',
    '/assets/imgs/zigment-landing-page/integration/icon-app-2.png',
    '/assets/imgs/zigment-landing-page/integration/icon-app-3.png',
    '/assets/imgs/zigment-landing-page/integration/icon-app-4.png',
    '/assets/imgs/zigment-landing-page/integration/icon-app-5.png',
    '/assets/imgs/zigment-landing-page/integration/icon-app-6.png',
    '/assets/imgs/zigment-landing-page/integration/icon-app-7.png',
    '/assets/imgs/zigment-landing-page/integration/icon-app-8.png',
    '/assets/imgs/zigment-landing-page/integration/icon-app-9.png',
    '/assets/imgs/zigment-landing-page/integration/icon-app-10.png',
    '/assets/imgs/zigment-landing-page/integration/icon-app-11.png',
    '/assets/imgs/zigment-landing-page/integration/icon-app-12.png',
    '/assets/imgs/zigment-landing-page/integration/icon-app-13.png',
    '/assets/imgs/zigment-landing-page/integration/icon-app-14.png'
  ];

const Integration = ( ) => {

  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="py-[51px] md:py-[81px] xl:py-[111px] 2xl:py-[181px]">
      <div className="container" ref={containerRef}>
        <TitleSection2
          title={`Zigment fits right into your stack`}
          details={`Ability to understand and generate content in different to expand their reach and appeal to a wider audience.`}
          titleClassName="max-w-[700px]"
          html
        />
          <div className="mt-[33px] xl:mt-[53px] 2xl:mt-[63px] mx-auto max-w-[1140px] flex flex-wrap justify-center gap-5 has_fade_anim">
            {items.map((item, i) => (
              <div
                key={`integration_item-${i}`}
                className="w-[70px] xl:w-[100px] 2xl:w-[125px] rounded-[30px] 2xl:rounded-[30px] aspect-[100/98] bg-white flex justify-center items-center border border-border"
              >
                <Image
                  width={58}
                  height={58}
                  className="w-[35px] lg:w-[45px] xl:w-[58px] h-[35px] lg:h-[45px] xl:h-[58px] object-contain"
                  src={item}
                  alt="app icon"
                />
              </div>
            ))}
          </div>
          <div className="py-[25px] lg:py-[45px] has_fade_anim text-center">
              <Link
                href={"#"}
                className={cn(buttonVariants({ variant: "primary2" }))}
              >
                Explore integration
              </Link>
            </div>
      </div>
    </section>
  );
};

export default Integration;
