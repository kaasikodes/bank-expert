import { Layout } from "antd";
import React, { useState } from "react";
import { TopBar } from "./TopBar";
import SideBar from "./SideBar";

const { Content } = Layout;
const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // TODO: Get Auth Data n populate avatar
  const [showSideBar, setShowSideBar] = useState(true);

  return (
    <Layout className="text-accent" hasSider>
      <SideBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      <Layout className="min-h-[100vh] lg:ml-[200px]">
        <TopBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
        <Content className=" pb-4 px-6 pt-24">{children}</Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
