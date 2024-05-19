import React, {useEffect, useState} from 'react';
import {observer} from 'mobx-react-lite';
import {useRootStore} from '../../../shared/models/RootStoreProvider';
import styles from './styles.module.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {BudgetCategories} from '../../budget-categories';

const BudgetSettings = observer(() => {
    const {budgetStore, userStore} = useRootStore();
    const open = useState<boolean>(false);

    useEffect(() => {
        budgetStore.getBudgets();
    }, []);

    return (
      <div className={styles.setWrapper}>
          <div className={styles.setBlockWrapper}>
            <div className={styles.setBlock}>
                <div className={styles.setBlockTitlePos}>
                    <div className={styles.setBlockTitle}>
                        Настройки
                    </div>
                </div>
                <div className={styles.setList}>
                    <div className={styles.setItem}>
                        <div className={styles.setInputText}>
                            Цель
                        </div>
                        <input
                            className={styles.setInputStyle}
                            type="text"
                        />
                    </div>

                    <div className={styles.setItem}>
                        <div className={styles.setInputText}>
                            Сумма
                        </div>
                        <input
                            className={styles.setInputStyle}
                            type="text"
                        />
                    </div>

                    <div className={styles.setItem}>
                        <div className={styles.setInputText}>
                            Переодичность бюджета
                        </div>
                        <div className={styles.setItemPeriod}>
                            <input
                                className={styles.setCheckStyle}
                                type="checkbox"
                            />

                            <div className={styles.setInputPeriodText}>
                                раз в
                            </div>

                            <input
                                className={styles.setInputPeriodNum}
                                type="number"
                            />

                            <select className={styles.setInputPeriodCheck}>
                                <option value="dog">День</option>
                                <option value="cat">Неделя</option>
                                <option value="hamster">Месяц</option>
                                <option value="hamster">Год</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <div className={styles.setInputText}>
                            Важность
                        </div>
                        <fieldset className={styles.setRadio}>
                            <div className={styles.setRadioList}>
                                <input className={styles.setRadioItem}
                                       type="radio"
                                       id="smallest"
                                       name="drone"
                                       value="smallest" checked/>
                                <label htmlFor="huey">Наименьшая</label>
                            </div>

                            <div className={styles.setRadioList}>
                                <input className={styles.setRadioItem}
                                       type="radio"
                                       id="medium"
                                       name="drone"
                                       value="medium"/>
                                <label htmlFor="dewey">Средняя</label>
                            </div>

                            <div className={styles.setRadioList}>
                                <input className={styles.setRadioItem}
                                       type="radio"
                                       id="highest"
                                       name="drone"
                                       value="highest"/>
                                <label htmlFor="louie">Наивысшая</label>
                            </div>
                        </fieldset>
                    </div>
                </div>
            </div>
              <Calendar
                locale='ru-RU'
                className={styles.setCalendar}
              />
          </div>
          <BudgetCategories openEdit={open}/>
      </div>
    );
});

export {BudgetSettings};