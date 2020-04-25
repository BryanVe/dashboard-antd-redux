import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Row } from "antd";

import DrawerForm from "./components/DrawerForm";
import ShipmentsTitle from "./components/ShipmentsTitle";
import ShipmentsTable from "./components/ShipmentsTable";
import { shipmentsRequest } from "../../actions";

const Shipments = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(shipmentsRequest());
  }, [dispatch]);

  return (
    <Row style={{ padding: "0 15px" }}>
      <ShipmentsTitle />
      <ShipmentsTable />
      <DrawerForm />
    </Row>
  );
};

export default Shipments;
