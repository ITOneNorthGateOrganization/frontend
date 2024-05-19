import React from 'react';
import {Link, NavLink} from 'react-router-dom';
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
                <NavLink
                  to='/accounts'
                  className={({ isActive, isPending }) =>
                    isPending ? "" : isActive ? styles.active : ""
                  }>
                    Счета
                </NavLink>
            </div>

            <div className={styles.sidePointItem}>
                <img src={sidePointBudget}/>
                <NavLink
                  to='/budget'
                  className={({ isActive, isPending }) =>
                    isPending ? "" : isActive ? styles.active : ""
                }>
                    Бюджеты
                </NavLink>
            </div>

            <div className={styles.sidePointItem}>
                <img src={sidePointReport}/>
                <NavLink
                  to='/report'
                  className={({ isActive, isPending }) =>
                    isPending ? "" : isActive ? styles.active : ""
                  }>
                    Отчеты
                </NavLink>
            </div>
        </div>
    </div>
  );
};

export {SideBar};