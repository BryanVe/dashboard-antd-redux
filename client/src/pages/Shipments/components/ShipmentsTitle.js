import React from "react";
import { useDispatch } from "react-redux";
import { Col, Button, Typography } from "antd";

import { openDrawerNewShipment } from "../../../actions";

const { Title } = Typography;

const ShipmentsTitle = () => {
  const dispatch = useDispatch();

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
      <Button
        type="primary"
        size="large"
        onClick={() => dispatch(openDrawerNewShipment())}
      >
        Crear nuevo envío
      </Button>
    </Col>
  );
};

export default ShipmentsTitle;
