import React, {useEffect} from 'react';
import {observer} from 'mobx-react-lite';
import {useRootStore} from '../../../shared/models/RootStoreProvider';
import styles from './styles.module.css';

const BudgetDiagram = observer(() => {
    const {budgetStore, userStore} = useRootStore();
    useEffect(() => {
        budgetStore.getBudgets();
    }, []);

    return (
        <div className={styles.budBlock}>
            <div className={styles.budBlockTitlePos}>
                <div className={styles.budBlockTitle}>
                    Соотношение бюджетов
                </div>
            </div>
        </div>
    );
});

export {BudgetDiagram};