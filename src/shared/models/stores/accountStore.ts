import {makeAutoObservable} from 'mobx';
import {getAccounts, Account, create} from '../../api/account';

export interface AccountStore {
  accounts: Account[],
  getAccounts: () => void,
  setAccounts: (accounts: Account[]) => void,
  create: (balance: number, name: string) => void,
}

export const createAccountStore = (): AccountStore => {
  return makeAutoObservable({
    accounts: [] as Account[],
    getAccounts() {
      getAccounts().then((accounts) => {
        this.setAccounts(accounts);
      });
    },
    setAccounts(accounts) {
      this.accounts = accounts;
    },
    create(balance, name) {
      create(balance, name).then(() => {
        this.getAccounts();
      });
    }
  });
};