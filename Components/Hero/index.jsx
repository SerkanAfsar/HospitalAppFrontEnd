import clsx from "clsx";
import styles from "./index.module.scss";
import img from "../../public/images/hospital.png";
import Image from "next/image";
import HeroSelect from "./HeroSearch";
import { GetAllCities } from "@/Services";

export default async function Hero() {
  const result = await GetAllCities();

  return (
    <div className={styles.wrapper}>
      <div className={clsx("container", styles.wrapper__content)}>
        <div className={styles.wrapper__info}>
          <h1>Türkiye Hastane Rehberi</h1>
          <h2>Türkiye İl-İlçe Hastane Numaraları Adresleri</h2>
          <HeroSelect />
        </div>
        <div className={styles.wrapper__img}>
          <Image
            src={img}
            alt="Hastane Rehberi"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}
