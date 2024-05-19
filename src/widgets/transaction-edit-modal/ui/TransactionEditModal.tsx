import React from 'react';
import {observer} from 'mobx-react-lite';
import styles from './styles.module.css';

const TransactionEditModal = observer(({open}: {open: [boolean, React.Dispatch<React.SetStateAction<boolean>>]}) => {
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
                Добавление транзакции
            </div>

            <input
                className={styles.modInputStyle}
                type="text"
                placeholder={'Описание'}/>

            <input
                className={styles.modInputStyle}
                type="text"
                placeholder={'Количество'}/>

            <select className={styles.modInputPeriodCheck}>
                <option value="dog">Пополнение</option>
                <option value="cat">Расход</option>
            </select>

            <button className={styles.modButton}>
                Создать
            </button>
        </div>
    </dialog>
  );
});

export {TransactionEditModal};