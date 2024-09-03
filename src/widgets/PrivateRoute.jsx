import { Navigate } from "react-router-dom";

export default function PrivateRoute({ element, redirectTo }) {
  const isAuthenticated = !!localStorage.getItem('token');

  if (isAuthenticated && redirectTo) {
    return <Navigate to={redirectTo} />;
  }

  if (!isAuthenticated && redirectTo === undefined) {
    return <Navigate to="/" />;
  }
  return element;
}
