import {makeAutoObservable} from 'mobx';
import {Category, getCategories} from '../../api/category';

export interface CategoryStore {
  categories: Category[],
  getCategories: () => void
}

export const createCategoryStore = (): CategoryStore => {
  return makeAutoObservable({
    categories: [] as Category[],
    getCategories() {
      getCategories().then((categories) => {
        this.categories = categories;
      })
    }
  });
};