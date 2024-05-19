import {makeAutoObservable} from 'mobx';
import {Category, create, getCategories} from '../../api/category';

export interface CategoryStore {
  categories: Category[],
  getCategories: () => void,
  create: (name: string) => void
}

export const createCategoryStore = (): CategoryStore => {
  return makeAutoObservable({
    categories: [] as Category[],
    getCategories() {
      getCategories().then((categories) => {
        this.categories = categories;
      })
    },
    create(name) {
      create(name).then(() => {
        this.getCategories();
      });
    }
  });
};