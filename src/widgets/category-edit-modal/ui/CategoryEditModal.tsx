import React from 'react';
import styles from './styles.module.css';
import {observer} from 'mobx-react-lite';

const CategoryEditModal = observer(({open}: {open: [boolean, React.Dispatch<React.SetStateAction<boolean>>]}) => {
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
                  Добавление категории
              </div>

              <input
                  className={styles.modInputStyle}
                  type="text"
                  placeholder={'Название'}/>

              <button className={styles.modButton}>
                  Создать
              </button>
          </div>
      </dialog>
  );
});

export {CategoryEditModal};