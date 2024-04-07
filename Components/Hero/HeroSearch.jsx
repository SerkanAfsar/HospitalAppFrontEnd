"use client";
import styles from "./HeroSearch.module.scss";
import CustomSelect from "../UI/CustomSelect";
import CustomButton from "../UI/CustomButton";
export default function HeroSelect() {
  return (
    <div className={styles.wrapper}>
      <CustomSelect
        extraClass={styles.wrapper__drp}
        placeholder="İl Seçiniz"
        noOptionsMessage={({ inputValue }) =>
          !inputValue ? "İl Bulunamadı" : "Aradığınız İl Bulunamadı"
        }
      />
      <CustomSelect
        extraClass={styles.wrapper__drp}
        placeholder="İlçe Seçiniz"
        noOptionsMessage={({ inputValue }) =>
          !inputValue ? "İlçe Bulunamadı" : "Aradığınız İlçe Bulunamadı"
        }
      />
      <CustomButton title="Arama" extraClass={styles.wrapper__btn} />
    </div>
  );
}
