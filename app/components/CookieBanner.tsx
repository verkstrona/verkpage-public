"use client";

import { useEffect, useState } from "react";
import { useCookie } from "@/app/context/CookieContext";
import { useTranslations } from "next-intl";

export default function CookieBanner() {
  const t = useTranslations("CookieBanner");

  const { consent, loaded, acceptAll, declineAll, saveSelected, showBanner } =
    useCookie();

  const [analytics, setAnalyticsLocal] = useState(false);
  const [maps, setMapsLocal] = useState(false);

  useEffect(() => {
    if (loaded) {
      setAnalyticsLocal(consent.analytics);
      setMapsLocal(consent.maps);
    }
  }, [loaded, consent]);

  if (!loaded) return null;
  if (!showBanner) return null;

  const handleSaveSelected = () => {
    saveSelected({
      analytics,
      maps,
    });
  };

  const showSelectedButton = analytics || maps;

  return (
    <div className="fixed bottom-[10%] left-0 w-[50%] max-lg:w-full bg-cookies p-12 flex flex-col gap-6 z-50">
      <p className="text-md">{t("message")}</p>

      <div className="flex flex-col gap-6">
        {/* ESSENTIAL */}
        <div className="grid grid-cols-2 items-start gap-4">
          <div>
            <p>{t("essential")}</p>
            <span>{t("essentialDescription")}</span>
          </div>

          <label className="switch switch-disabled justify-self-end">
            <input type="checkbox" checked disabled />
            <span className="slider" />
          </label>
        </div>

        {/* ANALYTICS */}
        <div className="grid grid-cols-2 items-start gap-4">
          <div>
            <p>{t("analytics")}</p>
            <span>{t("analyticsDescription")}</span>
          </div>

          <label className="switch justify-self-end">
            <input
              type="checkbox"
              checked={analytics}
              onChange={(e) => setAnalyticsLocal(e.target.checked)}
            />
            <span className="slider" />
          </label>
        </div>

        {/* MAPS */}
        <div className="grid grid-cols-2 items-start gap-4">
          <div>
            <p>{t("maps")}</p>
            <span>{t("mapsDescription")}</span>
          </div>

          <label className="switch justify-self-end">
            <input
              type="checkbox"
              checked={maps}
              onChange={(e) => setMapsLocal(e.target.checked)}
            />
            <span className="slider" />
          </label>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="flex gap-6 justify-end">
        <button onClick={declineAll} className="btn-decline px-3 py-1 rounded">
          {t("acceptEssential")}
        </button>

        <button onClick={acceptAll} className="btn-accept px-3 py-1 rounded">
          {t("acceptAll")}
        </button>
      </div>
      <div className="flex gap-6 justify-end">
        {showSelectedButton && (
          <button
            onClick={handleSaveSelected}
            className="btn-selected px-3 py-1 rounded"
          >
            {t("acceptSelected")}
          </button>
        )}
      </div>
    </div>
  );
}
