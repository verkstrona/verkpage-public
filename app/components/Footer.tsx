"use client";
import IMGverk from "@/public/LogoVerk.png";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className="border-b-2 border-[#CD1C18] ">
      <div className="container text-center grid items-center content-center justify-items-center gap-8">
        <div className="flex items-start justify-items-center text-left gap-8 flex-wrap max-[375px]:gap-6">
          <Image
            src={IMGverk}
            alt="Logo Verk Group"
            className="max-h-[80px] max-sm:max-h-[50px] w-auto"
          />
          <ul>
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
          <ul>
            <li>
              {t("phone1")}
              <Link href="tel:+48888055550" className="opacity-80">
                {" "}
                <br></br> +48 888 055 550
              </Link>
            </li>
            <li>
              {t("phone2")}
              <Link href="tel:+48226709010" className="opacity-80">
                {" "}
                <br></br> +48 22 670 90 10
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="https://verk.sklep.pl/" target="_blank">
                {t("shop")}
              </Link>
            </li>
            <li>
              <Link href="https://internetowa-hurtownia.pl/" target="_blank">
                {t("warehouse")}
              </Link>
            </li>
          </ul>
        </div>
        <p className="p-footer">
          &copy; {new Date().getFullYear()} Verk Group. {t("rights")}
        </p>
      </div>
    </footer>
  );
}
