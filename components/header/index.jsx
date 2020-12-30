import styles from './index.module.css'
import Link from 'next/link'

export function Header() {
  return(
    <header className={styles.header}>
      <div className="header-left">
        <Link href="/">
          <h1>Kazuya Matuso</h1>
        </Link>
      </div>
      <div className={styles.header__menu}>
        <ul className={styles.menu}>
          <li className={styles.menu__list}>Profile</li>
          <li className={styles.menu__list}>Works</li>
          <li className={styles.menu__list}>Contact</li>
          <li className={styles.menu__list}>GitHub</li>
        </ul>
      </div>
    </header>
  )
}