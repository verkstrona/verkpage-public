import IMGempik from "@/public/EmpikLogo.png";
import IMGempikwhite from "@/public/EmpikLogoWhite.png";
import IMGerli from "@/public/LogoErli.png";
import IMGallegro from "@/public/AllegroLogo.png";
import IMGtemu from "@/public/temuLogo.png";
import IMGceneo from "@/public/CeneoLogo.png";
import IMGverk from "@/public/LogoVerk.png";
import IMGdivo from "@/public/LogoDivo.png";
import Image from "next/image";

export default function Partners() {
  return (
    <section className="cards-section">
      <div className="carousel">
        <div className="group">
          <div className="last-card">
            <Image src={IMGempik} alt="Empik" className="card image-dark" />
            <Image
              src={IMGempikwhite}
              alt="Empik"
              className="card image-white"
            />
          </div>
          <div>
            <Image src={IMGerli} alt="Erli" className="card" />
          </div>
          <div>
            <Image src={IMGtemu} alt="Temu" className="card" />
          </div>
          <div>
            <Image src={IMGallegro} alt="Allegro" className="card" />
          </div>
          <div>
            <Image src={IMGceneo} alt="Ceneo" className="card" />
          </div>
          <div>
            <Image src={IMGverk} alt="Verk" className="card" />
          </div>
          <div>
            <Image src={IMGdivo} alt="Divo" className="card" />
          </div>
        </div>
        <div aria-hidden className="group">
          <div className="last-card ">
            <Image src={IMGempik} alt="Empik" className="card image-dark" />
            <Image
              src={IMGempikwhite}
              alt="Empik"
              className="card image-white"
            />
          </div>
          <div>
            <Image src={IMGerli} alt="Erli" className="card" />
          </div>
          <div>
            <Image src={IMGtemu} alt="Temu" className="card" />
          </div>
          <div>
            <Image src={IMGallegro} alt="Allegro" className="card" />
          </div>
          <div>
            <Image src={IMGceneo} alt="Ceneo" className="card" />
          </div>
          <div>
            <Image src={IMGverk} alt="Verk" className="card" />
          </div>
          <div>
            <Image src={IMGdivo} alt="Divo" className="card" />
          </div>
        </div>
      </div>
    </section>
  );
}
