import styles from './index.module.css'
import React, { useState } from 'react';
import { IMG_PATH } from '../../constants';
import Image from 'next/image'


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
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={`contentTitle`}>PROFILE</h1>
      <div className={`content`}>
        <ul className={styles.profile__list}>
          <li className={styles.profile__items}>
            <button onClick={() => handleClickedTab(aboutme)}>ABOUT ME</button>
          </li>
          <li className={styles.profile__items}>
            <button onClick={() => handleClickedTab(skills)}>SKILLS</button>
          </li>
        </ul>
        <div className={styles.content__wrapper}>
          {displayedTab === aboutme ? (
            <div className={`card ${styles.card__aboutme}`}>
              <div className={styles.item__profileImage}>
                <Image src="/profile_277_300.jpg" alt="profile" width={130} height={130} className={styles.item__image} />
              </div>
              <div className={styles.item__description}>
                <p>こんにちは。マツオ カズヤと申します。<br />
                    これまでの業務では、主にフロントエンド(JavaScript)周りを担当してきました。<br />
                    また、以前行っていたテスト業務ではリーダー経験もあるため、PJ全体を考慮した業務遂行が可能です。<br />
                    自己学習・個人開発はモダンフロントエンドを中心に行っており、<a href="https://roadmap.sh/frontend" target="_blank" rel="noopener noreferrer">フロントエンドロードマップ</a>を参考に進めています。<br />
                    現在は React / Next.js / Firebase / Material-UI / TypeScript などで制作物を作成しており、
                    その内容については、このサイト上や<a href="https://roadmap.sh/frontend" target="_blank" rel="noopener noreferrer">GitHub</a>で公開しています。
                </p>
              </div>
            </div>
          ) : (
            <ul className={styles.skills__list}>
              {skillset.map((items) => (
                <li id={items.name} className={`card ${styles.skills__item}`}>
                  <Image src={items.imgPath} width={60} height={60} />
                  <h2 className={`fontLight`}>{items.name}</h2>
                  <p className={`fontLight lighterColor`}>{items.exp}</p>
                </li>
              )
            )}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}