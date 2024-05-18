import {Auth} from '../../api/user';
import {makeAutoObservable} from 'mobx';

export interface AuthStore {
  auth: Auth,
  reset: () => void
}

export const createAuthStore = (): AuthStore => {
  return makeAutoObservable({
    auth: {
      username: '',
      password: '',
      email: ''
    },
    reset() {
      this.auth.email = '';
      this.auth.password = '';
      this.auth.username = '';
    }
  });
};