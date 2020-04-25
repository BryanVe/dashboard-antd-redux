import React from "react";
import { useSelector } from "react-redux";

import { Descriptions, Col } from "antd";

const UserInfo = () => {
  const userInfo = useSelector((state) => state.currentSession.userInfo);

  return (
    <Col>
      <Descriptions
        bordered
        column={{ xxl: 2, xl: 1, lg: 1, md: 1, sm: 2, xs: 1 }}
      >
        <Descriptions.Item label="Usuario">
          {userInfo.username}
        </Descriptions.Item>
        <Descriptions.Item label="Email">{userInfo.email}</Descriptions.Item>
        <Descriptions.Item label="Teléfono">{userInfo.phone}</Descriptions.Item>
        <Descriptions.Item label="País">{userInfo.country}</Descriptions.Item>
      </Descriptions>
    </Col>
  );
};

export default UserInfo;
