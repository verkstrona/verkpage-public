import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "pl"],

  // Used when no locale matches
  defaultLocale: "pl",
  localePrefix: "as-needed",

  pathnames: {
    "/about-us": {
      pl: "/o-nas",
      en: "/about-us",
    },
    "/contact": {
      pl: "/kontakt",
      en: "/contact",
    },
    "/our-brands": {
      pl: "/nasze-marki",
      en: "/our-brands",
    },
  },
});
