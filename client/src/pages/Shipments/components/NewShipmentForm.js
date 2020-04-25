import React from "react";
import { Form, Input, Select, Button } from "antd";
import { useDispatch } from "react-redux";
import { addNewShipment } from "../../../actions";
const { Option } = Select;

const rules = {
  required: true,
  message: "Requerido*",
};

const NewShipmentForm = () => {
  const dispatch = useDispatch();
  const onFinish = (values) => {
    dispatch(addNewShipment(values));
  };

  return (
    <Form size="large" onFinish={onFinish}>
      <Form.Item name="cliente" rules={[rules]}>
        <Input placeholder="Cliente" />
      </Form.Item>
      <Form.Item name="herramienta" rules={[rules]}>
        <Select placeholder="Herramienta">
          {[1, 2, 3, 4, 5].map((herramienta) => (
            <Option key={herramienta} value={`Herramienta ${herramienta}`}>
              Herramienta #{herramienta}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item name="cargado_por">
        <Input placeholder="Cargado por..." />
      </Form.Item>

      <Form.Item name="estado" rules={[rules]}>
        <Select placeholder="Estado">
          {[1, 2, 3, 4, 5].map((estado) => (
            <Option key={estado} value={`Estado ${estado}`}>
              Estado #{estado}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Agregar
        </Button>
      </Form.Item>
    </Form>
  );
};

export default NewShipmentForm;
