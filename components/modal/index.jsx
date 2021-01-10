import styles from "./index.module.css"

export function Modal(props) {
  return(
    <>
    <div className={`${styles.overlay}`} onClick={props.handleClickedModalClose}>
    </div>
      <div className={`${styles.content} card`}>
        <div className={styles.title}>
          <h2>{props.content.title}</h2>
        </div>
        <div className={styles.thumb}>
          {Object.keys(props.content.thumb).map((img) => (
            <img
              className={styles.thumbImages}
              src={props.content.thumb[img]}
              alt="thumb"
            />
          ))}
        </div>
        <div className={styles.description}>
          {props.content.description.split('\n').map((line,ind) => (
            <div key={ind} className={styles.description__line}>{line}</div>
          ))}
        </div>
        <div className={styles.image}>
          image
        </div>
        <div className={styles.grid__lang}>
            {Object.keys(props.content.langImg).map((key) => (
                <img
                  className={`logoBigger ${styles.langImages}`}
                  src={props.content.langImg[key]}
                  alt={key}
                />
              ))}
        </div>
    </div>
    </>
  )
}