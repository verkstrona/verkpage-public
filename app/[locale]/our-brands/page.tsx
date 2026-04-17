import RevealingSections from "@/app/components/revealingSections";
import { useTranslations } from "next-intl";
import KV from "@/public/brandskv.jpg";
import KV2 from "@/public/brandskv2.jpg";
import KVverk from "@/public/LogoVerk.png";
import KVdivo from "@/public/LogoDivo.png";
import KVopex from "@/public/LogoOpex.png";
import KVprzyjaciele from "@/public/LogoPrzyjaciele.png";
import KVtobi from "@/public/LogoTobi.png";
import KVbailong from "@/public/LogoBailong.png";

import Image from "next/image";
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
      default: t("brandstitle"),
      template: `%s | Verk Group`,
    },
    description: t("brandsdescription"),
    keywords: t("brandskeywords"),
    // SEO i i18n
    alternates: {
      languages: {
        pl: "/pl",
        en: "/en",
      },
    },

    // Open Graph (social media)
    openGraph: {
      title: t("brandstitle"),
      description: t("brandsdescription"),
      locale: locale,
      type: "website",
    },
  };
}

export default function BrandsPage() {
  const t = useTranslations("BrandsPage");
  return (
    <>
      <section className="hero-section-about relative">
        <div className="text-box flex flex-col gap-2 container">
          <h1 className="text-center uppercase pb-6">{t("title")}</h1>
          <h2 className="text-center">{t("subheading")}</h2>
          <RevealingSections goinUp={false}>
            <p>{t("description1")}</p>
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
      <section className="disclaimer-section">
        <div className="container brands-disclaimer">
          <RevealingSections goinUp={false}>
            <p className="pb-4">{t("disclaimer1")}</p>
            <p>{t("disclaimer2")}</p>
          </RevealingSections>
        </div>
      </section>
      <section className="brands-section">
        <div className="container">
          <h2 className="opacity-75 pb-12 text-center max-[897px]:pb-16">
            {t("brandsListHeading")}
          </h2>
          <div className="grid gap-24 px-4 items-center justify-items-center">
            <RevealingSections goinUp={true}>
              <div>
                <h3 className="opacity-90 pb-8 max-[897px]:hidden">
                  {t("Verkheading")}
                </h3>
                <div className="brands-box">
                  <div>
                    <Image alt="Logo Verk Group" src={KVverk} />
                  </div>
                  <div className="flex flex-col gap-4 brands-textbox">
                    <h3 className="opacity-90 min-[897px]:hidden pb-4">
                      {t("Verkheading")}
                    </h3>
                    <p>{t("Verkdescription1")}</p>
                    <p>{t("Verkdescription2")}</p>
                  </div>
                </div>
              </div>
            </RevealingSections>
            <RevealingSections goinUp={true}>
              <div>
                <h3 className="opacity-90 pb-8 max-[897px]:hidden ">
                  {t("Divoheading")}
                </h3>
                <div className="brands-box">
                  <div>
                    <Image alt="Logo Divo" src={KVdivo} />
                  </div>
                  <div className="flex flex-col gap-4 brands-textbox">
                    <h3 className="opacity-90 min-[897px]:hidden pb-4">
                      {t("Divoheading")}
                    </h3>
                    <p>{t("Divodescription1")}</p>
                    <p>{t("Divodescription2")}</p>
                  </div>
                </div>
              </div>
            </RevealingSections>
            <RevealingSections goinUp={true}>
              <div>
                <h3 className="opacity-90 pb-8 max-[897px]:hidden">
                  {t("Opexheading")}
                </h3>
                <div className="brands-box">
                  <div>
                    <Image alt="Logo Opex Tools" src={KVopex} />
                  </div>
                  <div className="flex flex-col gap-4 brands-textbox">
                    <h3 className="opacity-90 min-[897px]:hidden  pb-4">
                      {t("Opexheading")}
                    </h3>
                    <p>{t("Opexdescription1")}</p>
                    <p>{t("Opexdescription2")}</p>
                  </div>
                </div>
              </div>
            </RevealingSections>
            <RevealingSections goinUp={true}>
              <div>
                <h3 className="opacity-90 pb-8 max-[897px]:hidden ">
                  {t("Przyjacieleheading")}
                </h3>
                <div className="brands-box">
                  <div>
                    <Image alt="Logo Przyjaciele" src={KVprzyjaciele} />
                  </div>
                  <div className="flex flex-col gap-4 brands-textbox">
                    <h3 className="opacity-90 min-[897px]:hidden pb-4">
                      {t("Przyjacieleheading")}
                    </h3>
                    <p>{t("Przyjaciedescription1")}</p>
                    <p>{t("Przyjaciedescription2")}</p>
                  </div>
                </div>
              </div>
            </RevealingSections>
            <RevealingSections goinUp={true}>
              <div>
                <h3 className="opacity-90 pb-8 max-[897px]:hidden ">
                  {t("Tobiheading")}
                </h3>
                <div className="brands-box">
                  <div>
                    <Image alt="Logo Tobi" src={KVtobi} />
                  </div>
                  <div className="flex flex-col gap-4 brands-textbox">
                    <h3 className="opacity-90 min-[897px]:hidden pb-4">
                      {t("Tobiheading")}
                    </h3>
                    <p>{t("Tobidescription1")}</p>
                    <p>{t("Tobidescription2")}</p>
                  </div>
                </div>
              </div>
            </RevealingSections>
            <RevealingSections goinUp={true}>
              <div>
                <h3 className="opacity-90 pb-8 max-[897px]:hidden ">
                  {t("Bailongheading")}
                </h3>
                <div className="brands-box">
                  <div>
                    <Image alt="Logo Bailong" src={KVbailong} />
                  </div>
                  <div className="flex flex-col gap-4 brands-textbox">
                    <h3 className="opacity-90 min-[897px]:hidden pb-4">
                      {t("Bailongheading")}
                    </h3>
                    <p>{t("Bailongdescription1")}</p>
                    <p>{t("Bailongdescription2")}</p>
                  </div>
                </div>
              </div>
            </RevealingSections>
          </div>
          <RevealingSections goinUp={false}>
            <div className="flex gap-16 pt-24 justify-center w-full items-center max-[897px]:flex-col min-h-70">
              {/* <Link
                className="btn-primary"
                href="https://verk.sklep.pl"
                target="_blank"
              >
                {t("shopLink")}
              </Link> */}
              <ButtonLinkHero
                btnText={t("shopLink")}
                btnType="btn-primary"
                width="w-fit"
              />
              <Link
                className="btn-secondary"
                href="https://internetowa-hurtownia.pl/main-cze.html"
                target="_blank"
              >
                {t("wholesaleLink")}
              </Link>
            </div>
          </RevealingSections>
        </div>
      </section>
      <section className="brandsdev-section">
        <RevealingSections goinUp={false}>
          <div className="container text-center">
            <h2 className="opacity-75 pb-12">
              {t("brandsDevelopmentHeading")}
            </h2>
            <p>{t("brandsDevelopmentDescription1")}</p>
            <p className="pb-8">{t("brandsDevelopmentDescription2")}</p>
            <Image src={KV2} alt="kv" className="w-full h-auto" />
          </div>
        </RevealingSections>
      </section>
    </>
  );
}
