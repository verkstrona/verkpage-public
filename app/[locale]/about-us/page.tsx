import { useTranslations } from "next-intl";
import Image from "next/image";
import KV from "@/public/aboutuskv.png";
import KV2 from "@/public/aboutuskv2.png";
import KV3 from "@/public/aboutuskv3.png";
import flagcz from "@/public/flagcz.png";
import flagde from "@/public/flagde.png";
import flagfr from "@/public/flagfr.png";
import flagit from "@/public/flagit.png";
import flagnl from "@/public/flagnl.png";
import flagpl from "@/public/flagpl.png";
import flagsk from "@/public/flagsk.png";
import flagsv from "@/public/flagsv.png";
import flagee from "@/public/flagee.png";
import flages from "@/public/flages.png";
import flagro from "@/public/flagro.png";
import flaglt from "@/public/flaglt.png";
import flaglv from "@/public/flaglv.png";
import flagbg from "@/public/flagbg.png";
import flaghu from "@/public/flaghu.png";
import flagct from "@/public/flagct.png";

import UseTransitionAbout from "@/app/components/TextTransitionsAbout";
import RevealingSections from "@/app/components/revealingSections";
import CountUpComponent from "@/app/components/CountUp";
import Link from "next/link";

export default function AboutPage() {
  const t = useTranslations("AboutPage");
  return (
    <>
      <section className="hero-section-about relative">
        <div className="text-box flex flex-col gap-2 container">
          <h1 className="text-center uppercase pb-6">{t("title")}</h1>
          <h2 className="text-center">
            <UseTransitionAbout />
          </h2>
          <RevealingSections goinUp={false}>
            <p>{t("description1")}</p>
            <p>{t("description2")}</p>
          </RevealingSections>
        </div>
        <Image
          alt="Key Visual"
          src={KV}
          fill
          quality={100}
          objectFit="cover"
          className="z-[-1] max-md:object-left object-center"
        />
      </section>
      <section className="howwework-section  my-0 overflow-hidden">
        <RevealingSections goinUp={true}>
          <div className="container">
            <h2 className="opacity-75 pb-12">{t("howweworkHeading")}</h2>
            <div className="howwework-box">
              <div>
                <div className="px-4 pt-12 max-[960px]:pt-0">
                  <div className="py-8 text-justify max-[960px]:py-4">
                    <p className="pb-4">{t("howweworkDescription1")}</p>
                    <p className="pb-4">{t("howweworkDescription2")}</p>
                  </div>
                </div>
                <div className="flex gap-16 py-8 justify-center w-full">
                  <Link href="/contact" className="btn-primary">
                    {t("aboutuscontactLink")}
                  </Link>
                </div>
              </div>
              <div className="gridRow-1">
                <Image alt="map" src={KV2} />
              </div>
            </div>
          </div>
        </RevealingSections>
      </section>
      <section className="howwework-section  my-0 overflow-hidden">
        <RevealingSections goinUp={true}>
          <div className="container">
            <h2 className="opacity-75 pb-12">{t("wherewesaleHeading")}</h2>
            <div className="wherewework-box">
              <div className="grid grid-cols-4 gap-6 max-[960px]:grid-cols-8 max-[960px]:gap-2">
                <Image alt="map" src={flagcz} />
                <Image alt="map" src={flagnl} />
                <Image alt="map" src={flagsk} />
                <Image alt="map" src={flagsv} />
                <Image alt="map" src={flagde} />
                <Image alt="map" src={flagpl} />
                <Image alt="map" src={flagee} />
                <Image alt="map" src={flages} />
                <Image alt="map" src={flagfr} />
                <Image alt="map" src={flagit} />
                <Image alt="map" src={flagro} />
                <Image alt="map" src={flaglt} />
                <Image alt="map" src={flaglv} />
                <Image alt="map" src={flagbg} />
                <Image alt="map" src={flaghu} />
                <Image alt="map" src={flagct} />
              </div>
              <div>
                <div className="px-4 pt-12 max-[960px]:pt-0">
                  <div className="py-8 text-justify max-[960px]:py-4">
                    <p className="pb-4">{t("wherewesaleDescription1")}</p>
                    <p className="pb-4">{t("wherewesaleDescription2")}</p>
                  </div>
                </div>
                <div className="flex gap-16 py-8 justify-center w-full items-center max-[525px]:flex-col">
                  <Link
                    href="https://verk.sklep.pl/"
                    target="_blank"
                    className="btn-primary"
                  >
                    {t("wherewesaleshopLink")}
                  </Link>
                  <Link
                    href="https://internetowa-hurtownia.pl/"
                    target="_blank"
                    className="btn-secondary"
                  >
                    {t("wherewesalewarehouseLink")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </RevealingSections>
      </section>
      <section className="howwework-section  my-0 overflow-hidden">
        <RevealingSections goinUp={true}>
          <div className="container">
            <h2 className="opacity-75 pb-12">{t("trustandscaleHeading")}</h2>
            <div className="trust-box">
              <div>
                <div className="px-4 pt-12 max-[688px]:pt-0">
                  <div className="py-8 text-justify max-[688px]:py-4">
                    <p className="pb-4">{t("trustandscaleDescription1")}</p>
                    <p className="pb-4">{t("trustandscaleDescription2")}</p>
                  </div>
                </div>
              </div>
              <div className="gridRowSmall-1">
                <Image alt="map" src={KV3} />
              </div>
            </div>
            <div className="mt-12">
              <CountUpComponent />
            </div>
          </div>
        </RevealingSections>
      </section>
    </>
  );
}
