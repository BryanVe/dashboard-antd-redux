import React from "react";
import { Dashboard, Shipments, Settings } from "./pages";

import { HomeOutlined, MailOutlined, SettingOutlined } from "@ant-design/icons";

const routes = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: <HomeOutlined />,
    component: Dashboard,
  },
  {
    label: "Envíos",
    path: "/shipments",
    icon: <MailOutlined />,
    component: Shipments,
  },
  {
    label: "Configuración",
    path: "/settings",
    icon: <SettingOutlined />,
    component: Settings,
  },
];

export default routes;
