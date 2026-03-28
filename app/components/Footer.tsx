import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className="border-b-2 border-[#CD1C18]">
      <div className="container text-center">
        <p className="p-footer">
          &copy; {new Date().getFullYear()} Verk Group. {t("rights")}
        </p>
      </div>
    </footer>
  );
}
