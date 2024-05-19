import React, {useState} from 'react';
import {observer} from 'mobx-react-lite';
import styles from './styles.module.css';
import {useRootStore} from '../../../shared/models/RootStoreProvider';

const AccountEditModal = observer(({open}: {open: [boolean, React.Dispatch<React.SetStateAction<boolean>>]}) => {
  const {accountStore} = useRootStore();
  const [openDialog, setOpenDialog] = open;
  const [name, setName] = useState<string>('');
  const [balance, setBalance] = useState<number>();

  return (
    <dialog
      open={openDialog}
      className={styles.modWrapper}
    >
      <div
        className={styles.modMainWrapper}
        onClick={() => {
          setOpenDialog(false);
        }}
      >
        <div
          className={styles.modMain}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
            <div className={styles.modMainTitle}>
                Добавление счета
            </div>

            <input
                className={styles.modInputStyle}
                type="text"
                placeholder={'Название'}
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}/>

            <input
                className={styles.modInputStyle}
                type="text"
                placeholder={'Баланс'}
                value={balance}
                onChange={(e) => {
                  setBalance(+e.target.value);
                }}
            />

            <button
              className={styles.modButton}
              onClick={() => {
                accountStore.create(balance, name);
                open[1].call(false);
              }}
            >
                Создать
            </button>
        </div>
      </div>
    </dialog>
  );
});

export {AccountEditModal};