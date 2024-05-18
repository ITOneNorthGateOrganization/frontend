import {makeAutoObservable} from 'mobx';
import {createUserStore, UserStore} from './userStore';
import {AuthStore, createAuthStore} from './authStore';
import {AccountStore, createAccountStore} from './accountStore';
import {BudgetStore, createBudgetStore} from './budgetStore';
import {createTransactionStore, TransactionStore} from './transactionStore';
import {CategoryStore, createCategoryStore} from './categoryStore';

export interface RootStore {
  userStore: UserStore,
  authStore: AuthStore,
  accountStore: AccountStore,
  budgetStore: BudgetStore,
  transactionStore: TransactionStore,
  categoryStore: CategoryStore
}

export const createRootStore = (): RootStore => {
  return makeAutoObservable({
    userStore: createUserStore(),
    authStore: createAuthStore(),
    accountStore: createAccountStore(),
    budgetStore: createBudgetStore(),
    transactionStore: createTransactionStore(),
    categoryStore: createCategoryStore()
  })
}