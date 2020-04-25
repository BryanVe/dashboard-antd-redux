import React from "react";
import { Avatar } from "antd";

import { UserOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

const UserAvatar = () => {
  const { username } = useSelector((state) => state.currentSession.userInfo);

  return <Avatar alt={username} size="large" icon={<UserOutlined />} />;
};

export default UserAvatar;
