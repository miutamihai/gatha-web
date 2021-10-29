import { Navigate, useRoutes } from 'react-router-dom';
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardApp from './pages/DashboardApp';
import NotFound from './pages/Page404';
import Search from './pages/search';
import Asset from "./pages/asset";
import Employees from "./pages/employees";
import Status from "./pages/status";
import Visitor from "./pages/visitor";
import Employee from './pages/employee';
import Assets from "./pages/assets";

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" replace /> },
        { path: 'app', element: <DashboardApp /> },
        { path: 'search', element: <Search /> },
        { path: 'assets', element: <Assets /> },
        { path: 'asset/:id', element: <Asset /> },
        { path: 'employees', element: <Employees /> },
        { path: 'employee/:id', element: <Employee /> },
        { path: 'history', element: <Status /> },
        { path: 'visitor', element: <Visitor /> }
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '/', element: <Navigate to="/dashboard" /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
