import React from "react";
import { Col, Typography } from "antd";

const { Title } = Typography;

const ShipmentsTitle = () => {
  return (
    <Col
      xs={24}
      style={{
        padding: "20px 0",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Title level={2} style={{ margin: 0, color: "#242424" }}>
        Lista de envíos
      </Title>
    </Col>
  );
};

export default ShipmentsTitle;
