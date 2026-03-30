// components/Map.tsx
"use client";

import { useCookie } from "@/app/context/CookieContext";
import { useTranslations } from "next-intl";

export default function Map() {
  const { consent, loaded } = useCookie();
  const t = useTranslations("Map");

  if (!consent) {
    return (
      <div className="p-4 text-center">
        <p className="map-p">*{t("title")}</p>
      </div>
    );
  }

  if (!loaded) return null;

  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d612.4162481095191!2d20.92944121783502!3d52.12222397902865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471933c804dfdc5f%3A0x280d20cbe895a290!2sInternetowa-hurtownia.pl%20Verk%20Group%20-%20Hurtownia%20wielobran%C5%BCowa!5e0!3m2!1spl!2spl!4v1774205981888!5m2!1spl!2spl"
      loading="lazy"
      className="opacity-80 grayscale-25 transition-opacity duration-300 hover:opacity-100 w-full h-192 border-0 max-sm:h-125"
    ></iframe>
  );
}
