import React, {useEffect} from 'react';
import {observer} from 'mobx-react-lite';
import {useRootStore} from '../../../shared/models/RootStoreProvider';
import {SideBar} from '../../../widgets/side-bar';
import {BudgetBlock} from '../../../widgets/budget-block';
import {BudgetDiagram} from '../../../widgets/budget-diagram';
import {BudgetSettings} from '../../../widgets/budget-settings';
import styles from './styles.module.css';

const BudgetPage = observer(() => {
  const {budgetStore, userStore} = useRootStore();
  useEffect(() => {
    budgetStore.getBudgets();
  }, []);

  return (
      <div className={styles.budWrapper}>
        <SideBar/>

        <div className={styles.budMainWrapper}>
          <div className={styles.budMain}>
            <div className={styles.budBudgets}>
              <BudgetBlock/>
            </div>
            <BudgetSettings/>
          </div>
        </div>
      </div>
  );
});

export {BudgetPage};