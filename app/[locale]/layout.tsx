import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import "@/app/globals.css";
import { NextIntlClientProvider, hasLocale } from "next-intl";

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

  return {
    title: {
      default: t("title"),
      template: `%s | Verk Group`,
    },
    description: t("description"),
    keywords: t("keywords"),
    // SEO i i18n
    alternates: {
      languages: {
        pl: "/pl",
        en: "/en",
      },
    },
    icons: {
      icon: "/icon.png",
    },

    // Open Graph (social media)
    openGraph: {
      title: t("title"),
      description: t("description"),
      locale: locale,
      type: "website",
    },
  };
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale}>
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
      </body>
    </html>
  );
}
