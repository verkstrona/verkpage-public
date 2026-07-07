"use client";
import IMGverk from "@/public/LogoVerkDark.png";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineShoppingBag } from "react-icons/hi";

import { FaShoppingCart } from "react-icons/fa";
import { BiSolidPhone } from "react-icons/bi";
import { BiSolidPhoneCall } from "react-icons/bi";
import { HiDevicePhoneMobile } from "react-icons/hi2";

export default function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className="border-b-2 border-[#CD1C18] ">
      <div className=" text-center grid items-center content-center justify-items-center gap-8">
        {/* <div className="grid grid-cols-5  justify-items-center text-left gap-6 max-[1350px]:gap-3 max-[660px]:justify-items-start"> */}
        <div className="flex  gap-12  items-start text-left justify-center max-[1350px]:gap-8 max-[1090px]:gap-4 max-[960px]:grid max-[960px]:grid-cols-2 max-[960px]:gap-8 max-[460px]:grid-cols-1 max-[460px]:justify-items-start max-[460px]:gap-12">
          <Image
            src={IMGverk}
            alt="Logo Verk Group"
            className="max-h-[80px] max-sm:max-h-[50px] w-auto pr-4 self-center"
          />
          <ul className="gap-1 self-center">
            <li>
              <Link href="/"> {t("home")} </Link>
            </li>
            <li>
              <Link href="/about-us"> {t("about")} </Link>
            </li>
            <li>
              <Link href="/our-brands"> {t("brands")} </Link>
            </li>
            <li>
              <Link href="/contact"> {t("contact")} </Link>
            </li>
            <li>
              <Link href="/privacy-policy"> {t("privacy")} </Link>
            </li>
          </ul>
          <ul className="min-[960px]:border-l min-[960px]:border-gray-400/20 pl-12 max-[1350px]:pl-8 max-[1090px]:pl-4 max-[960px]:pl-0 self-stretch gap-4">
            <li className="flex gap-2 items-center pb-1">
              <FaShoppingCart className="fill-[#cd1c18] text-3xl" />
              <p className="text-[#cd1c18]">{t("wholesale")}</p>
            </li>
            <li className="flex gap-2 items-center text-3xl">
              <BiSolidPhone className="fill-[#cd1c18]" />
              <Link href="tel:+48888055550" className="opacity-80">
                +48 888 055 550 {t("phone1")}
              </Link>
            </li>
            <li className="flex gap-2 items-center">
              <HiDevicePhoneMobile className="self-start fill-[#cd1c18] text-3xl" />
              <Link href="tel:+48226709010" className="opacity-80">
                +48 666 670 672<br></br>
                <span className="text-sm">{t("phone3")}</span>
              </Link>
            </li>
            <li className="flex gap-2 items-center">
              <BiSolidPhoneCall className="fill-[#cd1c18] text-3xl" />
              <Link href="tel:+48226709010" className="opacity-80">
                +48 22 670 90 10 {t("phone2")}
              </Link>
            </li>
          </ul>
          <ul className="min-[960px]:border-l min-[960px]:border-gray-400/20 pl-12 max-[1350px]:pl-8 max-[1090px]:pl-4 max-[960px]:pl-0 self-stretch gap-4">
            <li className="flex gap-2 items-center pb-1">
              <HiOutlineShoppingBag className="text-3xl stroke-[#cd1c18]" />
              <p className="text-[#cd1c18]">{t("retail")}</p>
            </li>
            <li className="flex gap-2 items-center">
              <BiSolidPhone className="fill-[#cd1c18] text-3xl" />
              <Link href="tel:+48888055550" className="opacity-80">
                +48 888 055 550 {t("phone1")}
              </Link>
            </li>
            <li className="flex gap-2 items-center">
              <BiSolidPhoneCall className="fill-[#cd1c18] text-3xl" />
              <Link href="tel:+48226709010" className="opacity-80">
                +48 22 670 90 10 {t("phone2")}
              </Link>
            </li>
          </ul>
          <ul className="min-[960px]:border-l min-[960px]:border-gray-400/20 pl-12 max-[1350px]:pl-8 max-[1090px]:pl-4 max-[960px]:pl-0 self-center py-2 gap-1">
            <li>
              <Link href="https://verk.sklep.pl/" target="_blank">
                verk.sklep.pl
              </Link>
            </li>
            <li>
              <Link href="https://divogarden.eu/" target="_blank">
                divogarden.eu
              </Link>
            </li>
            <li>
              <Link href="https://internetowa-hurtownia.pl/" target="_blank">
                {t("warehouse")}
              </Link>
            </li>
          </ul>
        </div>
        <p className="p-footer pt-12">
          &copy; {new Date().getFullYear()} Verk Group. {t("rights")}
        </p>
      </div>
    </footer>
  );
}
