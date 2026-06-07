import { useTranslations } from "next-intl";
import Image from "next/image";
import KV from "@/public/aboutuskv.jpg";
import KV2 from "@/public/aboutuskv2.jpg";
import KV3 from "@/public/aboutuskv3.jpg";
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
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import ButtonLinkHero from "@/app/components/ButtonLinkHero";

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
      default: t("abouttitle"),
      template: `%s | Verk Group`,
    },
    description: t("aboutdescription"),
    keywords: t("aboutkeywords"),
    // SEO i i18n
    alternates: {
      languages: {
        pl: "/pl",
        en: "/en",
      },
    },

    // Open Graph (social media)
    openGraph: {
      title: t("abouttitle"),
      description: t("aboutdescription"),
      locale: locale,
      type: "website",
    },
  };
}

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
            <p>{t("description3")}</p>
            <p>{t("description4")}</p>
            <p className="pb-8">{t("description5")}</p>
          </RevealingSections>
        </div>
        <Image
          alt={t("kvalt")}
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
                <Image alt={t("kv2alt")} src={KV2} />
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
              <div className="grid grid-cols-4 gap-4 max-[1150px]:grid-cols-3 max-[960px]:grid-cols-4 max-[960px]:gap-6 pr-12 max-[961px]:pr-0 max-[961px]:pb-12 max-[550px]:grid-cols-2 ">
                <div className="grid grid-cols-[35fr_65fr] items-center gap-2 p-4 border border-gray-400/20 rounded-2xl w-full flagbox">
                  <Image
                    alt={t("flagalt")}
                    src={flagcz}
                    className="rounded-full"
                  />
                  <p className="flag-p">{t("flagcz")}</p>
                </div>
                <div className="grid grid-cols-[35fr_65fr] items-center gap-2 p-4 border border-gray-400/20 rounded-2xl w-full flagbox">
                  <Image
                    alt={t("flagalt")}
                    src={flagnl}
                    className="rounded-full"
                  />
                  <p className="flag-p">{t("flagnl")}</p>
                </div>
                <div className="grid grid-cols-[35fr_65fr] items-center gap-2 p-4 border border-gray-400/20 rounded-2xl w-full flagbox">
                  <Image
                    alt={t("flagalt")}
                    src={flagsk}
                    className="rounded-full"
                  />
                  <p className="flag-p">{t("flagsk")}</p>
                </div>
                <div className="grid grid-cols-[35fr_65fr] items-center gap-2 p-4 border border-gray-400/20 rounded-2xl w-full flagbox">
                  <Image
                    alt={t("flagalt")}
                    src={flagsv}
                    className="rounded-full"
                  />
                  <p className="flag-p">{t("flagsv")}</p>
                </div>
                <div className="grid grid-cols-[35fr_65fr] items-center gap-2 p-4 border border-gray-400/20 rounded-2xl w-full flagbox">
                  <Image
                    alt={t("flagalt")}
                    src={flagde}
                    className="rounded-full"
                  />
                  <p className="flag-p">{t("flagde")}</p>
                </div>
                <div className="grid grid-cols-[35fr_65fr] items-center gap-2 p-4 border border-gray-400/20 rounded-2xl w-full flagbox">
                  <Image
                    alt={t("flagalt")}
                    src={flagpl}
                    className="rounded-full"
                  />
                  <p className="flag-p">{t("flagpl")}</p>
                </div>
                <div className="grid grid-cols-[35fr_65fr] items-center gap-2 p-4 border border-gray-400/20 rounded-2xl w-full flagbox">
                  <Image
                    alt={t("flagalt")}
                    src={flagee}
                    className="rounded-full"
                  />
                  <p className="flag-p">{t("flagee")}</p>
                </div>
                <div className="grid grid-cols-[35fr_65fr] items-center gap-2 p-4 border border-gray-400/20 rounded-2xl w-full flagbox">
                  <Image
                    alt={t("flagalt")}
                    src={flages}
                    className="rounded-full"
                  />
                  <p className="flag-p">{t("flages")}</p>
                </div>
                <div className="grid grid-cols-[35fr_65fr] items-center gap-2 p-4 border border-gray-400/20 rounded-2xl w-full flagbox">
                  <Image
                    alt={t("flagalt")}
                    src={flagfr}
                    className="rounded-full"
                  />
                  <p className="flag-p">{t("flagfr")}</p>
                </div>
                <div className="grid grid-cols-[35fr_65fr] items-center gap-2 p-4 border border-gray-400/20 rounded-2xl w-full flagbox">
                  <Image
                    alt={t("flagalt")}
                    src={flagit}
                    className="rounded-full"
                  />
                  <p className="flag-p">{t("flagit")}</p>
                </div>
                <div className="grid grid-cols-[35fr_65fr] items-center gap-2 p-4 border border-gray-400/20 rounded-2xl w-full flagbox">
                  <Image
                    alt={t("flagalt")}
                    src={flagro}
                    className="rounded-full"
                  />
                  <p className="flag-p">{t("flagro")}</p>
                </div>
                <div className="grid grid-cols-[35fr_65fr] items-center gap-2 p-4 border border-gray-400/20 rounded-2xl w-full flagbox">
                  <Image
                    alt={t("flagalt")}
                    src={flaglt}
                    className="rounded-full"
                  />
                  <p className="flag-p">{t("flaglt")}</p>
                </div>
                <div className="grid grid-cols-[35fr_65fr] items-center gap-2 p-4 border border-gray-400/20 rounded-2xl w-full flagbox">
                  <Image
                    alt={t("flagalt")}
                    src={flaglv}
                    className="rounded-full"
                  />
                  <p className="flag-p">{t("flaglv")}</p>
                </div>
                <div className="grid grid-cols-[35fr_65fr] items-center gap-2 p-4 border border-gray-400/20 rounded-2xl w-full flagbox">
                  <Image
                    alt={t("flagalt")}
                    src={flagbg}
                    className="rounded-full"
                  />
                  <p className="flag-p">{t("flagbg")}</p>
                </div>
                <div className="grid grid-cols-[35fr_65fr] items-center gap-2 p-4 border border-gray-400/20 rounded-2xl w-full flagbox">
                  <Image
                    alt={t("flagalt")}
                    src={flaghu}
                    className="rounded-full"
                  />
                  <p className="flag-p">{t("flaghu")}</p>
                </div>
                <div className="grid grid-cols-[35fr_65fr] items-center gap-2 p-4 border border-gray-400/20 rounded-2xl w-full flagbox">
                  <Image
                    alt={t("flagalt")}
                    src={flagct}
                    className="rounded-full"
                  />
                  <p className="flag-p">{t("flagct")}</p>
                </div>
              </div>
              <div className="pl-12 max-[961px]:pl-0 max-[960px]:pt-12 border-l border-gray-400/20 max-[961px]:border-t max-[961px]:border-l-0">
                <div className="max-[961px]:px-4 pt-12 max-[960px]:pt-0">
                  <div className="py-8 text-justify max-[960px]:py-4 ">
                    <p className="pb-4">{t("wherewesaleDescription1")}</p>
                    <p className="pb-4">{t("wherewesaleDescription2")}</p>
                  </div>
                </div>
                <div className="flex gap-16 py-8 justify-center w-full items-center max-[525px]:flex-col relative min-h-70">
                  {/* <Link
                    href="https://verk.sklep.pl/"
                    target="_blank"
                    className="btn-primary"
                  >
                    {t("wherewesaleshopLink")}
                  </Link> */}
                  <ButtonLinkHero
                    btnText={t("wherewesaleshopLink")}
                    btnType="btn-primary"
                    width="w-fit"
                  />
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
                <Image alt={t("kv3alt")} src={KV3} />
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
