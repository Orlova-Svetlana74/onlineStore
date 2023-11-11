import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute =({ redirectPath = '/login' }) => {
  const isAuth = true;
  if (!isAuth ) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
}
export default ProtectedRoute
