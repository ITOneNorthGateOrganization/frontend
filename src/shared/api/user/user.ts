import {ApiInstance} from '../base';
import {Auth, UserSignIn} from './types';

const BASE_URL = '/auth';

export const signIn = async ({username, password}: Auth): Promise<UserSignIn> => {
  const {data} = await ApiInstance.post(`${BASE_URL}/signIn`, {username: username, password: password});
  localStorage.setItem("token", data.token);
  return data;
};

export const signUp = async ({username, password, email}: Auth) => {
  const {data} = await ApiInstance.post(`${BASE_URL}/signUp`, {username: username, password: password, email: email});
  return data.toString();
};