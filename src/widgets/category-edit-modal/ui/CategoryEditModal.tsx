import React, {useState} from 'react';
import styles from './styles.module.css';
import {observer} from 'mobx-react-lite';
import {useRootStore} from '../../../shared/models/RootStoreProvider';
import {values} from 'mobx';

const CategoryEditModal = observer(({open}: {open: [boolean, React.Dispatch<React.SetStateAction<boolean>>]}) => {
  const {categoryStore} = useRootStore();
  const [name, setName] = useState<string>();
  const [openDialog, setOpenDialog] = open;

  return (
      <dialog
          open={openDialog}
          className={styles.modWrapper}
          onClick={(e) => {
              setOpenDialog(false);
          }}
      >
          <div className={styles.modMain}
               onClick={(e) => {
                 e.stopPropagation();
               }}>
              <div className={styles.modMainTitle}>
                  Добавление категории
              </div>

              <input
                  className={styles.modInputStyle}
                  type="text"
                  placeholder={'Название'}
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
              />

              <button className={styles.modButton}
              onClick={() => {
                categoryStore.create(name);
                open[1].call(false);
              }}>
                  Создать
              </button>
          </div>
      </dialog>
  );
});

export {CategoryEditModal};