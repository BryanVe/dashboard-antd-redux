import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "antd";
import { LogoutOutlined } from "@ant-design/icons";

import { useDispatch, useSelector } from "react-redux";
import { authUserClean } from "../../../../../actions";

const LogoutButton = ({ type, isDesktop }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { desktop: desktopSidebarCollapsed } = useSelector(
    (state) => state.sidebarStates
  );

  const logout = () => {
    localStorage.removeItem("authToken");
    dispatch(authUserClean());
    history.push("/");
  };

  const collapsedButton = (
    <Button
      type={type}
      onClick={logout}
      shape="circle"
      icon={<LogoutOutlined />}
      size="middle"
    />
  );
  const button = (
    <Button type={type} onClick={logout}>
      Salir
    </Button>
  );

  return (
    <div style={{ padding: 10, textAlign: "center" }}>
      {isDesktop
        ? desktopSidebarCollapsed
          ? collapsedButton
          : button
        : button}
    </div>
  );
};

export default LogoutButton;
