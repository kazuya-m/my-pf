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
    <div>
      <img
        className={styles.itemImages}
        src={props.content.thumb.main}
        alt="coming soon"
        onClick={()=>handleClickedModalOpen()}
      />
      <h3 className={`fontLight lighterColor`}>{props.content.title}</h3>
      {modalOpen &&
        <Modal
          content={props.content}
          handleClickedModalClose={handleClickedModalClose}
        />}
    </div>
  )   
}