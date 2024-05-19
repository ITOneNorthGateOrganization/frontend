import React, {useEffect} from 'react';
import {observer} from 'mobx-react-lite';
import {useRootStore} from '../../../shared/models/RootStoreProvider';
import IconAdd from "../../../shared/icons/iconAdd.svg";
import IconMoney from "../../../shared/icons/iconMoney.svg";
import styles from './styles.module.css';

const AccountBlock = observer(({openEdit, account}: {openEdit: [boolean, React.Dispatch<React.SetStateAction<boolean>>], account: [number, React.Dispatch<React.SetStateAction<number>>]}) => {
    const {accountStore, transactionStore, categoryStore} = useRootStore();
  const [openDialog, setOpenDialog] = openEdit;
  const [accountId, setAccountId] = account;

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
                <img
                  className={styles.accAddButton}
                  src={IconAdd}
                  onClick={() => {
                  setOpenDialog(true);
                }}/>
            </div>
            <div className={styles.accBlockText}>
                {accountStore.accounts.map((account) => (
                    <div
                        className={styles.accBlockTextInfo}
                        key={`${account.id}`}
                        onClick={() => {
                            transactionStore.getTransactions(account.id);
                            setAccountId(account.id);
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