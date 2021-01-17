import styles from './index.module.css'
import React, { useState, useCallback } from 'react';
import { Modal } from '../../modal'

export function WorksItem(props) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClickedModalOpen = () => {
    setModalOpen(true);
  }

  const handleClickedModalClose = useCallback(() => {
    setModalOpen(false);
  },[modalOpen]);

  return (
    <div className={`card ${styles.items__list}`}>
      <img
        className={styles.items__image}
        src={props.content.thumb[0]}
        alt={props.content.title}
        onClick={()=>handleClickedModalOpen()}
      />
      <h3 className={`lighterColor`}>{props.content.title}</h3>
      {modalOpen &&
        <Modal
          content={props.content}
          handleClickedModalClose={handleClickedModalClose}
        />}
    </div>
  )   
}