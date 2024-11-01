import styles from './FooterStyles.module.css';
import { FaPhone } from 'react-icons/fa';

function Footer() {
  return (
    <div id='footer' className={styles.container}>
      <section className={styles.section}>
        <h2>Adress</h2>
        <p>
          10, Rue du Neuort <br />
          Hobscheid, Luxemburg <br />
          L-8373
        </p>
        <div className={styles.iconText}>
          <FaPhone />
          <span>+352 123 456 789</span>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Adress</h2>
        <p>
          Heresbachstraße 32 <br />
          Düsseldorf, Deutschland <br />
          40223
        </p>
        <div className={styles.iconText}>
          <FaPhone />
          <span>+49 211 987 654 321</span>
        </div>
      </section>

      <section className={styles.section}>
        <p>&copy; 2024 Lotfi Slim. <br />All rights reserved</p>
      </section>
    </div>
  );
}

export default Footer;
