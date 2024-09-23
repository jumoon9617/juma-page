import styles from './Footer.module.css'

function Footer() {
  return (
    <div className={styles.root}>
      <div className={styles.name}>kaz</div>
      <div className={styles.sns}>
        <div>Acounts : </div>
        <div className={styles['sns-link']}>
          <i className="bx bxl-twitter"></i>
          <i className="bx bxl-github"></i>
        </div>
      </div>
      <div className={styles.copyrights}>&copy; 2024 kaz. All rights reserved.</div>
    </div>
  )
}

export default Footer
