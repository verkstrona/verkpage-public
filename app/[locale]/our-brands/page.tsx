import { useTranslations } from "next-intl";

export default function BrandsPage() {
  const t = useTranslations("BrandsPage");
  return (
    <section className="h-screen grid place-items-center">
      <h1 className="text-[-var(--font-color)]">{t("title")}</h1>
    </section>
  );
}
