"use client";
import { Cookie } from "lucide-react";
import { useCookie } from "@/app/context/CookieContext";

export default function CookieSettingsButton() {
  const { openSettings } = useCookie();

  return (
    <button
      onClick={openSettings}
      className="fixed bottom-6 right-6 z-50  p-3 rounded-full shadow-lg hover:scale-105 transition cursor-pointer cookie-btn"
      aria-label="Cookie settings"
    >
      <Cookie size={20} />
    </button>
  );
}
