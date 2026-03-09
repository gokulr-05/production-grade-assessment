import { Navigate } from 'react-router-dom';
import { useAuthUser } from './authSelectors';

function ProtectedRoute({ children }) {
  const user = useAuthUser();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
