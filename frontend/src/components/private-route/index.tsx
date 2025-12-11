import { authStorage } from '@/libs';
import { Navigate, useLocation } from 'react-router-dom';

interface PrivateRouteProps {
  children: React.ReactNode;
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const location = useLocation();

  const isLoggedIn = authStorage.isAuthenticated();

  if (!isLoggedIn) {
    const queryString = location.pathname !== '/' ? `?redirectUrl=${location.pathname}` : '';
    return <Navigate to={`/login${queryString}`} replace />;
  }

  return <>{children}</>;
}
