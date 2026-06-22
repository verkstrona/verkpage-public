"use client";

import { createContext, useContext, useEffect, useState } from "react";

type CookieConsent = {
  analytics: boolean;
  maps: boolean;
};

type CookieContextType = {
  consent: CookieConsent;
  loaded: boolean;
  showBanner: boolean;

  acceptAll: () => void;
  declineAll: () => void;
  saveSelected: (value: CookieConsent) => void;

  openSettings: () => void;
  closeBanner: () => void;
};

const CookieContext = createContext<CookieContextType | null>(null);

const defaultConsent: CookieConsent = {
  analytics: false,
  maps: false,
};

export const CookieProvider = ({ children }: { children: React.ReactNode }) => {
  const [consent, setConsent] = useState<CookieConsent>(defaultConsent);
  const [loaded, setLoaded] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  // optional: reopen banner manually
  const [manuallyOpened, setManuallyOpened] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("cookie_consent");

    if (saved) {
      setConsent(JSON.parse(saved));
      setShowBanner(false);
    } else {
      setShowBanner(true);
    }

    setLoaded(true);
  }, []);

  const saveToStorage = (value: CookieConsent) => {
    localStorage.setItem("cookie_consent", JSON.stringify(value));
    setConsent(value);
  };

  const acceptAll = () => {
    saveToStorage({
      analytics: true,
      maps: true,
    });

    setShowBanner(false);
    setManuallyOpened(false);
  };

  const declineAll = () => {
    saveToStorage({
      analytics: false,
      maps: false,
    });

    setShowBanner(false);
    setManuallyOpened(false);
  };

  const saveSelected = (value: CookieConsent) => {
    saveToStorage(value);

    setShowBanner(false);
    setManuallyOpened(false);
  };

  const openSettings = () => {
    setManuallyOpened(true);
    setShowBanner(true);
  };

  const closeBanner = () => {
    setShowBanner(false);
    setManuallyOpened(false);
  };

  return (
    <CookieContext.Provider
      value={{
        consent,
        loaded,
        showBanner,
        acceptAll,
        declineAll,
        saveSelected,
        openSettings,
        closeBanner,
      }}
    >
      {children}
    </CookieContext.Provider>
  );
};

export const useCookie = () => {
  const context = useContext(CookieContext);

  if (!context) {
    throw new Error("useCookie must be used inside CookieProvider");
  }

  return context;
};
