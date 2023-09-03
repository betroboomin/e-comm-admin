import React from "react";
import './Sidebar.css'
import Menuicon from "../../assets/icon/menu-icon";
import Sidebaritem from "./sidebar-item/Sidebaritem";
import Sidebarfooter from "./sidebar-item/sidebarfooter";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div>
      <div className="sidebar-logo">
            <Menuicon />
            <h1>Betro<span className="admin-color">Admin</span></h1>
        </div>
        <Sidebaritem />
      </div>
        <div>
        <Sidebarfooter />
        </div>
        

    </div>
  )
}

export default Sidebar