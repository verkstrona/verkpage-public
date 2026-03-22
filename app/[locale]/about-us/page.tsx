import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("AboutPage");
  return (
    <div className="h-screen grid place-items-center">
      <h1 className="text-[-var(--font-color)]">{t("title")}</h1>
    </div>
  );
}
