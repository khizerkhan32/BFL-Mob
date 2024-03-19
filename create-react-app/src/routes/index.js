import { useRoutes } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import security from './Security';
import AuthenticationRoutes from './AuthenticationRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([MainRoutes, AuthenticationRoutes, security]);
}
