"use client";

import { createContext, useContext, useEffect, useState } from "react";

type CookieContextType = {
  consent: boolean;
  loaded: boolean;
  accept: () => void;
  decline: () => void;
};

const CookieContext = createContext<CookieContextType | null>(null);

export const CookieProvider = ({ children }: { children: React.ReactNode }) => {
  const [consent, setConsent] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("cookie_consent");

    if (saved !== null) {
      setConsent(saved === "true");
    }

    setLoaded(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie_consent", "true");
    setConsent(true);
  };

  const decline = () => {
    localStorage.setItem("cookie_consent", "false");
    setConsent(false);
  };

  return (
    <CookieContext.Provider value={{ consent, loaded, accept, decline }}>
      {children}
    </CookieContext.Provider>
  );
};

export const useCookie = () => {
  const context = useContext(CookieContext);
  if (!context) throw new Error("useCookie must be used inside CookieProvider");
  return context;
};
