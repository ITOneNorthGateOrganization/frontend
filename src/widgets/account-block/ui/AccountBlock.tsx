import React, {useEffect} from 'react';
import {observer} from 'mobx-react-lite';
import {useRootStore} from '../../../shared/models/RootStoreProvider';
import {AccountModal} from '../../../widgets/account-modal';
import IconAdd from "../../../shared/icons/iconAdd.svg";
import IconMoney from "../../../shared/icons/iconMoney.svg";
import styles from './styles.module.css';

const AccountBlock = observer(() => {
    const {accountStore, transactionStore, categoryStore} = useRootStore();

    useEffect(() => {
        accountStore.getAccounts();
        categoryStore.getCategories();
        if (accountStore.accounts.length > 0) {
            transactionStore.getTransactions(accountStore.accounts[0].id);
        }
    }, []);

    return (
        <div className={styles.accBlock}>
            <div className={styles.accBlockTitlePos}>
                <div className={styles.accBlockTitle}>
                    Счета
                </div>
                <img src={IconAdd}/>
            </div>
            <div className={styles.accBlockText}>
                {accountStore.accounts.map((account) => (
                    <div
                        className={styles.accBlockTextInfo}
                        key={`${account.id}`}
                        onClick={() => {
                            transactionStore.getTransactions(account.id);
                        }}>
                        <div>
                            {account.name}
                        </div>

                        <div className={styles.accBalanceMoney}>
                            {account.balance}
                            <img src={IconMoney}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
});

export {AccountBlock};