import React from "react";
import { useTranslation } from "react-i18next";
import "flag-icons/css/flag-icons.min.css";
import styles from "./languageSwitcher.module.css";
// import MyLogo from "../../assets/LotfiSlimLogo2.png";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (newLanguage) => {
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className={styles.bigcontainer}>
      {/* <div  >
        <img src={MyLogo} alt="" />
      </div> */}
 <div className={styles.languageSwitcher}>
      <div className={styles.flagContainer}>
        <span
          className={`${styles.flagIcon} fi fi-gb`}
          onClick={() => handleLanguageChange("en")}
          title="English"
        ></span>
        <span
          className={`${styles.flagIcon} fi fi-de`}
          onClick={() => handleLanguageChange("de")}
          title="Deutsch"
        ></span>
        <span
          className={`${styles.flagIcon} fi fi-fr`}
          onClick={() => handleLanguageChange("fr")}
          title="Français"
        ></span>
      </div>
    </div>

    </div>
   
  );
};

export default LanguageSwitcher;
