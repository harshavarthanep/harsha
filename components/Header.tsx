"use client";

import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";

const Header = () => {
  const [headerActive, setHeaderActive] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // detect scroll
      setHeaderActive(window.scrollY > 50);
    };

    // add scroll event
    window.addEventListener("scroll", handleScroll);

    //clear scroll event
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(headerActive);

  return (
    <header
      className={`${
        headerActive ? "h-[90px]" : "h-[100px]"
      } fixed max-w-[1920px] top-0 w-full bg-primary-200 transition-all z-50`}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        {/* logo */}
        <Link href="">
          <Image
            src={"/assets/img/DAP_LOGO.png"}
            width={100}
            height={100}
            alt=""
          />
        </Link>

        {/* mobile nav - hidden on large devices */}
        <MobileNav
          containerStyles={`${headerActive ? "top-[90px]" : "top-[100px]"}
          ${
            openNav
              ? "max-h-max pt-8 pb-10 border-t border-white/10"
              : "max-h-0 pt-0 pb-0 overflow- hidden border-white/0"
          }
          flex flex-col text-center gap-8 fixed bg-primary-200 w-full left-0 text-base uppercase font-medium text-white xl:hidden`}
        />

        {/* desktop nav - hidden on small devices */}
        <Nav containerStyles="flex gap-4 text-white text-base uppercase font-medium hidden transition-all xl:flex" />

        {/* hide/open menu button for mobile */}
        <div className="div">
          <button
            onClick={() => setOpenNav(!openNav)}
            className="text-4xl text-white hover:text-accent xl:hidden"
          >
            {openNav ? <MdClose /> : <MdMenu />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
