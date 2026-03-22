"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  function switchLocale(nextLocale: string) {
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <div className="flex gap-2">
      <select
        className="cursor-pointer"
        value={locale}
        onChange={(e) => switchLocale(e.target.value)}
      >
        {["en", "pl"].map((cur) => (
          <option
            className="cursor-pointer bg-[#AD2B10]"
            value={cur}
            key={cur}
            style={{ fontWeight: locale === cur ? "bold" : "normal" }}
          >
            {/* <button
              className="cursor-pointer"
              key={cur}
              onClick={() => switchLocale(cur)}
              style={{ fontWeight: locale === cur ? "bold" : "normal" }}
            >
              {cur.toUpperCase()}
            </button> */}
            {cur.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}
