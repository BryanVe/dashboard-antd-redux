import React from "react";
import LoginImage from "./components/LoginImage";
import LoginForm from "./components/LoginForm";
import Loader from "./components/Loader";

import { useSelector } from "react-redux";

const Login = () => {
  const { loading } = useSelector((state) => state.currentSession);

  return (
    <React.Fragment>
      {loading ? <Loader /> : null}
      <LoginImage>
        <LoginForm />
      </LoginImage>
    </React.Fragment>
  );
};
export default Login;
