import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthUser } from './authSelectors';

interface ProtectedRouteProps {
  children: ReactNode;
}

function ProtectedRoute({ children }: ProtectedRouteProps) {
  const user = useAuthUser();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

export default ProtectedRoute;
