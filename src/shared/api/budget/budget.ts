import {ApiInstance} from '../base';
import {Budget} from './types';

const BASE_URL = '/users';

export const getBudgets = async (): Promise<Budget[]> => {
  const {data} = await ApiInstance.get(`${BASE_URL}/budgets`);
  return data;
};