import {ApiInstance} from '../base';
import {Category} from './types';

const BASE_URL = '/users';

export const getCategories = async (): Promise<Category[]> => {
  const {data} = await ApiInstance.get(`${BASE_URL}/categories`);
  return data;
};