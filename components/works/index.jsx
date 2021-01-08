import styles from './index.module.css'
import React, { useState } from 'react';
import { Modal } from '../modal'

export function Works() {
  const [modalOpen, setModalOpen] = useState(false);

  const worksCs = "/works/works-cs.jpg";
  const worksList = [
    {id: "01", title: "チャットボット", description: "自己紹介をするチャットボットです。案件面談時に成果物を見ていただくと同時に、経歴書やプロフィールなどの情報を提供できるようにしました。React、Material-UI、Firebaseを使用していて、Firebaseでは複数のサービスを組み込みました。", thumb: { main: worksCs }, langImg: {react: "/skills/react.svg", materialUi: "/skills/material-ui.svg", firebase: "/skills/firebase.svg"} },
    {id: "02", title: "LP", description: "このサイトです。Next.jsを学び始めたため最初のアウトプットとしてLP風のサイトを作成しました。SSGされているため最初の表示やContactページへの遷移が高速です。", thumb: { main: worksCs }, langImg: {react: "/skills/react.svg", next: "/skills/nextjs.svg", vercel: "/works/vercel.svg", javaScript: "/skills/javascript.svg", html: "/skills/html.svg", css: "/skills/css.svg"} },
  ]

  const handleClickedModalOpen = () => {
    setModalOpen(true);
    console.log('modal open')
  }

  return(
    <div className={`main__wrapper ${styles.wrapper}`}>
      <h2>Works</h2>
      <div className={`content`}>
        <ul className={styles.works__list}>
          {worksList.map((items) => (
            <li key={items.id} className={styles.works__item}>
              <img src={items.thumb.main} alt="coming soon" className={styles.img} onClick={()=>handleClickedModalOpen()}/>
              <h3 className={`fontLight lighterColor`}>{items.title}</h3>
            </li>
          )
          )}
        </ul>
      </div>
      {modalOpen && <Modal open={modalOpen} />}
    </div>
  )
}