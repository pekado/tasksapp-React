import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  //state for login
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  //defracting
  const { email, password } = user;
  const onChange = event => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    });
  };
  //submit del login
  const onSubmit = event => {
    event.preventDefault();
    //validar que no haya campos vacios

    //pasar al action
  };
  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Sign in</h1>
        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your e-mail"
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Your Password"
              value={password}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Sign in"
            />
          </div>
        </form>
        <Link to={"new-account"} className="enlace-cuenta">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Login;
