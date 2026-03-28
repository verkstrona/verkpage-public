"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";

function MobileNav() {
  const t = useTranslations("Navigation");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        className="navbtn grid"
        aria-label="menu open/close"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          {!isOpen ? (
            <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
          ) : (
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          )}
        </svg>
      </button>
      {isOpen && (
        <nav className="navmb" onClick={() => setIsOpen(!isOpen)}>
          <ul className="flex flex-col justify-end  gap-12">
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
        </nav>
      )}
    </div>
  );
}

export default MobileNav;
