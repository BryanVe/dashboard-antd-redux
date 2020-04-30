import React from "react";
import { useDispatch } from "react-redux";
import { Drawer } from "antd";

import NewShipmentForm from "./NewShipmentForm";
import { openDrawerNewShipment } from "../../../actions";

const DrawerForm = () => {
  const dispatch = useDispatch();
  // const { openDrawer } = useSelector((state) => state.shipmentsMessagesMethods);

  return (
    <React.Fragment>
      <Drawer
        width={300}
        title="New shipment"
        placement="right"
        closable={false}
        onClose={() => dispatch(openDrawerNewShipment())}
        visible={false}
      >
        <NewShipmentForm />
      </Drawer>
    </React.Fragment>
  );
};

export default DrawerForm;
