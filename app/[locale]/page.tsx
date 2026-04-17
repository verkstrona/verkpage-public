import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import KV from "@/public/kv3New.png";
import KV5 from "@/public/kv5.jpg";
import UseTransition from "../components/TextTransitions";
import IMGMap from "@/public/mapa4.png";
import IMGgrid1 from "@/public/LogoBrandsVerk.png";
import IMGgrid2 from "@/public/LogoBrandsDivo.png";
import IMGgrid3 from "@/public/LogoBrandsOpex.png";
import IMGgrid4 from "@/public/LogoBrandsPrzyjaciele.png";
import IMGgrid5 from "@/public/LogoBrandsTobi.png";
import IMGgrid6 from "@/public/LogoBrandsBailong.png";
import RevealingSections from "../components/revealingSections";
import Partners from "../components/Partners";
import Map from "../components/GoogleMap";
import ButtonLinkHero from "../components/ButtonLinkHero";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <>
      <section className="hero-section relative">
        <div className="text-box flex flex-col gap-2">
          <h1 className="text-center uppercase pb-6">{t("title")}</h1>
          {/* <h2 className="pb-4">{t("subheading")}</h2> */}

          <h2 className="text-center">
            <UseTransition />
          </h2>

          <p>{t("description1")}</p>
          <p>{t("description2")}</p>
          <div className="hero-btn-box pt-10">
            <Link href="/about-us" className="btn1">
              {t("aboutLink")}
            </Link>
            {/* <Link
              href="https://verk.sklep.pl/"
              target="_blank"
              className="btn2"
            >
              {t("brandsLink")}
            </Link> */}
            <ButtonLinkHero
              btnText={t("brandsLink")}
              btnType="btn2"
              width="w-full"
            />
          </div>
        </div>
        <div className="h-full w-full p-8 grid items-center">
          <Image
            src={KV}
            alt={t("kvalt")}
            className="hero-kv-box-img self-center justify-self-center"
          />
        </div>
        <Image
          alt={t("kv2alt")}
          src={KV5}
          fill
          quality={100}
          objectFit="cover"
          className="z-[-1] max-md:object-left object-center"
        />
      </section>

      <RevealingSections goinUp={false}>
        <Partners />
      </RevealingSections>

      <section className="about-section relative my-0 overflow-hidden">
        <div className="container">
          <RevealingSections goinUp={true}>
            <h2 className="opacity-75">{t("aboutHeading")}</h2>
            <div className="px-4 pt-12">
              <h3 className="opacity-90">{t("aboutSubheading")}</h3>
              <div className="py-8 w-full sm:w-[60%] text-justify ">
                <p className="pb-4">{t("aboutDescription1")}</p>
                <p className="pb-4">{t("aboutDescription2")}</p>
                <p>{t("aboutDescription3")}</p>
              </div>
            </div>
            <div className="flex gap-16 py-8 justify-center w-full md:w-[60%]  items-center max-[525px]:flex-col">
              <Link
                href="https://www.opineo.pl/opinie/verk-sklep-pl"
                target="_blank"
                className="btn-primary"
              >
                {t("reviewsLink")}
              </Link>
              <Link href="/about-us" className="btn-secondary">
                {t("learnMoreLink")}
              </Link>
            </div>
          </RevealingSections>
        </div>
        <Image
          alt={t("kv3alt")}
          src={IMGMap}
          fill
          className="w-full h-auto z-[-1] opacity-40 transform translate-x-24 object-contain object-right max-[930px]:object-cover max-[930px]:object-left max-[930px]:opacity-20 max-sm:object-center max-sm:translate-x-0 max-sm:opacity-10 about-section-map"
        />
      </section>
      <section className="p-4 bg-[#CD1C18] text-[#fbf4f3] red-section">
        <RevealingSections goinUp={false}>
          <div className="container flex gap-12 justify-center max-sm:gap-8">
            <p className="red-p">{t("pros1")}</p>
            <p className="red-p">{t("pros2")}</p>
            <p className="red-p">{t("pros3")}</p>
          </div>
        </RevealingSections>
      </section>
      <section className="about-section my-0 overflow-hidden">
        <div className="container">
          <RevealingSections goinUp={true}>
            <h2 className="opacity-75">{t("brandsHeading")}</h2>
          </RevealingSections>
          <div className="px-4 pt-12">
            <RevealingSections goinUp={true}>
              <div className="pb-2 flex gap-12 max-[850px]:flex-col max-[850px]:gap-0 max-[850px]:pb-12">
                <div>
                  <h3 className="opacity-90">{t("brandsSubheading")}</h3>
                  <div className="py-8 text-justify">
                    <p className="pb-2">{t("brandsDescription1")}</p>
                  </div>
                </div>
                <div className="py-6 w-full  content-center text-center">
                  <Link href="/our-brands" className="btn-primary w-full">
                    {t("brandsSectionLink")}
                  </Link>
                </div>
              </div>
            </RevealingSections>
            <div>
              <RevealingSections goinUp={false}>
                <div className="grid grid-cols-3 gap-8 max-sm:grid-cols-2 max-sm:gap-4">
                  <Image
                    src={IMGgrid1}
                    // alt={t("kv4alt")}
                    alt="Logo Verk"
                    className="w-full h-auto brandsHomeImg"
                  />
                  <Image
                    src={IMGgrid2}
                    // alt={t("kv5alt")}
                    alt="Logo Divo"
                    className="w-full h-auto brandsHomeImg"
                  />
                  <Image
                    src={IMGgrid3}
                    // alt={t("kv6alt")}
                    alt="Logo Opex"
                    className="w-full h-auto brandsHomeImg"
                  />
                  <Image
                    src={IMGgrid4}
                    // alt={t("kv7alt")}
                    alt="Logo Przyjaciele"
                    className="w-full h-auto brandsHomeImg"
                  />
                  <Image
                    src={IMGgrid5}
                    // alt={t("kv8alt")}
                    alt="Logo Tobi"
                    className="w-full h-auto brandsHomeImg"
                  />
                  <Image
                    src={IMGgrid6}
                    // alt={t("kv9alt")}
                    alt="Logo Bailong"
                    className="w-full h-auto brandsHomeImg"
                  />
                </div>
              </RevealingSections>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section my-0 overflow-hidden">
        <div className="container">
          <RevealingSections goinUp={true}>
            <h2 className="opacity-75">{t("contactHeading")}</h2>
            <div className="px-4 pt-12 text-center pb-8">
              <div>
                <h3 className="opacity-90">{t("contactSubheading")}</h3>
                <div className="py-8 text-center">
                  <p className="pb-2">{t("contactDescription")}</p>
                </div>
              </div>
              <div className="py-6 w-full  content-center text-center">
                <Link href="/contact" className="btn-primary w-full">
                  {t("contactLink")}
                </Link>
              </div>
            </div>
          </RevealingSections>
        </div>
      </section>
      <section>
        <RevealingSections goinUp={false}>
          <Map />
        </RevealingSections>
      </section>
    </>
  );
}
