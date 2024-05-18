import React from 'react';
import styles from './styles.module.css';
import {Outlet} from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className={styles.mainBg}>
      <Outlet/>
    </div>
  );
};

export {MainLayout};