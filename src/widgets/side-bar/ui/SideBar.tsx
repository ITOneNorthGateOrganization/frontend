import React from 'react';
import {Link} from 'react-router-dom';
import styles from '../ui/styles.module.css';
import sideTitleImg from '../../../shared/icons/sideTitleImg.svg';
import sidePointAccount from '../../../shared/icons/sidePointAccount.svg';
import sidePointBudget from '../../../shared/icons/sidePointBudget.svg';
import sidePointReport from '../../../shared/icons/sidePointReport.svg';

const SideBar = () => {
  return (
    <div className={styles.sideBg}>
        <div className={styles.sideTitlePosition}>
            <img src={sideTitleImg}/>
            <div className={styles.sideTitle}>
                Умный бюджет
            </div>
        </div>


        <div className={styles.sidePoint}>
            <div className={styles.sidePointItem}>
                <img src={sidePointAccount}/>
                <Link to='/accounts'
                      className={styles.sidePointText}>
                    Счета
                </Link>
            </div>

            <div className={styles.sidePointItem}>
                <img src={sidePointBudget}/>
                <Link to='/budget'
                      className={styles.sidePointText}>
                    Бюджеты
                </Link>
            </div>

            <div className={styles.sidePointItem}>
                <img src={sidePointReport}/>
                <Link to='/budget'
                      className={styles.sidePointText}>
                    Отчеты
                </Link>
            </div>
        </div>
    </div>
  );
};

export {SideBar};