import { Navigate, Outlet } from 'react-router-dom';

export function ProtectedRoute({ redirectPath = '/login'}) {
  const isAuth = true
  if (!isAuth) {
    return <Navigate to={redirectPath} replace />
  }

  return <Outlet />
}