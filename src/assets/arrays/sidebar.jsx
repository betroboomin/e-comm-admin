import React from "react";
import DashboardIcon from "../icon/dashboard-icon";
import NotificationIcon from "../icon/notificationIcon";
import MessagesIcon from "../icon/messageIcon";
import HelpIcon from "../icon/helpIcon";
import SettingIcon from "../icon/settingIcon";
import ProductIcon from "../icon/product-icon";

const sidebar = [
    {
        
            name: "",
            items : [
                {
                name: "Dashboard",
                icon:<DashboardIcon width="25px" height="25px"/>,
                link: "/"
            },
                {
                name: "Product",
                icon:<ProductIcon width="25px" height="25px"/>,
                link: "/product-home"
            },
                {
                name: "Notification",
                icon:<NotificationIcon width="25" height="25" />,
                link: "/notification"
            },
                {
                name: "Messages",
                icon:<MessagesIcon width="25" height="25"/>,
                link: "/messages"
            },
                
        ],
    
    },
    // {
        
    //         name: "dashboard",
    //         items : [{
    //             name: "dashboard",
    //             icon:DashboardIcon,
    //             link: "/dashboard"
    //         }],
    
    // },
   
    

]

const bottomSideBar = [
    {
        name: "Help",
        icon:<HelpIcon height="25" width="25" />,
        link: "/help"
    },
    {
        name: "Setting",
        icon:<SettingIcon height="25" width="25" />,
        link: "/setting"
    },
]
export  {bottomSideBar, sidebar};