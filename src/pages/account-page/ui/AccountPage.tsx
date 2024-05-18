import React, {Dispatch, useEffect, useState} from 'react';
import {observer} from 'mobx-react-lite';
import {useRootStore} from '../../../shared/models/RootStoreProvider';
import {AccountModal} from '../../../widgets/account-modal';
import {SideBar} from '../../../widgets/side-bar';

const AccountPage = observer(() => {
  const {accountStore, transactionStore, categoryStore} = useRootStore();

  useEffect(() => {
    accountStore.getAccounts();
    categoryStore.getCategories();
    if (accountStore.accounts.length > 0) {
      transactionStore.getTransactions(accountStore.accounts[0].id);
    }
  }, []);

  return (
    <div>
      <SideBar/>
      <div>
        <h3>Счета</h3>
        {accountStore.accounts.map((account) => (
          <div
            key={`${account.id}`}
            onClick={() => {
              transactionStore.getTransactions(account.id);
            }}
          >
            <div>
              {account.name}
            </div>

            <div>
              {account.balance}
            </div>
          </div>
        ))}
      </div>

      <div>
        <h3>Транзакции</h3>
        {transactionStore.transactions.map((transaction) => (
          <div>
            <div>
              {transaction.amount}
            </div>

            <div>
              {transaction.createAt}
            </div>
          </div>
        ))}
      </div>

      <div>
        <h3>Категории</h3>
        {categoryStore.categories.map((category) => (
          <div>{category.name}</div>
        ))}
      </div>
    </div>
  );
});

export {AccountPage};