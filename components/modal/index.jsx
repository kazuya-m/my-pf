import { useState } from "react"
import styles from "./index.module.css"

export function Modal(props) {
  const [displayedImageIndex, setDisplayedImageIndex] = useState(0);

  return(
    <>
      <div className={`${styles.overlay}`} onClick={props.handleClickedModalClose}>
      </div>
        <div className={`${styles.content} card`}>
          <div className={styles.title}>
            <h2 className={`lighterColor`}>{props.content.title}</h2>
          </div>
          <div className={styles.thumb}>
            {props.content.thumb.map((img, index) => (
              <img
                key={index.toString()}
                className={styles.thumbImages}
                src={img}
                alt="images"
                onClick={()=>setDisplayedImageIndex(index)}
              />
            ))}
          </div>
          <div className={styles.description}>
            {props.content.description.split('\n').map((line,ind) => (
              <div key={ind} className={`${styles.description__line}`}>
                <span className={`lighterColor`}>{line}</span>
              </div>
            ))}
          </div>
          <div className={styles.image}>
            <img
              className={styles.mainImage}
              src={props.content.thumb[displayedImageIndex]}
              alt="img"
            />
          </div>
          <div className={styles.links}>
            <h3 className={`lighterColor`}>LINKS</h3>
            <ul className={styles.links__list}>
              {Object.keys(props.content.links).map((key, ind, arr) => (
                <li key={key} className={styles.links__item}>
                  <span>- </span>
                  <a href={props.content.links[key].url} target="_blank" rel="noopener noreferrer">
                    {props.content.links[key].label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.grid__lang}>
            <h3 className={`lighterColor`}>使用技術など</h3>
              {Object.keys(props.content.langImg).map((key) => (
                <img
                  key={key}
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