import RevealingSections from "@/app/components/revealingSections";
import { useTranslations } from "next-intl";
import Image from "next/image";
import KV from "@/public/contactkv.png";
import Link from "next/link";

export default function ContactPage() {
  const t = useTranslations("ContactPage");
  return (
    <>
      <section className="hero-section-about relative">
        <div className="text-box flex flex-col gap-2 container">
          <h1 className="text-center uppercase pb-6">{t("title")}</h1>

          <RevealingSections goinUp={false}>
            <h2>{t("subheading1")}</h2>
            <h2>{t("subheading2")}</h2>
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
      <section className="disclaimer-section">
        <div className="container brands-disclaimer">
          <RevealingSections goinUp={false}>
            <p className="pb-4">{t("disclaimer1")}</p>
            <p>{t("disclaimer2")}</p>
          </RevealingSections>
        </div>
      </section>
      <section className="contact-section my-0 overflow-hidden contact-section-gradient1">
        <div className="container">
          <RevealingSections goinUp={true}>
            <h2 className="opacity-75">{t("detailSectionHeading")}</h2>
            <div className="px-4 pt-8">
              <div className="py-8  max-[960px]:py-4">
                <p className="pb-6">
                  {t("detailmobilePhone")}{" "}
                  <br className="min-[450px]:hidden"></br>
                  <span>
                    <Link href="tel:+48123456789">+48 123 456 789</Link>
                  </span>
                </p>
                <p className="pb-6">
                  {t("detailphoneNumber")}{" "}
                  <br className="min-[450px]:hidden"></br>
                  <span>
                    <Link href="tel:+48123456789">+48 123 456 789</Link>
                  </span>
                </p>
                <p className="pb-6">
                  {t("detailworkingHours1")}
                  <br className="min-[450px]:hidden"></br>{" "}
                  {t("detailworkingHours2")}
                </p>
                <p className="pb-6">
                  {t("detailemail")} <br className="min-[450px]:hidden"></br>
                  <span>
                    <Link href="mailto:zamowienia@verk.sklep.pl">
                      zamowienia@verk.sklep.pl
                    </Link>
                  </span>
                </p>
              </div>
            </div>
          </RevealingSections>

          <RevealingSections goinUp={true}>
            <h2 className="opacity-75 pt-14">{t("wholeSectionHeading")}</h2>
            <div className="px-4 pt-8">
              <div className="py-8 max-[960px]:py-4">
                <p className="pb-6">
                  {t("wholemobilePhone")}{" "}
                  <br className="min-[450px]:hidden"></br>
                  <span>
                    <Link href="tel:+48123456789">+48 123 456 789</Link>
                  </span>
                </p>
                <p className="pb-6">
                  {t("wholephoneNumber")}{" "}
                  <br className="min-[450px]:hidden"></br>
                  <span>
                    <Link href="tel:+48123456789">+48 123 456 789</Link>
                  </span>
                </p>
                <p className="pb-6">
                  {t("wholeworkingHours1")}
                  <br className="min-[450px]:hidden"></br>{" "}
                  {t("wholeworkingHours2")}
                </p>
                <p className="pb-6">
                  {t("wholeemail")} <br className="min-[450px]:hidden"></br>
                  <span>
                    <Link href="mailto:zamowienia@internetowa-hurtownia.pl">
                      zamowienia@internetowa-hurtownia.pl
                    </Link>
                  </span>
                </p>
              </div>
            </div>
          </RevealingSections>
        </div>
      </section>
      <section className="contact-section my-0 overflow-hidden contact-section-gradient2">
        <div className="container">
          <RevealingSections goinUp={true}>
            <h2 className="opacity-75">{t("registerSectionHeading")}</h2>
            <div className="px-4 pt-8">
              <div className="py-8  max-[960px]:py-4">
                <p className="pb-6">{t("companyName")} </p>
                <p className="pb-6">{t("address1")} </p>
                <p className="pb-6">{t("address2")} </p>
                <p className="pb-6">{t("taxId")} </p>
                <p className="pb-6">{t("regonId")} </p>
                <p className="pb-6">{t("numberId")} </p>
              </div>
            </div>
          </RevealingSections>
          <RevealingSections goinUp={true}>
            <h2 className="opacity-75 pt-16">{t("paymentSectionHeading")}</h2>
            <div className="flex justify-between max-[900px]:flex-col ">
              <div className="px-4 pt-8">
                <div className="py-8  max-[960px]:py-4">
                  <h3 className="pb-8">{t("retailPaymentTitle")}</h3>
                  <p className="pb-4">{t("retailBankName")} </p>
                  <p className="pb-4">
                    {t("retailAccountNumber")}
                    <br className="min-[450px]:hidden"></br> 92 1600 1462 1085
                    2473 6000 0001
                  </p>
                  <p className="pb-4">{t("retailSwift")} </p>
                </div>
              </div>

              <div className="px-4 pt-8 max-[900px]:pt-0">
                <div className="py-8  max-[960px]:py-4">
                  <h3 className="pb-8">{t("wholesalePaymentTitle")}</h3>
                  <p className="pb-4">{t("wholesaleBankName")} </p>
                  <p className="pb-4">
                    {t("wholesaleAccountNumber")}
                    <br className="min-[450px]:hidden"></br> 70 1160 2202 0000
                    0004 9782 4690
                  </p>
                  <p className="pb-4">{t("wholesaleSwift")} </p>
                </div>
              </div>
            </div>
          </RevealingSections>
        </div>
      </section>
      <section className="contact-section my-0 overflow-hidden">
        <div className="container">
          <RevealingSections goinUp={true}>
            <h2 className="opacity-75">{t("privacyHeading")}</h2>
            <div className="px-4 pt-8 flex justify-between max-[900px]:flex-col">
              <div className="py-8  max-[960px]:py-4">
                <p className="pb-6">{t("privacyDescription1")} </p>
                <p className="pb-6">{t("privacyDescription2")} </p>
              </div>
              <Link
                href="/privacy-policy"
                className="btn-primary mt-8 h-min max-[900px]:w-fit self-center"
              >
                {t("privacyLink")}
              </Link>
            </div>
          </RevealingSections>
        </div>
      </section>
    </>
  );
}
