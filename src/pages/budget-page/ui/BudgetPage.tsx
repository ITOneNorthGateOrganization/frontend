import React, {useEffect} from 'react';
import {observer} from 'mobx-react-lite';
import {useRootStore} from '../../../shared/models/RootStoreProvider';

const BudgetPage = observer(() => {
  const {budgetStore, userStore} = useRootStore();
  useEffect(() => {
    budgetStore.getBudgets();
  }, []);

  return (
    <div>
      <div>
        {budgetStore.budgets.map((budget) => (
          <div>
            <div>
              {budget.purpose}
            </div>

            <div>
              {budget.limit}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export {BudgetPage};