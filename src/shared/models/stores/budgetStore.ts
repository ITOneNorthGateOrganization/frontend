import {makeAutoObservable} from 'mobx';
import {Budget, getBudgets} from '../../api/budget';

export interface BudgetStore {
  budgets: Budget[],
  getBudgets: () => void
}

export const createBudgetStore = (): BudgetStore => {
  return makeAutoObservable({
    budgets: [] as Budget[],
    getBudgets() {
      getBudgets().then((budgets) => {
        this.budgets = budgets;
      })
    }
  });
};