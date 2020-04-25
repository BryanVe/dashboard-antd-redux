import React from "react";

const siderHeader = {
  color: "white",
  fontSize: 20,
  fontWeight: "bold",
  padding: 10,
  textAlign: "center",
};

const SidebarTitle = ({ isDesktop = false, desktopCollapsed }) => {
  return (
    <div
      style={
        isDesktop
          ? desktopCollapsed
            ? { ...siderHeader, fontSize: 10 }
            : siderHeader
          : { ...siderHeader, color: "#000" }
      }
    >
      FakeApp
    </div>
  );
};

export default SidebarTitle;
