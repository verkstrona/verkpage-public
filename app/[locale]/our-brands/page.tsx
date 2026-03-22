import { useTranslations } from "next-intl";

export default function BrandsPage() {
  const t = useTranslations("BrandsPage");
  return (
    <section>
      <h1>{t("title")}</h1>
    </section>
  );
}
