import styles from './Footer.module.css'

function Footer() {
  return (
    <div className={styles.root}>
      {/* <div className={styles.name}>Juma</div> */}
      <div className={styles.container}>
        <div className={styles.category}>
          <div className={styles.title}>Programing</div>
          <div className={styles.content}>Java</div>
          <div className={styles.content}>python</div>
          <div className={styles.content}>JavaScript</div>
        </div>
        <div className={styles.category}>
          <div className={styles.title}>Memory</div>
          <div className={styles.content}>
            <a href='/blogs'>Blogs</a>
          </div>
          <div className={styles.content}>
            <a href='/projects'>Projects</a>
          </div>
        </div>
        <div className={styles.category}>
          <div className={styles.title}>Acount</div>
          <div className={styles.content}>
            <a href="https://x.com/__kzm__wp">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="https://github.com/jumoon9617">
              <i className="bx bxl-github"></i>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.copyrights}>&copy; 2024 Juma. All rights reserved.</div>
    </div>
  )
}

export default Footer
