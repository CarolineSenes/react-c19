// Permet de fournir l'utilisateur connecté à toute l'application et de re-rendre l'application lorsque l'utilisateur se connecte ou se déconnecte, grâce à setUser()

import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { signin as login } from "../../apis/auth";
import { AuthContext } from "../../context";

function AuthProvider({ children }) {
  const initialUser = useLoaderData();
  const [user, setUser] = useState(initialUser);

  async function signin(credentials) {
    const newUser = await login(credentials);
    setUser(newUser);
  }

  async function signout() {}

  return (
    <AuthContext.Provider
      value={{
        user,
        signin,
        signout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
