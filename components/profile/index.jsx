import styles from './index.module.css'
import React, { useState } from 'react';


export function Profile() {
  const aboutme = 'aboutme';
  const skills = 'slills'
  const [displayedTab, setDisplayedTab] = useState(aboutme);

  const handleClickedTab = id => {
    setDisplayedTab(id);
  }

  return (
    <div className={styles.wrapper}>
      <h3>Profile</h3>
      <ul className={styles.profile__list}>
        <li className={styles.profile__item} onClick={() => handleClickedTab(aboutme)}>About Me</li>
        <li className={styles.profile__item} onClick={() => handleClickedTab(skills)}>SKills</li>
      </ul>
      <div className={styles.content__wrapper}>
        {displayedTab === aboutme ? (
          <>
            about me
          </>
        ) : (
          <>
            skills
          </>
        )}
      </div>
    </div>
  )
}