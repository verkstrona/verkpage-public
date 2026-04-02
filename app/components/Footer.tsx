import IMGverkwhite from "@/public/LogoVerkWhite.png";
import IMGverk from "@/public/LogoVerk.png";
import IMGverkdark from "@/public/LogoVerkDark.png";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className="border-b-2 border-[#CD1C18] ">
      <div className="container text-center grid items-center content-center justify-items-center gap-8">
        <Image
          src={IMGverk}
          alt="logo"
          className="max-h-[80px] max-sm:max-h-[50px] w-auto"
        />
        {/* <Image
          src={IMGverkwhite}
          alt="logo"
          className="max-h-[80px] max-sm:max-h-[50px] w-auto image-dark"
        />
        <Image
          src={IMGverkdark}
          alt="logo"
          className="max-h-[80px] max-sm:max-h-[50px] w-auto image-white"
        /> */}
        <p className="p-footer">
          &copy; {new Date().getFullYear()} Verk Group. {t("rights")}
        </p>
      </div>
    </footer>
  );
}
