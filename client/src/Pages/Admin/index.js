import React, { useEffect } from "react";
import { Tabs } from "antd";
import Adminprojects from "./Adminprojects";
import Admineducations from "./Admineducations";
import Adminexperiences from "./Adminexperiences";
import { useSelector } from "react-redux";
import Admincourses from "./Admincourses";
import Adminabout from "./Adminabout";
import Adminintro from "./Adminintro";
import Header from "../../components/Header";
import Admincontact from "./Admincontact";
function Index() {
  const { portfoliodata } = useSelector((state) => state.root);
  const { TabPane } = Tabs;
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location.href = "/admin-login";
    }
  });
  return (
    <div>
      <Header />
      <div className="flex justify-between p-5">
      <h1 className="p-5 text-primary text-2xl font-semibold adminpanel ">
        Admin Panel
      </h1>
      <h1 className="underline text-primary text-xl cursor-pointer"
         onClick={()=>
          {
            localStorage.removeItem("token");
            window.location.href = "/admin-login";
          }}> Logout</h1>
      </div>
     
      {portfoliodata && (
        <div className="p-5">
          <Tabs defaultActiveKey="1">
            <TabPane tab="Intro" key="1">
              <Adminintro />
            </TabPane>
            <TabPane tab="About" key="2">
              <Adminabout />
            </TabPane>
            <TabPane tab="Experenices" key="3">
              <Adminexperiences />
            </TabPane>
            <TabPane tab="Projects" key="4">
              <Adminprojects />
            </TabPane>
            <TabPane tab="Education" key="5">
              <Admineducations />
            </TabPane>
            <TabPane tab="Courses" key="6">
              <Admincourses />
            </TabPane>
            <TabPane tab="Contact" key="7">
              <Admincontact />
            </TabPane>
          </Tabs>
        </div>
      )}
    </div>
  );
}
export default Index;
