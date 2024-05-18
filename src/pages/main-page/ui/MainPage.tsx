import React from 'react';
import {CustomButton} from '../../../shared/ui';
import styles from './styles.module.css';
import FirstBlob from '../../../shared/images/FirstBlob.svg';
import SecondBlob from '../../../shared/images/SecondBlob.svg';
import ThirdBlob from '../../../shared/images/ThirdBlob.svg';
import {useNavigate} from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  return (
      <div className={styles.mainBg}>
        <div className={styles.mainContent}>
          <div className={styles.mainTitle}>
            Умный бюджет
          </div>

          <div className={styles.mainTitleText}>
            Управляй своим бюджетом легко и удобно
          </div>

          <div className={styles.mainButtonsStyle}>
            <button className={styles.mainButtons}
                    onClick={() => navigate('/registration')}>
              Зарегестрироваться
            </button>

            <button className={styles.mainButtons}
                    onClick={() => navigate('/login')}>
              Войти
            </button>
          </div>
        </div>

          <img src={FirstBlob} className={styles.mainFirstBlob}/>
          <img src={SecondBlob} className={styles.mainSecondBlob}/>
          <img src={ThirdBlob} className={styles.mainThirdBlob}/>
      </div>
  );
};

export {MainPage};