import styles from './FooterStyles.module.css'

function Footer() {
  return (
   <section
   id='footer'
   className={styles.conrtainer}>
      <p>&copy; 2024 Lotfi Slim. <br />
      All rights reserved </p>
   </section>
  )
}

export default Footer