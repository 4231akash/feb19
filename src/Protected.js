import React from "react";
import { Redirect } from "react-router-dom";

const Protected = ({children}) => {
  const name = sessionStorage.getItem("token");

  if (!name) {
    return <Redirect to="/login" replace />;
  }

  return children;
};

export default Protected;
