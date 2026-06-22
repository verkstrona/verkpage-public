"use client";

import Script from "next/script";
import { useCookie } from "@/app/context/CookieContext";

export default function GoogleAnalytics() {
  const { consent, loaded } = useCookie();

  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  if (!loaded) return null;

  if (!GA_ID) return null;

  if (!consent.analytics) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
