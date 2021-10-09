import React, {FC} from 'react';
import Modal from 'react-modal';
import styles from "./style.module.scss";
import {AiOutlineCloseCircle} from "react-icons/ai";

interface Props {
  isOpen: boolean,
  name: string,
  onClose: () => void,
  children: React.ReactNode,
  size?: number,
}

export const PopUp: FC<Props> = (
  {
    isOpen,
    onClose,
    name,
    children,
    size,
  }
) => {

  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.55)',
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: 0,
      border: 'none',
      outline: 'none',
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
    >
      <div className={styles['modal']} style={size ? {width: size} : {}}>
        <div className={styles['header']}>
          <p className={styles['title']}>{name}</p>
          <button className={styles['close-btn']} onClick={onClose}>
            <AiOutlineCloseCircle size={25}/>
          </button>
        </div>
        {children}
      </div>
    </Modal>
  );
};