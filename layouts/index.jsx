import { Header } from '../components/header'
import { Footer } from '../components/footer'
import styles from './index.module.css'

export function Layout ({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>
        {children}
      </div>
      <Footer />
    </div>
  )
}