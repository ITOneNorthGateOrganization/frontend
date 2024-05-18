import React, {useEffect} from 'react';
import {observer} from 'mobx-react-lite';
import {useRootStore} from '../../../shared/models/RootStoreProvider';
import IconMoney from "../../../shared/icons/iconMoney.svg";
import styles from './styles.module.css';

const AccountTransactions = observer(() => {
    const {accountStore, transactionStore, categoryStore} = useRootStore();

    useEffect(() => {
        accountStore.getAccounts();
        categoryStore.getCategories();
        if (accountStore.accounts.length > 0) {
            transactionStore.getTransactions(accountStore.accounts[0].id);
        }
    }, []);

    return (
        <div className={styles.tranBlock}>
            <div className={styles.tranBlockTitle}>
                Изменения по счету
            </div>
            <div className={styles.tranBlockText}>
                {transactionStore.transactions.map((transaction) => (
                    <div
                        className={styles.tranBlockTextInfo}>
                        <div>
                            {transaction.description}
                        </div>

                        <div className={styles.tranAccMoney +' '+ (transaction?.transactionTypeId === 1 ? styles.refill : styles.rate)}>
                            {transaction.amount}
                            <img src={IconMoney}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
});

export {AccountTransactions};