import React from "react";
import { Route, Redirect } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

import { ROUTER } from '../constants/router'

const AdminRoute = ({
  component: Component,
  ...props
}) => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'))
  if (!userInfo) {
    return <Redirect to={ROUTER.LOGIN} />
  } else if (userInfo.role === 'user') {
    return <Redirect to={ROUTER.HOME} />
  }
  return (
    <Route
      {...props}
      render={(routeProps) => (
        <>
          <Header />
          <div className="main">
            <Component {...routeProps} />
          </div>
          <Footer />
        </>
      )}
    />
  );
};

export default AdminRoute;
