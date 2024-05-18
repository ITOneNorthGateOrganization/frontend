import React from 'react';
import {observer} from 'mobx-react-lite';
import styles from './styles.module.css';

const AccountEditModal = observer(({open}: {open: [boolean, React.Dispatch<React.SetStateAction<boolean>>]}) => {
  const [openDialog, setOpenDialog] = open;

  return (
    <dialog
      open={openDialog}
      className={styles.modWrapper}
      onClick={(e) => {
        setOpenDialog(false);
      }}
    >
        <div className={styles.modMain}>
            <div className={styles.modMainTitle}>
                Добавление счета
            </div>

            <input
                className={styles.modInputStyle}
                type="text"
                placeholder={'Название'}/>

            <input
                className={styles.modInputStyle}
                type="text"
                placeholder={'Баланс'}/>

            <button className={styles.modButton}>
                Создать
            </button>
        </div>
    </dialog>
  );
});

export {AccountEditModal};