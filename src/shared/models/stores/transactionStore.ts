import {makeAutoObservable} from 'mobx';
import {getTransactions, Transaction} from '../../api/transaction';

export interface TransactionStore {
  transactions: Transaction[],
  getTransactions: (accountId: number) => void
}

export const createTransactionStore = (): TransactionStore => {
  return makeAutoObservable({
    transactions: [] as Transaction[],
    getTransactions(accountId) {
      getTransactions(accountId).then((transactions) => {
        this.transactions = transactions;
      });
    }
  });
};