// Permet de rediriger l'utilisateur si il n'est pas connecté en utilisant le contexte (pas besoin de refaire une requête)

import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context";

function ProtectedRoute({ children }) {
  const { user } = useContext(AuthContext);
  return user ? children : <Navigate to="/signin" />;
}

export default ProtectedRoute;
