import styles from './Header.module.css'

function Header() {
  return (
    <div className={styles.root}>
      <nav className="navbar navbar-expand-lg bg-dark border-bottom border-bottom-dark py-3 px-5" data-bs-theme="dark">
        <div className="container-fluid pl-5">
          <a href="/" className="navbar-brand">
            <div className={styles["nav-brand"]}>
              JUMA
            </div>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarToggler">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a href="/about" className={`nav-link ${styles["nav-link"]}`}>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="/projects" className={`nav-link ${styles["nav-link"]}`}>
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a href="/blogs" className={`nav-link ${styles["nav-link"]}`}>
                  Blogs
                </a>
              </li>
              <li className="nav-item">
                <a href="/contact" className={`nav-link ${styles["nav-link"]}`}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
