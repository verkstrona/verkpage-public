// components/CookieBanner.tsx
"use client";

import { useCookie } from "@/app/context/CookieContext";
import { useTranslations } from "next-intl";

export default function CookieBanner() {
  const t = useTranslations("CookieBanner");
  const { consent, loaded, accept, decline } = useCookie();

  if (!loaded) return null;
  if (consent) return null;

  return (
    <div className="fixed bottom-[10%] left-0 w-[50%] max-sm:w-full bg-cookies p-12 flex justify-between items-center z-50 gap-12">
      <p className="text-sm">{t("message")}</p>
      <div className="flex gap-2">
        <button onClick={accept} className="btn-accept px-3 py-1 rounded">
          {t("accept")}
        </button>
        <button onClick={decline} className="btn-decline px-3 py-1 rounded">
          {t("decline")}
        </button>
      </div>
    </div>
  );
}
