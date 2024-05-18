import React, {useEffect} from 'react';
import {observer} from 'mobx-react-lite';
import {useRootStore} from '../../../shared/models/RootStoreProvider';
import {SideBar} from '../../../widgets/side-bar';
import {BudgetBlock} from '../../../widgets/budget-block';
import {BudgetDiagram} from '../../../widgets/budget-diagram';
import {BudgetSettings} from '../../../widgets/budget-settings';

const BudgetPage = observer(() => {
  const {budgetStore, userStore} = useRootStore();
  useEffect(() => {
    budgetStore.getBudgets();
  }, []);

  return (
      <div style={{display: 'flex'}} >
          <SideBar/>
          <BudgetBlock/>
          <BudgetDiagram/>
          <BudgetSettings/>
      </div>
  );
});

export {BudgetPage};