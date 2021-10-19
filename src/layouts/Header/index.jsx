import React, { useContext } from "react";
import { Select, Button } from "antd";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import { ThemeContext } from "../../App";

import * as S from "./styles";

function Header({ isShowSidebar, setIsShowSidebar }) {
  const { setTheme, theme } = useContext(ThemeContext);
  return (
    <S.Header>
      <Button
        type="text"
        icon={<MenuUnfoldOutlined style={{ color: 'white' }} />}
        onClick={() => setIsShowSidebar(!isShowSidebar)}
      ></Button>
      Header
      <Select
        value={theme}
        onChange={(value) => setTheme(value)}
        style={{ width: 150 }}
      >
        <Select.Option value="light">Light</Select.Option>
        <Select.Option value="dark">Dark</Select.Option>
      </Select>
    </S.Header>
  );
}

export default Header;
