import { Header } from '../components/header'
import { Footer } from '../components/footer'
import styles from './index.module.css'

export function Layout ({ children }) {
  return (
    <div className={styles.containers}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}