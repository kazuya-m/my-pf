import styles from './index.module.css'
import React, { useState } from 'react';
import { IMG_PATH } from '../../constants';


export function Profile() {
  const aboutme = 'aboutme';
  const skills = 'skills'
  const study = '自己学習'
  const work = '業務経験'
  const both = '業務経験 / 自己学習'
  const [displayedTab, setDisplayedTab] = useState(aboutme);

  const skillset = [
    { id: "01", name: "HTML", exp: both, imgPath: IMG_PATH.html },
    { id: "02", name: "CSS", exp: both, imgPath: IMG_PATH.css },
    { id: "03", name: "JavaScript", exp: both, imgPath: IMG_PATH.js },
    { id: "04", name: "TypeScript", exp: study, imgPath: IMG_PATH.ts },
    { id: "05", name: "React", exp: study, imgPath: IMG_PATH.react },
    { id: "06", name: "Material-UI", exp: study, imgPath: IMG_PATH.material },
    { id: "07", name: "Next.js", exp: study, imgPath: IMG_PATH.next },
    { id: "08", name: "Firebase", exp: study, imgPath: IMG_PATH.firebase },
    { id: "09", name: "Git / GitHub", exp: study, imgPath: IMG_PATH.git },
    { id: "10", name: "jQuery", exp: both, imgPath: IMG_PATH.jq },
    { id: "11", name: "Linux", exp: both, imgPath: IMG_PATH.linux },
    { id: "12", name: "SubVersion", exp: work, imgPath: IMG_PATH.sv }
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
                <img src={items.imgPath} className={styles.logo__skills}/>
                <h3 className={`fontLight`}>{items.name}</h3>
                <p className={`fontLight lighterColor`}>{items.exp}</p>
              </li>
            )
          )}
          </ul>
        )}
      </div>
    </div>
  )
}