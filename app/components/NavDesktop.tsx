"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";

import { usePathname } from "next/navigation";

export default function NavDesktop() {
  const pathname = usePathname();
  const t = useTranslations("Navigation");
  return (
    <ul>
      <li>
        <Link
          href="/"
          className={`${pathname === "/" || pathname === "/en" || pathname === "/pl" ? "border-b-2 border-b-[#AD2B10]" : "opacity-85 hover:opacity-100 transition-opacity duration-300"}`}
        >
          {t("home")}
        </Link>
      </li>
      <li>
        <Link
          href="/about-us"
          className={`${pathname === "/en/about-us" || pathname === "/o-nas" ? "border-b-2 border-b-[#AD2B10]" : "opacity-85 hover:opacity-100 transition-opacity duration-300"}`}
        >
          {t("about")}
        </Link>
      </li>
      <li>
        <Link
          href="/our-brands"
          className={`${pathname === "/en/our-brands" || pathname === "/nasze-marki" ? "border-b-2 border-b-[#AD2B10]" : "opacity-85 hover:opacity-100 transition-opacity duration-300"}`}
        >
          {t("brands")}
        </Link>
      </li>
      <li>
        <Link
          href="/contact"
          className={`${pathname === "/en/contact" || pathname === "/kontakt" ? "border-b-2 border-b-[#AD2B10]" : "opacity-85 hover:opacity-100 transition-opacity duration-300"}`}
        >
          {t("contact")}
        </Link>
      </li>
      <li>
        <Link href="https://verk.sklep.pl/" target="_blank">
          {t("shop")}
        </Link>
      </li>
    </ul>
  );
}
