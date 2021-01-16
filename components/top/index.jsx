import styles from './index.module.css'

export function Top() {
  return (
    <div className={`main__wrapper ${styles.wrapper}`}>
      <div className={`${styles.bg}`}>
        <h1 className={styles.title}>HELLO WORLD.</h1>
      </div>
    </div>
  )
}