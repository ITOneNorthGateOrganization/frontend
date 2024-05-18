import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import {MainPage} from '../pages/main-page';
import {RegistrationPage} from '../pages/registration-page';
import {LoginPage} from '../pages/login-page';
import {AccountPage} from '../pages/account-page';
import {BudgetPage} from '../pages/budget-page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage/>,
  },
  {
    path: '/registration',
    element: <RegistrationPage/>
  },
  {
    path: '/login',
    element: <LoginPage/>
  },
  {
    path: '/accounts',
    element: <AccountPage/>
  },
  {
    path: '/budget',
    element: <BudgetPage/>
  }
  ]);