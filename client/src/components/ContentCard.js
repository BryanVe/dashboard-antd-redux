import React from "react";
import { Col, Card } from "antd";

const CardContent = ({
  xs,
  md,
  title = null,
  children,
  bodyStyle = {},
  actions = [],
  extra = null,
}) => {
  return (
    <Col xs={xs} md={md} style={{ padding: "0 15px" }}>
      <Card
        actions={actions}
        bodyStyle={bodyStyle}
        title={title}
        extra={extra}
        style={{ width: "100%", marginBottom: "20px" }}
      >
        {children}
      </Card>
    </Col>
  );
};

export default CardContent;
