import styles from './index.module.css'
import React, { useState } from 'react';
import { SkillCard } from '../skillCard'


export function Profile() {
  const aboutme = 'aboutme';
  const skills = 'skills'
  const study = '自己学習'
  const work = '業務経験'
  const both = '業務経験 / 自己学習'
  const [displayedTab, setDisplayedTab] = useState(aboutme);

  const skillset = [
    { id: "01", name: "HTML", exp: both },
    { id: "02", name: "CSS", exp: both },
    { id: "03", name: "JavaScript", exp: both },
    { id: "04", name: "TypeScript", exp: study },
    { id: "05", name: "React", exp: study },
    { id: "06", name: "Material-UI", exp: study },
    { id: "07", name: "Next.js", exp: study },
    { id: "08", name: "Firebase", exp: study },
    { id: "09", name: "Git / GitHub", exp: study },
    { id: "10", name: "jQuery", exp: both },
    { id: "11", name: "Linux", exp: both },
    { id: "12", name: "SubVersion", exp: work }
  ];

  const handleClickedTab = id => {
    setDisplayedTab(id);
  //   switch (id) {
  //     case aboutme:

  //   }
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
          <div className={styles.card__aboutme}>
            <div className={styles.item__profileImage}>
              image
            </div>
            <div className={styles.item__description}>
            <p>こんにちは。マツオ カズヤと申します。<br />
                4年目の29歳です。<br />
                主にテスト案件を担当していましたが、2020年からは開発・改修に携わる案件に参画しています。<br />
                自己学習はモダンフロントエンドを中心に行っており、<a href="https://roadmap.sh/frontend" target="_blank" rel="noopener noreferrer">フロントエンドロードマップ <i className="fas fa-external-link-alt"></i></a> を参考にしています。<br />
                React / Next.js / Firebase / JavaScript / TypeScript<br />
                他の成果物もこのサイトやgithub上で公開しています。
              </p>
            </div>
          </div>
        ) : (
          <ul className={styles.skills__list}>
            {skillset.map((items) => (
              <li id={items.name} className={styles.skills__item}>
                <h3>{items.name}</h3>
                <p>{items.exp}</p>
              </li>
            )
          )}
          </ul>
        )}
      </div>
    </div>
  )
}