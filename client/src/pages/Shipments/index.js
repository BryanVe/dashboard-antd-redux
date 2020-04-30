import React from "react";
import { Row } from "antd";

import DrawerForm from "./components/DrawerForm";
import ShipmentsTitle from "./components/ShipmentsTitle";
import ShipmentsTable from "./components/ShipmentsTable";

const Shipments = () => {
  return (
    <Row style={{ padding: "0 15px" }}>
      <ShipmentsTitle />
      <ShipmentsTable />
      <DrawerForm />
    </Row>
  );
};

export default Shipments;
