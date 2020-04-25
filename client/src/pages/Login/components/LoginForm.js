import React from "react";
import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import { Form, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import FormInput from "../../../components/FormInput";
import { authUserRequest } from "../../../actions";

const wrapper = {
  width: "340px",
  padding: "20px",
  backgroundColor: "#F2F2F2",
  borderRadius: "5px",
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const rules = [{ required: true, message: "Campo requerido*" }];
  const onFinish = (values) => {
    dispatch(authUserRequest(values, history));
  };

  return (
    <div style={wrapper}>
      <Form onFinish={onFinish} size="large">
        <FormInput
          hasFeedBack
          name="username"
          rules={rules}
          prefix={<UserOutlined />}
          placeholder="Usuario"
        />
        <FormInput
          hasFeedBack
          name="password"
          rules={rules}
          prefix={<LockOutlined />}
          type="password"
          placeholder="Contraseña"
        />
        <Form.Item style={{ margin: 0 }}>
          <Button style={{ width: "100%" }} type="primary" htmlType="submit">
            Ingresar
          </Button>
          <div style={{ textAlign: "end", paddingTop: "10px" }}>
            Or <Link to="/register">register now</Link>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
