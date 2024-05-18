import React from 'react';
import {observer} from 'mobx-react-lite';
import {useRootStore} from '../../../shared/models/RootStoreProvider';
import styles from "./styles.module.css";

const AccountModal = observer(({id}: {id: number}) => {
  const {accountStore} = useRootStore();
  const account = accountStore.accounts.find((value) => value.id === id);

  return (
    <div className={styles.lolKek}>
      <div>
        {account?.name}
      </div>

      <div>
        {account?.balance}
      </div>
    </div>
  );
});

export {AccountModal};