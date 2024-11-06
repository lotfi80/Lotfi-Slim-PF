import React from "react";
import styles from "./LotfiStyle.module.css";
import lotfiImg from "../../assets/lotfi.png";
import darkMode from "../../assets/darkMode.svg";
import lightMode from "../../assets/lightMode.svg";
import twitterDark from "../../assets/twitterDark.svg";
import twitterLight from "../../assets/twitterLight.svg";
import linkedinDark from "../../assets/linkedinDark.svg";
import gitHubDark from "../../assets/githubDark.svg";
import gitHubLight from "../../assets/githubLight.svg";
import linkedinLight from "../../assets/linkedinLight.svg";
import EnglishCV from "../../assets/EnglishCV.pdf";
import DeutschCV from "../../assets/DeutschCV.pdf";
import FrenchCV from "../../assets/FrenchCV.pdf";
import MyLogo from "../../assets/LotfiSlimLogo2.png";

import { useTheme } from "../../common/ThemeContext";
import { useTranslation } from "react-i18next";

function Lotfi() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? darkMode :lightMode ;
  const twitterIcon = theme === "light" ? twitterDark : twitterLight;
  const linkedinIcon = theme === "light" ? linkedinDark : linkedinLight;
  const gitHubIcon = theme === "light" ? gitHubDark : gitHubLight;

  const getCVLink = () => {
    const currentLanguage = i18n.language;
    if (currentLanguage === "de") {
      return DeutschCV;
    } else if (currentLanguage === "fr") {
      return FrenchCV;
    } else {
      return EnglishCV;
    }
  };

  const getCVButtonText = () => {
    const currentLanguage = i18n.language;
    if (currentLanguage === "de") {
      return "Lebenslauf herunterladen";
    } else if (currentLanguage === "fr") {
      return "Télécharger CV ";
    } else {
      return "Download CV";
    }
  };

  return (
    <section id="lotfi" className={styles.colorModeContainer}>
      <div className={styles.colorModeContainer}>
        <div>
          <img src={MyLogo} alt="Lotfi-Slim-Logo" className={styles.logo} />
        </div>
        <img
          className={styles.colorMode}
          src={lotfiImg}
          alt="Profile picture of Lotfi Slim"
        />

        <img
          className={styles.colorModeIconBG}
          src={themeIcon}
          alt="color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          <span class="name">Lotfi</span> Slim
        </h1>
        <h2>Junior FullStack Developper</h2>
        <span>
          <a
            href="https://www.linkedin.com/in/lotfi-slim-de/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={styles.colorModeIcon}
              src={linkedinIcon}
              alt="LinkedIn"
            />
          </a>
          <a
            href="https://github.com/lotfi80"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={styles.colorModeIcon}
              src={gitHubIcon}
              alt="GitHub"
            />
          </a>
          <a
            href="https://twitter.com/lotfislim"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={styles.colorModeIcon}
              src={twitterIcon}
              alt="Twitter"
            />
          </a>
        </span>
        <div className="descriptionContainer">
            <p className={styles.description}>
          {t("highPerformanceReactApps")}

          {t("userEngagement")}

          {t("operations")}

          <br />
          {t("intuitiveDesign")}

          {t("thrive")}
        </p>
        </div>
      

        <div>
          <a href={getCVLink()} download>
            <button className="hover">{getCVButtonText()}</button>{" "}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Lotfi;
