import RevealingSections from "@/app/components/revealingSections";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function PrivacyPage() {
  const t = useTranslations("PrivacyPolicyPage");
  return (
    <>
      <section className="privacy-hero-section ">
        <div className="text-box flex flex-col gap-2 container pt-12">
          <h1 className="text-center uppercase pb-6">{t("title")}</h1>

          <RevealingSections goinUp={false}>
            <h2>{t("subheading")}</h2>
            <div className="py-8">
              <p>{t("description1")}</p>
              <p className="pt-4">{t("description2")}</p>
            </div>
          </RevealingSections>
        </div>
      </section>
      <section className="privacy-section my-0 overflow-hidden">
        <div className="container">
          <div className="pb-12">
            <h2 className="pb-4">{t("generalHeading")}</h2>
            <p className="pb-2">{t("generalDescription1")}</p>
            <p>{t("generalDescription2")}</p>
          </div>
          <div className="pb-12">
            <h2 className="pb-4">{t("rangeHeading")}</h2>
            <p className="pb-2">{t("rangeDescription1")}</p>
            <p>{t("rangeDescription2")}</p>
            <ul>
              <li>{t("rangeList1")}</li>
              <li>{t("rangeList2")}</li>
              <li>{t("rangeList3")}</li>
            </ul>
          </div>
          <div className="pb-12">
            <h2 className="pb-4">{t("purposeHeading")}</h2>
            <p className="pb-2">{t("purposeDescription1")}</p>
            <ul>
              <li>{t("purposeList1")}</li>
              <li>{t("purposeList2")}</li>
              <li>{t("purposeList3")}</li>
              <li>{t("purposeList4")}</li>
            </ul>
          </div>
          <div className="pb-12">
            <h2 className="pb-4">{t("analyticsHeading")}</h2>
            <p className="pb-2">{t("analyticsDescription1")}</p>
            <p className="pb-2">{t("analyticsDescription2")}</p>
            <ul className="pb-2">
              <li>{t("analyticsList1")}</li>
              <li>{t("analyticsList2")}</li>
              <li>{t("analyticsList3")}</li>
            </ul>
            <p>{t("analyticsDescription3")}</p>
          </div>
          <div className="pb-12">
            <h2 className="pb-4">{t("mapsHeading")}</h2>
            <p className="pb-2">{t("mapsDescription1")}</p>
            <p>{t("mapsDescription2")}</p>
          </div>
          <div className="pb-12">
            <h2 className="pb-4">{t("cookiesHeading")}</h2>
            <p className="pb-2">{t("cookiesDescription1")}</p>
            <ul className="pb-2">
              <li>{t("cookiesList1")}</li>
              <li>{t("cookiesList2")}</li>
            </ul>
            <p className="pb-2">{t("cookiesDescription2")}</p>
          </div>
          <div className="pb-12">
            <h2 className="pb-4">{t("rightsHeading")}</h2>
            <p className="pb-2">{t("rightsDescription1")}</p>
            <ul className="pb-2">
              <li>{t("rightsList1")}</li>
              <li>{t("rightsList2")}</li>
              <li>{t("rightsList3")}</li>
              <li>{t("rightsList4")}</li>
              <li>{t("rightsList5")}</li>
            </ul>
          </div>
          <div className="pb-12">
            <h2 className="pb-4">{t("contactHeading")}</h2>
            <p className="pb-2">
              {t("contactDescription1")}{" "}
              <Link href="mailto:zamowienia@verk.sklep.pl">
                zamowienia@verk.sklep.pl
              </Link>
            </p>
          </div>
          <div className="pb-12">
            <h2 className="pb-4">{t("changesHeading")}</h2>
            <p className="pb-2">{t("changesDescription1")}</p>
          </div>
        </div>
      </section>
    </>
  );
}
