import React from "react";
import { Layout } from "antd";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

const { Content } = Layout;

const headerHeight = 75;

const headerStyles = {
  backgroundColor: "#F2F2F2",
  position: "fixed",
  width: "100%",
  padding: 0,
  zIndex: 1,
  height: headerHeight,
};

const contentStyles = {
  height: "100vh",
  padding: `${headerHeight + 30}px 15px 30px 15px`,
  overflowY: "visible",
  maxHeight: "100vh",
};

const MainLayout = ({ children, label }) => {
  return (
    <Layout style={{ width: "100vw" }}>
      <Sidebar />
      <Layout>
        <Navbar label={label} style={headerStyles} />
        <Content>
          <div style={contentStyles}>{children}</div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
