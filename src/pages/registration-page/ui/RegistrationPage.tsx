import React, {useEffect, useState} from 'react';
import {useRootStore} from '../../../shared/models/RootStoreProvider';
import {observer} from 'mobx-react-lite';
import {useNavigate} from 'react-router-dom';
import styles from '../ui/styles.module.css';
import FirstBlob from "../../../shared/images/FirstBlob.svg";
import SecondBlob from "../../../shared/images/SecondBlob.svg";
import ThirdBlob from "../../../shared/images/ThirdBlob.svg";

const RegistrationPage = observer(() => {
  const {userStore, authStore} = useRootStore();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if ((userStore?.user?.id ?? 0) === -1) {
      alert('Ошибка!');
      userStore.user.id = 0;
      setLoading(false);
    }
    else if ((userStore?.user?.id ?? 0) !== 0) {
      navigate('/accounts');
    }
  }, [userStore.user.id]);

  return (
      <div className={styles.regBg}>
          <div className={styles.regPosition}>
              <div className={styles.regBlock}>
                  <div className={styles.regBlockContent}>
                      <div className={styles.regTitle}>
                          Регистрация
                      </div>

                      <input
                          className={styles.regInputStyle}
                          type="text"
                          value={authStore.auth.username}
                          placeholder={'Логин'}
                          onChange={(e) => {
                              authStore.auth.username = e.target.value;
                          }}
                      />

                      <input
                          className={styles.regInputStyle}
                          type="text"
                          value={authStore.auth.email}
                          placeholder={'Электронная почта'}
                          onChange={(e) => {
                              authStore.auth.email = e.target.value;
                          }}
                      />

                      <input
                          className={styles.regInputStyle}
                          type="text"
                          value={authStore.auth.password}
                          placeholder={'Пароль'}
                          onChange={(e) => {
                              authStore.auth.password = e.target.value;
                          }}
                      />

                      <button
                          className={styles.regButton + ' ' + (loading ? styles.load : '')}
                          onClick={() => {
                            userStore.signUp(authStore.auth);
                            authStore.reset();
                            setLoading(true);
                      }}>
                        {loading ? 'Загрузка...' : 'Зарегестрироваться'}
                      </button>
                  </div>
              </div>
          </div>
      </div>
  );
});

export {RegistrationPage};