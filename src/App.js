import React, { useState, createContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";

import DefaultRoute from "./layouts/DefaultRoute";
import AdminRoute from "./layouts/AdminRoute";
import LoginRoute from "./layouts/LoginRoute";

import HomePage from "./pages/Home";
import ProductListPage from "./pages/ProductList";
import ProductDetailPage from "./pages/ProductDetail";
import DashboardPage from "./pages/Dashboard";
import LoginAndRegisterPage from "./pages/LoginAndRegister";
import ToDoListAntDPage from "./pages/ToDoListAntD";
import ToDoListHookPage from "./pages/ToDoListHook";
import NotFoundPage from "./pages/NotFound";

import { ROUTER } from "./constants/router";

import { darkTheme, lightTheme } from "./themes";

export const ThemeContext = createContext();

function App() {
  const [isShowSidebar, setIsShowSidebar] = useState(true);
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider
      value={{ setTheme: setTheme, theme: theme }}
    >
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <BrowserRouter>
          <Switch>
            <DefaultRoute
              exact
              path={ROUTER.HOME}
              component={HomePage}
              setIsShowSidebar={setIsShowSidebar}
              isShowSidebar={isShowSidebar}
            />
            <DefaultRoute
              exact
              path={ROUTER.PRODUCT_LIST}
              component={ProductListPage}
              setIsShowSidebar={setIsShowSidebar}
              isShowSidebar={isShowSidebar}
            />
            <DefaultRoute
              exact
              path={ROUTER.TO_DO_LIST_ANTD}
              component={ToDoListAntDPage}
              setIsShowSidebar={setIsShowSidebar}
              isShowSidebar={isShowSidebar}
            />
             <DefaultRoute
              exact
              path={ROUTER.TO_DO_LIST_HOOK}
              component={ToDoListHookPage}
              setIsShowSidebar={setIsShowSidebar}
              isShowSidebar={isShowSidebar}
            />
            <DefaultRoute
              exact
              path={ROUTER.PRODUCT_DETAIL}
              component={ProductDetailPage}
              setIsShowSidebar={setIsShowSidebar}
              isShowSidebar={isShowSidebar}
            />
            <AdminRoute
              exact
              path={ROUTER.DASHBOARD}
              component={DashboardPage}
            />
            <LoginRoute
              exact
              path={ROUTER.LOGIN}
              component={LoginAndRegisterPage}
            />
            <Route path={ROUTER.NOT_FOUND} component={NotFoundPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
