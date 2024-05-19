import React, {PureComponent, useEffect, useState} from 'react';
import {observer} from 'mobx-react-lite';
import {useRootStore} from '../../../shared/models/RootStoreProvider';
import {SideBar} from '../../../widgets/side-bar';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styles from '../ui/styles.module.css';

const ReportPage = observer(() => {
    const {accountStore, transactionStore, categoryStore} = useRootStore();
    const openAccount = useState<boolean>(false);
    const openCategory = useState<boolean>(false);
    const openTransaction = useState<boolean>(false);

    const data = [
        {
            id: 8,
            balance: 100000,
            bigWaste: 10000,
            updateAt: '2024-05-18',
            name: 'Сбер'
        },
        {
            id: 8,
            balance: 79432,
            bigWaste: 5400,
            updateAt: '2024-05-19',
            name: 'Сбер'
        },
        {
            id: 8,
            balance: 50000,
            bigWaste: 0,
            updateAt: '2024-05-20',
            name: 'Сбер'
        },
        {
            id: 8,
            balance: 50000,
            bigWaste: 15000,
            updateAt: '2024-05-21',
            name: 'Сбер'
        },
        {
            id: 8,
            balance: 35523,
            bigWaste: 30000,
            updateAt: '2024-05-21',
            name: 'Сбер'
        },
    ];

    return (
            <div className={styles.repMain}>
                <SideBar/>
                <div className={styles.position}>
                    <div className={styles.repBlock}>
                        <ResponsiveContainer width="80%"
                                             height="90%"
                                             className={styles.repGraph}>
                            <LineChart
                                width={500}
                                height={300}
                                data={data}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3"/>
                                <XAxis dataKey="updateAt"/>
                                <YAxis/>
                                <Tooltip/>
                                <Legend color={'#FFFFFF'}/>
                                <Line type="monotone" dataKey="balance" stroke="#8884d8" activeDot={{r: 8}}/>
                                <Line type="monotone" dataKey="bigWaste" stroke="#82ca9d"/>
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
    );
});

export {ReportPage};