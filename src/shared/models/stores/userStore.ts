import {makeAutoObservable} from 'mobx';
import {Auth, signIn, signUp, User} from '../../api/user';

export interface UserStore {
  user?: User
  signIn: ({username, password}: Auth) => void,
  signUp: ({username, password, email}: Auth) => void
}

export const createUserStore = (): UserStore => {
  return makeAutoObservable({
    user: {
      id: 0,
      username: '',
      email: '',
      roles: [
        ''
      ],
    },
    signIn ({username, password}) {
      signIn({username, password}).then((userSingIn) => {
        this.user = userSingIn;
      });
    },
    signUp({username, password, email}) {
      signUp({username, password, email}).then();
      this.signIn({username, password});
    },
  })
}