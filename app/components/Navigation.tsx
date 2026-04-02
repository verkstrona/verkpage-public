import Link from "next/link";
import LocaleSwitcher from "./LocaleSwitcher";
import ThemeToggle from "./ThemeToggle";
import MobileNav from "./NavMobile";
import NavDesktop from "./NavDesktop";
import IMGverk from "@/public/LogoVerk.png";
import IMGverkwhite from "@/public/LogoVerkWhite.png";
import IMGverkdark from "@/public/LogoVerkDark.png";
import Image from "next/image";

export default function Navigation() {
  return (
    <nav className="navigation">
      <div>
        <Link href="/" className="font-bold">
          <Image src={IMGverk} alt="logo" className="max-h-[50px] w-auto" />
          {/* <Image
            src={IMGverkwhite}
            alt="logo"
            className="max-h-[50px] w-auto image-dark"
          />
          <Image
            src={IMGverkdark}
            alt="logo"
            className="max-h-[50px] w-auto image-white"
          /> */}
        </Link>
      </div>
      <div className="max-[850px]:hidden max-[980px]:text-3xl">
        <NavDesktop />
      </div>
      <div className="flex items-center justify-items-center gap-8">
        <ThemeToggle />
        <LocaleSwitcher />
        <div className="min-[850px]:hidden">
          <MobileNav />
        </div>
      </div>
    </nav>
  );
}
