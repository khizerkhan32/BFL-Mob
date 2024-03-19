import { lazy } from 'react';
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';




// Loadable components
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
const NewInvestment = Loadable(lazy(() => import('views/dashboard/NewInvestment')));
const StateBank = Loadable(lazy(() => import('views/dashboard/StateBank')));
const UnsettledDeal = Loadable(lazy(()=> import('views/dashboard/UnsettledDeal')));
const IPS_Report = Loadable(lazy(()=>import('views/dashboard/IPS_Report')));
// const UtilsTablerIcons = Loadable(lazy(() => import('utilities/TablerIcons')));
// const UtilsMaterialIcons = Loadable(lazy(() => import('utilities/MaterialIcons')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        },
        {
          path: 'NewInvestment',
          element: <NewInvestment />
        },
        {
          path: 'UnsettledDeal',
          element: <UnsettledDeal />
        },
        {
          path: 'StateBank',
          element: <StateBank />
        },
        {
          path: 'IPS_Report',
          element: <IPS_Report />
        }
      ]
    }
  ]
};

export default MainRoutes;
