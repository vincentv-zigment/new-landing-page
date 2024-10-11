"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// lib
import { cn } from "@/lib/utils";

// types
import { MenuDataType } from "@/types";

// shadcn components
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

type Props = {
  headerNav: MenuDataType;
  dropdownClassName?: string;
  navItemClassName?: string;
  activeText?: string;
};

const Menu1 = ({
  headerNav,
  dropdownClassName,
  navItemClassName,
  activeText,
}: Props) => {
  const pathname = usePathname();

  if (!(headerNav && headerNav.length)) {
    return;
  }

  function onNavChange() {
    setTimeout(() => {
      const triggers = document.querySelectorAll(
        '.submenu-trigger[data-state="open"]'
      );
      if (triggers.length === 0) return;

      const firstTrigger = triggers[0] as HTMLElement;
      const viewports = document.getElementsByClassName("submenu-viewport");

      if (viewports.length > 0) {
        const viewport = viewports[0] as HTMLElement;
        viewport.style.left = `${firstTrigger.offsetLeft}px`;
      }
    });
  }

  return (
    <NavigationMenu onValueChange={onNavChange}>
      <NavigationMenuList className="flex-wrap">
        {headerNav.map((menu, i) => (
          <NavigationMenuItem key={`menu_item-${i}`} className="">
            {menu.hasChildren ? (
              <>
                <NavigationMenuTrigger
                  className={cn(
                    "submenu-trigger hover:text-theme flex items-center font-medium text-[16px] leading-none text-primary px-[15px] py-[45px] capitalize",
                    navItemClassName
                  )}
                >
                  {menu.name}
                </NavigationMenuTrigger>
                {menu.children && menu.children.length && (
                  <NavigationMenuContent>
                    <NavigationMenuList className="bg-[#232529] block py-[18px] w-[250px]">
                      {menu.children.map((childMenu, j) => (
                        <NavigationMenuItem key={`child_menu-${i}${j}`}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={childMenu.path}
                              className={cn(
                                "hover:text-theme flex items-center font-medium text-[16px] leading-none text-white px-[25px] py-[10px] capitalize",
                                pathname &&
                                  (pathname === childMenu.path + "/" ||
                                    pathname === childMenu.path)
                                  ? cn("text-theme", activeText)
                                  : "",
                                dropdownClassName
                              )}
                            >
                              {childMenu.name}
                            </Link>
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      ))}
                    </NavigationMenuList>
                  </NavigationMenuContent>
                )}
              </>
            ) : (
              <NavigationMenuLink asChild>
                <Link
                  href={menu.path}
                  className={cn(
                    "hover:text-theme flex items-center font-medium text-[16px] leading-none text-primary px-[15px] py-[37px] capitalize",
                    pathname &&
                      (pathname === menu.path + "/" || pathname === menu.path)
                      ? "text-theme"
                      : "",
                    navItemClassName
                  )}
                >
                  {menu.name}
                </Link>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Menu1;
