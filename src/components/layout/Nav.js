import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";

const Nav = () => {
  const authContext = useContext(AuthContext);
  const { userAuth, user, logOut } = authContext;

  useEffect(() => {
    userAuth();
    //eslint-disable-next-line
  }, []);
  return (
    <div className="app-header">
      {!user ? null : (
        <p className="nombre-usuario">
          Hi <span>{user.name}</span>
        </p>
      )}
    </div>
  );
};

export default Nav;
