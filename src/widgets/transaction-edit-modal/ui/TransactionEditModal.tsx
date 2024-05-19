import React, {useState} from 'react';
import {observer} from 'mobx-react-lite';
import styles from './styles.module.css';
import {useRootStore} from "../../../shared/models/RootStoreProvider";

const TransactionEditModal = observer(({open, account}: {open: [boolean, React.Dispatch<React.SetStateAction<boolean>>],account: [number, React.Dispatch<React.SetStateAction<number>>]}) => {
  const {transactionStore} = useRootStore();
  const [openDialog, setOpenDialog] = open;
  const [description, setDescription] = useState<string>('');
  const [amount, setAmount] = useState<number>();
  const [transactionTypeId, setTransactionTypeId] = useState<number>();
  const [accountId, setAccountId] = account;

    return (
  <dialog
      open={openDialog}
      className={styles.modWrapper}>
      <div
          className={styles.modMainWrapper}
          onClick={() => {
              setOpenDialog(false);
          }}>
          <div
              className={styles.modMain}
              onClick={(e) => {
                  e.stopPropagation();
              }}>
                  <div className={styles.modMainTitle}>
                      Добавление транзакции
                  </div>

                  <input
                      className={styles.modInputStyle}
                      type="text"
                      placeholder={'Описание'}
                      value={description}
                      onChange={(e) => {
                          setDescription(e.target.value);
                      }}/>

                  <input
                      className={styles.modInputStyle}
                      type="text"
                      placeholder={'Количество'}
                      value={amount}
                      onChange={(e) => {
                          setAmount(+e.target.value);
                      }}/>

                  <select className={styles.modInputPeriodCheck}
                          value={transactionTypeId} onChange={(event) => {
                            setTransactionTypeId(+event.target.value);
                  }}>
                      <option value="1">Пополнение</option>
                      <option value="2">Расход</option>
                  </select>

                  <button className={styles.modButton}
                          onClick={() => {
                              transactionStore.create(description, amount, transactionTypeId, accountId);
                              open[1].call(false);
                          }}>
                      Создать
                  </button>
          </div>
      </div>
  </dialog>
);
});

export {
    TransactionEditModal
};