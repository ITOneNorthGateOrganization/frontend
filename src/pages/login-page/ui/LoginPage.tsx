import React, {useEffect, useState} from 'react';
import {useRootStore} from '../../../shared/models/RootStoreProvider';
import {observer} from 'mobx-react-lite';
import {useNavigate} from 'react-router-dom';
import styles from '../../login-page/ui/styles.module.css';

const LoginPage = observer(() => {
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
        <div className={styles.logBg}>
            <div className={styles.logPosition}>
                <div className={styles.logBlock}>
                    <div className={styles.logBlockContent}>
                        <div className={styles.logTitle}>
                            Авторизация
                        </div>

                        <input
                            className={styles.logInputStyle}
                            type="text"
                            value={authStore.auth.username}
                            placeholder={'Логин'}
                            onChange={(e) => {
                                authStore.auth.username = e.target.value;
                            }}
                        />

                        <input
                            className={styles.logInputStyle}
                            type="text"
                            value={authStore.auth.password}
                            placeholder={'Пароль'}
                            onChange={(e) => {
                                authStore.auth.password = e.target.value;
                            }}
                        />

                        <button
                            className={styles.logButton + ' ' + (loading ? styles.load : '')}
                            onClick={(e) => {
                                userStore.signIn(authStore.auth);
                                authStore.reset();
                                setLoading(true);
                        }}>
                          { loading ? 'Загрузка...' : 'Войти'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
});

export {LoginPage};