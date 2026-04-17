import IMGempik from "@/public/EmpikLogo.png";
import IMGempikwhite from "@/public/EmpikLogoWhite.png";
import IMGerli from "@/public/LogoErli.png";
import IMGallegro from "@/public/AllegroLogo.png";
import IMGtemu from "@/public/temuLogo.png";
import IMGceneo from "@/public/CeneoLogo.png";
import IMGverk from "@/public/LogoVerk.png";
import IMGdivo from "@/public/LogoDivo.png";
import Image from "next/image";
import Link from "next/link";

export default function Partners() {
  return (
    <section className="cards-section">
      <div className="carousel">
        <div className="group">
          <div className="last-card">
            <Link
              href="https://www.empik.com/sklepy/verk-group,8531,m"
              target="_blank"
            >
              <Image src={IMGempik} alt="Empik" className="card image-dark" />
              <Image
                src={IMGempikwhite}
                alt="Empik"
                className="card image-white"
              />
            </Link>
          </div>
          <div>
            <Link href="https://verksklep.erli.pl/" target="_blank">
              <Image src={IMGerli} alt="Erli" className="card" />
            </Link>
          </div>
          <div>
            <Link
              href="https://www.temu.com/pl/mall.html?_bg_fs=1&mall_id=670702093257930&parent_order_sn=PO-162-15019089690233550&_x_sessn_id=s0k7rv6b3h&refer_page_name=bgt_order_detail&refer_page_id=10045_1750144734986_i5f35idu15&refer_page_sn=10045"
              target="_blank"
            >
              <Image src={IMGtemu} alt="Temu" className="card" />
            </Link>
          </div>
          <div>
            <Link
              href="https://allegro.pl/uzytkownik/tanio-wysylamy/sklep"
              target="_blank"
            >
              <Image src={IMGallegro} alt="Allegro" className="card" />
            </Link>
          </div>
          <div>
            <Link
              href="https://www.ceneo.pl/sklepy/VERK-GROUP-s43296"
              target="_blank"
            >
              <Image src={IMGceneo} alt="Ceneo" className="card" />
            </Link>
          </div>
          <div>
            <Link href="https://verk.sklep.pl/" target="_blank">
              <Image src={IMGverk} alt="Verk" className="card" />
            </Link>
          </div>
          <div>
            <Link href="https://divogarden.eu/" target="_blank">
              <Image src={IMGdivo} alt="Divo" className="card" />
            </Link>
          </div>
        </div>
        <div aria-hidden className="group">
          <div className="last-card">
            <Link
              href="https://www.empik.com/sklepy/verk-group,8531,m"
              target="_blank"
            >
              <Image src={IMGempik} alt="Empik" className="card image-dark" />
              <Image
                src={IMGempikwhite}
                alt="Empik"
                className="card image-white"
              />
            </Link>
          </div>
          <div>
            <Link href="https://verksklep.erli.pl/" target="_blank">
              <Image src={IMGerli} alt="Erli" className="card" />
            </Link>
          </div>
          <div>
            <Link
              href="https://www.temu.com/pl/mall.html?_bg_fs=1&mall_id=670702093257930&parent_order_sn=PO-162-15019089690233550&_x_sessn_id=s0k7rv6b3h&refer_page_name=bgt_order_detail&refer_page_id=10045_1750144734986_i5f35idu15&refer_page_sn=10045"
              target="_blank"
            >
              <Image src={IMGtemu} alt="Temu" className="card" />
            </Link>
          </div>
          <div>
            <Link
              href="https://allegro.pl/uzytkownik/tanio-wysylamy/sklep"
              target="_blank"
            >
              <Image src={IMGallegro} alt="Allegro" className="card" />
            </Link>
          </div>
          <div>
            <Link
              href="https://www.ceneo.pl/sklepy/VERK-GROUP-s43296"
              target="_blank"
            >
              <Image src={IMGceneo} alt="Ceneo" className="card" />
            </Link>
          </div>
          <div>
            <Link href="https://verk.sklep.pl/" target="_blank">
              <Image src={IMGverk} alt="Verk" className="card" />
            </Link>
          </div>
          <div>
            <Link href="https://divogarden.eu/" target="_blank">
              <Image src={IMGdivo} alt="Divo" className="card" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
