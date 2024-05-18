import {ApiInstance} from '../base';
import {Transaction} from './types';

const BASE_URL = '/users';

export const getTransactions = async (accountId:number): Promise<Transaction[]> => {
  const {data} = await ApiInstance.get(`${BASE_URL}/accounts/${accountId}/transactions`);
  return data;
};