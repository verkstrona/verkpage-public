import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import "@/app/globals.css";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import Script from "next/script";

import HeaderReveal from "../components/HeaderReveal";
import Navigation from "../components/Navigation";
import { ThemeProvider } from "../context/ThemeContext";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Footer from "../components/Footer";
import { CookieProvider } from "../context/CookieContext";
import CookieBanner from "../components/CookieBanner";
import { getTranslations } from "next-intl/server";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "Metadata",
  });

  // return {
  //   title: {
  //     default: t("title"),
  //     template: `%s | Verk Group`,
  //   },
  //   description: t("description"),
  //   keywords: t("keywords"),
  //   // SEO i i18n
  //   alternates: {
  //     languages: {
  //       pl: "/pl",
  //       en: "/en",
  //     },
  //   },
  //   icons: {
  //     icon: "/icon.png",
  //   },

  //   // Open Graph (social media)
  //   openGraph: {
  //     title: t("title"),
  //     description: t("description"),
  //     locale: locale,
  //     type: "website",
  //   },
  // };
  return {
    metadataBase: new URL("https://www.verk.pl"),

    title: {
      default: t("title"),
      template: `%s | Verk Group`,
    },

    description: t("description"),
    keywords: t("keywords"),

    robots: {
      index: true,
      follow: true,
    },

    alternates: {
      canonical:
        locale === "en" ? "https://www.verk.pl/en" : "https://www.verk.pl",

      languages: {
        pl: "https://www.verk.pl",
        en: "https://www.verk.pl/en",
      },
    },

    icons: {
      icon: "/icon.png",
    },

    openGraph: {
      title: t("title"),
      description: t("description"),
      url: locale === "en" ? "https://www.verk.pl/en" : "https://www.verk.pl",
      siteName: "Verk Group",
      locale,
      type: "website",
    },
  };
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale}>
      {/* <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="/icon.png" />
        <link rel="canonical" href="https://verk.pl" />
      </head> */}
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="/icon.png" />
      </head>
      <body className={`${poppins.variable} antialiased`}>
        <NextIntlClientProvider>
          <ThemeProvider>
            <CookieProvider>
              <HeaderReveal>
                <Navigation />
              </HeaderReveal>
              {children}

              <CookieBanner />
              <Footer />
            </CookieProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
        {/* Google Analytics */}
        {GA_ID && (
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
        )}
      </body>
    </html>
  );
}
