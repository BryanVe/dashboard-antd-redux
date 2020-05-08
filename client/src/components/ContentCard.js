import React from "react";
import { Col, Card } from "antd";

const CardContent = ({
  xs,
  sm,
  md,
  lg,
  title = null,
  children,
  style = {},
  bodyStyle = {},
  headStyle = {},
  actions = [],
  extra = null,
}) => {
  return (
    <Col xs={xs} sm={sm} md={md} lg={lg} style={{ padding: "0 15px" }}>
      <Card
        actions={actions}
        bodyStyle={bodyStyle}
        title={title}
        headStyle={headStyle}
        extra={extra}
        style={{ width: "100%", marginBottom: "20px", ...style }}
      >
        {children}
      </Card>
    </Col>
  );
};

export default CardContent;
