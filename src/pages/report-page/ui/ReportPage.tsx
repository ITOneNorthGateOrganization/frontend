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
            "startDate": "2024-05-19T01:55:56.383Z",
            "endDate": "2024-05-19T01:55:56.383Z",
            "step": 0,
            "categories": [
                {
                    "categoryId": 0,
                    "name": "string",
                    "spends": [
                        {
                            "period": "2024-05-19T01:55:56.384Z",
                            "amount": 7
                        }
                    ]
                }
            ]
        },
        {
            "startDate": "2024-05-19T02:55:56.383Z",
            "endDate": "2024-05-19T02:55:56.383Z",
            "step": 0,
            "categories": [
                {
                    "categoryId": 0,
                    "name": "string",
                    "spends": [
                        {
                            "period": "2024-05-19T02:55:56.384Z",
                            "amount": 11
                        }
                    ]
                }
            ]
        },
        {
            "startDate": "2024-05-19T03:55:56.383Z",
            "endDate": "2024-05-19T03:55:56.383Z",
            "step": 0,
            "categories": [
                {
                    "categoryId": 0,
                    "name": "string",
                    "spends": [
                        {
                            "period": "2024-05-19T03:55:56.384Z",
                            "amount": 12
                        }
                    ]
                }
            ]
        }
    ];

    return (
        <div className={styles.repMain}>
            <SideBar/>
            <ResponsiveContainer width="90%" height="90%">
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
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="startDate" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="step" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
});

export {ReportPage};