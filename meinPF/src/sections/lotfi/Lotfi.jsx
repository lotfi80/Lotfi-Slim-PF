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
import CV from "../../assets/CV.pdf";
import { useTheme } from "../../common/ThemeContext";

function Lotfi() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? lightMode : darkMode;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const gitHubIcon = theme === "light" ? gitHubLight :gitHubDark ;

  return (
    <section id="lotfi" className={styles.colorModeContainer}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.colorMode}
          src={lotfiImg}
          alt="Profile picture of Lotfi Slim"
        />
        <img 
        className={styles.colorModeIconBG}
        src={themeIcon} alt="color mode icon" onClick={toggleTheme} />
      </div>
      <div className={styles.info}>
        <h1>
          Lotfi
          <br />
          Slim
        </h1>
        <h2>Frontend Developper</h2>
        <span>
          <a href="https://www.linkedin.com/in/lotfi-slim-de/" target="_blank">
            <img
            className={styles.colorModeIcon} 
            src={linkedinIcon} alt="" />
          </a>
          <a href="https://github.com/lotfi80" target="_blank">
            <img 
            className={styles.colorModeIcon}
            src={gitHubIcon} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/lotfi-slim-de/" target="_blank">
            <img 
            className={styles.colorModeIcon}
            src={twitterIcon} alt="" />
          </a>
        </span>
        <p className="description">
          with a passion for developping modern React web apps for commercial
          business
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Lotfi;
