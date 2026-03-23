import Image from "next/image";
import Inpost from "@/public/logoIn.png";
import Dpd from "@/public/logoDpd.png";
import Pocztex from "@/public/logoPo.png";
import GLScourier from "@/public/logoGl.png";
import Orlen from "@/public/logoOrlen.png";
import RevealingSections from "./revealingSections";

export default function Couriers() {
  return (
    <section className="home_couriers-section">
      <RevealingSections goinUp={false}>
        <div className="home_couriers-box">
          <Image src={Inpost} alt="Inpost" />
          <Image src={GLScourier} alt="partner" />
          <Image src={Orlen} alt="partner" />
          <Image src={Pocztex} alt="partner" />
          <Image src={Dpd} alt="partner" />
        </div>
      </RevealingSections>
    </section>
  );
}
