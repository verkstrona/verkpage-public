import Link from "next/link";
import LocaleSwitcher from "./LocaleSwitcher";
import ThemeToggle from "./ThemeToggle";
import MobileNav from "./NavMobile";
import NavDesktop from "./NavDesktop";

export default function Navigation() {
  return (
    <nav className="navigation">
      <div>
        <Link href="/" className="font-bold">
          VERK GROUP
        </Link>
      </div>
      <div className="max-[780px]:hidden max-[980px]:text-3xl">
        <NavDesktop />
      </div>
      <div className="flex items-center justify-items-center gap-8">
        <ThemeToggle />
        <LocaleSwitcher />
        <div className="min-[780px]:hidden">
          <MobileNav />
        </div>
      </div>
    </nav>
  );
}
