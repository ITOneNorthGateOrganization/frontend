import {makeAutoObservable} from 'mobx';
import {getAccounts, Account} from '../../api/account';

export interface AccountStore {
  accounts: Account[],
  getAccounts: () => void,
  setAccounts: (accounts: Account[]) => void,
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
    }
  });
};