import styles from './index.module.css'

export function Works() {
  const worksCs = '/works/works-cs.jpg';
  return(
    <div className={`main__wrapper ${styles.wrapper}`}>
      <h3>Works</h3>
      <div className={styles.content}>
        <ul className={styles.works__list}>
        <li className={styles.works__item}>
          <img src={worksCs} alt="coming soon" className={styles.img} />
        </li>
        <li className={styles.works__item}>
          <img src={worksCs} alt="coming soon" className={styles.img} />
        </li>
        <li className={styles.works__item}>
          <img src={worksCs} alt="coming soon" className={styles.img} />
        </li>
        <li className={styles.works__item}>
          <img src={worksCs} alt="coming soon" className={styles.img} />
        </li>
        </ul>
      </div>
    </div>
  )
}