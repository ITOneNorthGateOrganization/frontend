import {ApiInstance} from '../base';
import {Account} from './types';

const BASE_URL = '/users';

export const getAccounts = async (): Promise<Account[]> => {
  const {data} = await ApiInstance.get(`${BASE_URL}/accounts`);
  return data;
};