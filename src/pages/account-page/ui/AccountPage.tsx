import React, {Dispatch, useEffect, useState} from 'react';
import {observer} from 'mobx-react-lite';
import {useRootStore} from '../../../shared/models/RootStoreProvider';
import {SideBar} from '../../../widgets/side-bar';
import styles from './styles.module.css';
import {AccountBlock} from '../../../widgets/account-block';
import {AccountTransactions} from '../../../widgets/account-transactions';
import {AccountCategories} from '../../../widgets/account-categories';
import {AccountEditModal} from '../../../widgets/account-edit-modal';
import {CategoryEditModal} from '../../../widgets/category-edit-modal';
import {TransactionEditModal} from '../../../widgets/transaction-edit-modal';

const AccountPage = observer(() => {
  const {accountStore, transactionStore, categoryStore} = useRootStore();
  const openAccount = useState<boolean>(false);
  const openCategory = useState<boolean>(false);
  const openTransaction = useState<boolean>(false);


  useEffect(() => {
    accountStore.getAccounts();
    categoryStore.getCategories();
    if (accountStore.accounts.length > 0) {
      transactionStore.getTransactions(accountStore.accounts[0].id);
    }
  }, []);

  return (
    <div className={styles.accWrapper}>
      <SideBar/>
      <AccountEditModal open={openAccount}/>
      <CategoryEditModal open={openCategory}/>
      <TransactionEditModal open={openTransaction}/>
      <div className={styles.accMainWrapper}>
        <div className={styles.accMain}>
          <div className={styles.accAccountTransaction}>
            <AccountBlock openEdit={openAccount}/>
            <AccountTransactions openEdit={openTransaction}/>
          </div>

          <AccountCategories openEdit={openCategory}/>
        </div>
      </div>
    </div>
  );
});

export {AccountPage};