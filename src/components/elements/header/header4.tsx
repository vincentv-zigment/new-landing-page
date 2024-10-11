"use client";

import { useEffect, useState } from "react";

// lib
import { cn } from "@/lib/utils";

// types
import { MenuDataType } from "@/types";

// shadcn components
import { Button } from "@/components/ui/button";

// components
import Logo from "../common/logo";
import Offcanvas1 from "../offcanvas/offcanvas1";
import Signin from "../signin";
import Signup from "../signup";
import Menu3 from "../menu/menu3";

type Props = {
  headerNav: MenuDataType;
};

const Header4 = ({ headerNav }: Props) => {
  const [scroll, setScroll] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpen2, setIsOpen2] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
  }, []);

  const closeDialog = () => {
    setIsOpen(!isOpen);
  };

  const closeDialog2 = () => {
    setIsOpen2(!isOpen2);
  };

  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  return (
    <>
      <header
        className={cn(
          scroll ? "fixed" : "absolute",
          "top-0 left-0 w-full z-[99] max-w-[1920px] mx-auto px-[15px] lg:px-[30px]"
        )}
      >
        <div className="bg-sec_bg-2 px-[30px] rounded-[0_0_20px_20px]">
          <div className="grid grid-cols-9 xl:grid-cols-4 gap-1 xl:gap-5 relative h-[90px] items-center">
            <div className="col-span-4 xl:col-span-1">
              <Logo />
            </div>
            <div className="col-span-2 hidden xl:flex justify-center">
              <Menu3 headerNav={headerNav} />
            </div>
            <div className="col-span-5 xl:col-span-1 flex justify-end gap-5">
              <Button
                variant="primary3"
                size="sm"
                onClick={() => setIsOpen(true)}
              >
                <span className="btn-span uppercase" data-text="Sign up">
                  Sign up
                </span>
              </Button>
              <div className="flex justify-end xl:hidden">
                <Offcanvas1 headerNav={headerNav} />
              </div>
            </div>
          </div>
        </div>
      </header>
      <Signup isOpen={isOpen} close={closeDialog} open={closeDialog2} />
      <Signin isOpen={isOpen2} close={closeDialog2} open={closeDialog} />
    </>
  );
};

export default Header4;
