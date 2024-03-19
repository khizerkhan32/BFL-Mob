import React from 'react';
import { lazy } from 'react';
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// Lazy load the Sale and Purchase components

const AuthRegister = Loadable(lazy(() => import('views/dashboard/Security/Purchase/purchase')));
const PIB = Loadable(lazy(() => import('views/dashboard/Security/Sale/PIB/pib')));
const AuthRegister3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Register3')));

// Authentication routes
const AuthenticationRoutes = {
  path: '/',
  element: <MinimalLayout />,

  children: [
    {
      path: '/security/PIB/Pib',
      element: <PIB />
    },
    {
      path: '/pages/register/register3',
      element: <AuthRegister3 />
    },
    {
      path: '/security/purchase/purchase',
      element: <AuthRegister />
    }
  ]
};

export default AuthenticationRoutes;
