"use client";

import CountUp from "react-countup";
import { use, useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import RevealingSections from "./revealingSections";

export default function CountUpComponent() {
  const t = useTranslations("AboutPage");
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
      }
    });

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {visible && (
        <div className="grid grid-cols-2 gap-12 trust-count-box max-[700px]:grid-cols-1">
          <p>
            <CountUp end={4500} duration={3} suffix="+" />

            <br></br>
            {t("truststats1")}
          </p>
          <p>
            <CountUp end={97} duration={3} suffix="%" />
            <br></br> {t("truststats2")}
          </p>
          <RevealingSections goinUp={false}>
            <p>{t("truststats3")}</p>
          </RevealingSections>
          <RevealingSections goinUp={false}>
            <p>{t("truststats4")}</p>
          </RevealingSections>
        </div>
      )}
    </div>
  );
}
