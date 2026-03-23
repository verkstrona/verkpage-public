import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import KV from "@/public/kv3.png";
import KV4 from "@/public/kv4.png";
import Couriers from "../components/Couriers";
import UseTransition from "../components/TextTransitions";
import IMGMap from "@/public/mapa3.png";
import IMGgrid1 from "@/public/homeGrid1.png";
import IMGgrid2 from "@/public/homeGrid2.png";
import IMGgrid3 from "@/public/homeGrid3.png";
import IMGgrid4 from "@/public/homeGrid4.png";
import IMGgrid5 from "@/public/homeGrid5.png";
import IMGgrid6 from "@/public/homeGrid6.png";
import RevealingSections from "../components/revealingSections";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <>
      <div className="hero-section relative">
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
            <Link
              href="https://verk.sklep.pl/"
              target="_blank"
              className="btn2"
            >
              {t("brandsLink")}
            </Link>
          </div>
        </div>
        <div className="h-full w-full p-8 grid items-center">
          <Image
            src={KV}
            alt="kv"
            className="hero-kv-box-img self-center justify-self-center"
          />
        </div>
        <Image
          alt="Key Visual"
          src={KV4}
          fill
          objectPosition="center"
          objectFit="cover"
          className="z-[-1]"
        />
      </div>

      <Couriers />

      <section className="about-section relative my-0 overflow-hidden">
        <div className="container">
          <RevealingSections goinUp={true}>
            <h2 className="opacity-75">{t("aboutHeading")}</h2>
            <div className="px-4 pt-12">
              <h3 className="opacity-90">{t("aboutSubheading")}</h3>
              <div className="py-8 w-full sm:w-[60%] text-justify">
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
          alt="map"
          src={IMGMap}
          fill
          className="w-full h-auto z-[-1] opacity-40 transform translate-x-24 object-contain object-right max-[930px]:object-cover max-[930px]:object-left max-sm:object-center max-sm:translate-x-0 max-sm:opacity-10"
        />
      </section>
      <section className="p-4 bg-[#AD2B10] text-[#fbf4f3] red-section">
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
                <div className="grid grid-cols-3 gap-4 max-sm:grid-cols-2">
                  <Image
                    src={IMGgrid1}
                    alt="brand1"
                    className="w-full h-auto"
                  />
                  <Image
                    src={IMGgrid2}
                    alt="brand2"
                    className="w-full h-auto"
                  />
                  <Image
                    src={IMGgrid3}
                    alt="brand3"
                    className="w-full h-auto"
                  />
                  <Image
                    src={IMGgrid4}
                    alt="brand4"
                    className="w-full h-auto"
                  />
                  <Image
                    src={IMGgrid5}
                    alt="brand5"
                    className="w-full h-auto"
                  />
                  <Image
                    src={IMGgrid6}
                    alt="brand6"
                    className="w-full h-auto"
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
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d612.4162481095191!2d20.92944121783502!3d52.12222397902865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471933c804dfdc5f%3A0x280d20cbe895a290!2sInternetowa-hurtownia.pl%20Verk%20Group%20-%20Hurtownia%20wielobran%C5%BCowa!5e0!3m2!1spl!2spl!4v1774205981888!5m2!1spl!2spl"
            loading="lazy"
            className="opacity-80 grayscale-25 transition-opacity duration-300 hover:opacity-100 w-full h-192 border-0 max-sm:h-125"
          ></iframe>
        </RevealingSections>
      </section>
    </>
  );
}
