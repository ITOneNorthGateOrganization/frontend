import React, {useEffect} from 'react';
import {observer} from 'mobx-react-lite';
import {useRootStore} from '../../../shared/models/RootStoreProvider';
import styles from './styles.module.css';
import IconAdd from "../../../shared/icons/iconAdd.svg";

const AccountCategories = observer(({openEdit}: {openEdit: [boolean, React.Dispatch<React.SetStateAction<boolean>>]}) => {
    const {accountStore, transactionStore, categoryStore} = useRootStore();
    const [open, setOpen] = openEdit;

    useEffect(() => {
        accountStore.getAccounts();
        categoryStore.getCategories();
        if (accountStore.accounts.length > 0) {
            transactionStore.getTransactions(accountStore.accounts[0].id);
        }
    }, []);

    return (
        <div className={styles.catBlock}>
            <div className={styles.catBlockTitlePos}>
                <div className={styles.catBlockTitle}>
                    Категории расходов
                </div>
                <img
                  src={IconAdd}
                  className={styles.catAddButton}
                  onClick={() => {
                    setOpen(true);
                  }}
                />
            </div>
            <div className={styles.catList}>
                {categoryStore.categories.map((category) => (
                    <div className={styles.catItem}>
                        {category.name}
                    </div>
                ))}
            </div>
        </div>
    );
});

export {AccountCategories};