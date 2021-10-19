import React from "react";
import { Route, Redirect } from "react-router-dom";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

import { ROUTER } from '../constants/router'

const DefaultRoute = ({
  setIsShowSidebar,
  isShowSidebar,
  component: Component,
  ...props
}) => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'))
  if (!userInfo) {
    return <Redirect to={ROUTER.LOGIN} />
  }
  return (
    <Route
      {...props}
      render={(routeProps) => (
        <>
          <Header
            setIsShowSidebar={setIsShowSidebar}
            isShowSidebar={isShowSidebar}
          />
          <div className="wrapper">
            <Sidebar isShowSidebar={isShowSidebar} />
            <div className={isShowSidebar ? "main active" : "main"}>
              <Component {...routeProps} />
            </div>
          </div>
          <Footer />
        </>
      )}
    />
  );
};

export default DefaultRoute;
