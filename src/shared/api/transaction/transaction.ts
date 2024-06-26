import {ApiInstance} from '../base';
import {Transaction} from './types';

const BASE_URL = '/users';

export const getTransactions = async (accountId:number): Promise<Transaction[]> => {
  const {data} = await ApiInstance.get(`${BASE_URL}/accounts/${accountId}/transactions`);
  return data;
};

export const create = async (description: string, amount: number, transactionTypeId: number, receiverId: number, senderId: number) => {
  await ApiInstance.post(`${BASE_URL}/accounts/transactions`, {description: description, amount: amount, transactionTypeId: transactionTypeId, receiverId: receiverId, senderId: senderId});
}