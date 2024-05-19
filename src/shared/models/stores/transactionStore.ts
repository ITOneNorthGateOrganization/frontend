import {makeAutoObservable} from 'mobx';
import {getTransactions, Transaction, create} from '../../api/transaction';

export interface TransactionStore {
  transactions: Transaction[],
  getTransactions: (accountId: number) => void,
  create: (description: string, amount: number,transactionTypeId: number, accountId: number) => void,
}

export const createTransactionStore = (): TransactionStore => {
  return makeAutoObservable({
    transactions: [] as Transaction[],
    getTransactions(accountId) {
      getTransactions(accountId).then((transactions) => {
        this.transactions = transactions;
      });
    },
    create(description, amount, transactionTypeId, accountId: number) {
      let receiverId = null;
      let senderId = null;
      if(transactionTypeId === 1)
      {
        receiverId = accountId;
      }
      else
      {
        senderId = accountId;
      }
      create(description, amount, transactionTypeId, receiverId, senderId).then(() => {
        this.getTransactions(accountId);
      });
    }
  });
};
