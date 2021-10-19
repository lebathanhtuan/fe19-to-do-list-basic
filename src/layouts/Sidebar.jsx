import { useHistory, useLocation } from "react-router-dom";

import { ROUTER } from '../constants/router'

const SIDEBAR_ITEMS = [
  {
    title: "Login",
    path: ROUTER.LOGIN,
  },
  {
    title: "Home",
    path: ROUTER.HOME,
  },
  {
    title: "Product List",
    path: ROUTER.PRODUCT_LIST,
  },
  {
    title: "To Do List AntD",
    path: ROUTER.TO_DO_LIST_ANTD,
  },
  {
    title: "To Do List Hook",
    path: ROUTER.TO_DO_LIST_HOOK,
  },
];

function Sidebar({ isShowSidebar }) {
  let history = useHistory();
  let location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('userInfo')
    history.push(ROUTER.LOGIN)
  }

  const renderSidebarItems = () => {
    return SIDEBAR_ITEMS.map((item, index) => {
      return (
        <div
          key={index}
          className={
            item.path === location.pathname
              ? "sidebar-item active"
              : "sidebar-item"
          }
          onClick={() => history.push(item.path)}
        >
          {item.title}
        </div>
      );
    });
  };
  return (
    <div className={isShowSidebar ? "sidebar active" : "sidebar"}>
      <div
        className="sidebar-item"
        onClick={() => history.goBack()}
      >
        Back
      </div>
      {renderSidebarItems()}
      <div
        className="sidebar-item"
        onClick={() => handleLogout()}
      >
        Logout
      </div>
    </div>
  );
}

export default Sidebar;
