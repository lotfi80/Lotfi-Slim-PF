import styles from './FooterStyles.module.css';
import { FaPhone } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <div id='footer' className={styles.container}>
      <section className={styles.section}>
        <h2>{t('AddressLuxembourg')}</h2>
        <p>
          10, Rue du Neuort <br />
          L-8373, Hobscheid <br />
          Luxemburg
        </p>
        <div className={styles.iconText}>
          <FaPhone />
          <span>+352 621 412 227</span>
        </div>
      </section>

      <section className={styles.section}>
        <h2>{t('AddressGermany')}</h2>
        <p>
          Heresbachstraße 32 <br />
          40223, Düsseldorf <br />
          Deutschland
        </p>
        <div className={styles.iconText}>
          <FaPhone />
          <span>+49 152 280 974 56</span>
        </div>
      </section>

      <section className={styles.section}>
        <p>&copy; 2024 Lotfi Slim. <br />All rights reserved</p>
      </section>
    </div>
  );
}

export default Footer;
