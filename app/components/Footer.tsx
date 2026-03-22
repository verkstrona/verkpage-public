import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className="pt-12 pb-8 border-b-2 border-[#AD2B10]">
      <div className="container text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Verk Group. {t("rights")}
        </p>
      </div>
    </footer>
  );
}
