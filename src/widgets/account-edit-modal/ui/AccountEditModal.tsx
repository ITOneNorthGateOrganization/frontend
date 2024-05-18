import React from 'react';
import {observer} from 'mobx-react-lite';
import styles from './styles.module.css';

const AccountEditModal = observer(({open}: {open: [boolean, React.Dispatch<React.SetStateAction<boolean>>]}) => {
  const [openDialog, setOpenDialog] = open;

  return (
    <dialog
      open={openDialog}
      className={styles.modWrapper}
      onClick={(e) => {
        setOpenDialog(false);
      }}
    >
      <div className={styles.modMain}>
        test
      </div>
    </dialog>
  );
});

export {AccountEditModal};