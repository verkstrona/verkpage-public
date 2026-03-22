import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("AboutPage");
  return (
    <div className="h-[1800px]">
      <h1>{t("title")}</h1>
    </div>
  );
}
