import styles from './index.module.css'
import Link from 'next/link'

export function Header() {
  return(
    <header className={styles.header}>
      <div className="header-left">
        <Link href="/">
          <a><h1>Kazuya Matuso</h1></a>
        </Link>
      </div>
      <div className={styles.header__menu}>
        <ul className={styles.menu__list}>
          <li className={styles.menu__item}>Profile</li>
          <li className={styles.menu__item}>Works</li>
          <li className={styles.menu__item}>Contact</li>
          <li className={styles.menu__item}>
            <a href="https://github.com/kazuya-m" target="_blank" rel="noopener noreferrer">
            <img src="/skills/github.svg" alt="GitHub Logo" className="logo" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}