import React, {useEffect} from 'react';
import {observer} from 'mobx-react-lite';
import {useRootStore} from '../../../shared/models/RootStoreProvider';
import styles from './styles.module.css';
import IconAdd from '../../../shared/icons/iconAdd.svg';
import IconMoney from '../../../shared/icons/iconMoney.svg';
import IconInfo from '../../../shared/icons/iconInfo.svg';

const BudgetBlock = observer(() => {
    const {budgetStore, userStore} = useRootStore();
    useEffect(() => {
        budgetStore.getBudgets();
    }, []);

    return (
        <div className={styles.budBlock}>
            <div className={styles.budBlockTitlePos}>
                <div className={styles.budBlockTitle}>
                    Бюджеты
                </div>
                <img src={IconAdd}/>
            </div>
            <div className={styles.budBlockText}>
                {budgetStore.budgets.map((budget) => (
                    <div className={styles.budBlockTextInfo}>
                        <div className={styles.budMoney}>
                            <img src={IconInfo}/>
                            {budget.purpose}
                        </div>

                        <div className={styles.budMoney}>
                            {budget.limit}
                            <img src={IconMoney}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
});

export {BudgetBlock};