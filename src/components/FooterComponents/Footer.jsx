import styles from './Footer.module.css'

function Footer() {
  return (
    <div className={styles.root}>
      <div className={styles.name}>KAZUMA HORIE</div>
      <div className={styles.sns}>
        SNS Links:
        <div className={styles['sns-link']}>
          <i className="bx bxl-twitter"></i>
          <i className="bx bxl-github"></i>
        </div>
      </div>
    </div>
  )
}

export default Footer
