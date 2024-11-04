import styles from "./ContactStyles.module.css";
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">{t('contact')}</h1> {/* Übersetzung hier */}
      <form action="https://formspree.io/f/xqakpqgb" method="POST">
        <div className="formGroup">
          <label htmlFor="name" hidden>
            {t('placeholder.name')} {/* Placeholder-Übersetzung */}
          </label>
          <input 
            type="text" 
            name="name" 
            id="name" 
            placeholder={t('placeholder.name')} 
            required 
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            {t('placeholder.email')}
          </label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            placeholder={t('placeholder.email')} 
            required 
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            {t('placeholder.message')}
          </label>
          <textarea 
            name="message" 
            id="message" 
            placeholder={t('placeholder.message')} 
            required 
          />
        </div>
        <input className="hover btn" type="submit" value={t('submit')} />
      </form>
    </section>
  );
}

export default Contact;
