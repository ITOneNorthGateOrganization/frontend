import React from 'react';
import {useRootStore} from '../../../shared/models/RootStoreProvider';
import {observer} from 'mobx-react-lite';
import {useNavigate} from 'react-router-dom';
import styles from "../../login-page/ui/styles.module.css";
import FirstBlob from "../../../shared/images/FirstBlob.svg";
import SecondBlob from "../../../shared/images/SecondBlob.svg";
import ThirdBlob from "../../../shared/images/ThirdBlob.svg";

const LoginPage = observer(() => {
    const {userStore, authStore} = useRootStore();
    const navigate = useNavigate();

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
                            className={styles.logButton}
                            onClick={() => {userStore.signIn(authStore.auth);authStore.reset();
                            navigate('/accounts');
                        }}>
                            Войти
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
});

export {LoginPage};