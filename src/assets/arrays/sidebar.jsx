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

const chartboxRevenue = [
    {
        datakey: "revenue",
        number: "10,000",
        color: "rgb(255, 165, 0)",
        title: "Total Revenue",
        percentage: 50,
        chartArray: [
          { name: 'Sun', revenue: 150 },
          { name: 'Mon', revenue: 200 },
          { name: 'Tue', revenue: 900 },
          { name: 'Wed', revenue: 150 },
          { name: 'Thu', revenue: 800 },
          { name: 'Fri', revenue: 250 },
          { name: 'Sat', revenue: 200 },
        ]
      }
]
const chartboxConversion = [
    {
        datakey: "ratio",
        number: "8,500",
        color: "rgb(255, 99, 71)",
        title: "Total Conv",
        percentage: 62,
        chartArray: [
          { name: 'Sun', ratio: 650 },
          { name: 'Mon', ratio: 700 },
          { name: 'Tue', ratio: 1200 },
          { name: 'Wed', ratio: 250 },
          { name: 'Thu', ratio: 950 },
          { name: 'Fri', ratio: 300 },
          { name: 'Sat', ratio: 600 },
        ]
      }
]
const chartboxVisit = [
    {
        datakey: "visits",
        number: "8,500",
        color: "blue",
        title: "Total Visits",
        percentage: 62,
        chartArray: [
          { name: 'Sun', visits: 650 },
          { name: 'Mon', visits: 700 },
          { name: 'Tue', visits: 1200 },
          { name: 'Wed', visits: 250 },
          { name: 'Thu', visits: 950 },
          { name: 'Fri', visits: 300 },
          { name: 'Sat', visits: 600 },
        ]
      }
]
const chartboxProfit = [
    {
        datakey: "profit",
        number: "8,500",
        color: "purple",
        title: "Total Profits",
        percentage: 62,
        chartArray: [
          { name: 'Sun', profit: 250 },
          { name: 'Mon', profit: 700 },
          { name: 'Tue', profit: 600 },
          { name: 'Wed', profit: 250 },
          { name: 'Thu', profit: 1050 },
          { name: 'Fri', profit: 300 },
          { name: 'Sat', profit: 1200 },
        ]
      }
]
const chartboxProduct = [
    {
        datakey: "amount",
        number: "12,000",
        color: "rgb(0, 0, 255)",
        title: "Total Products",
        percentage: 70,
        chartArray: [
          { name: 'Sun', amount: 900 },
          { name: 'Mon', amount: 300 },
          { name: 'Tue', amount: 1500 },
          { name: 'Wed', amount: 400 },
          { name: 'Thu', amount: 1100 },
          { name: 'Fri', amount: 500 },
          { name: 'Sat', amount: 1000 },
        ]
      }
]
const chartboxuser = [
    {
        datakey:"users",
        number: "11.648",
        color: "rgb(0, 131, 131)",
        title: "Total Users",
        percentage:46,
        chartArray : [
            { name: 'Sun', users: 750 },
            { name: 'Mon', users: 800 },
            { name: 'Tue', users: 850 },
            { name: 'Wed', users: 420 },
            { name: 'Thu', users: 950 },
            { name: 'Fri', users: 110 },
            { name: 'Sat', users: 400 },
        ]
    }
]
export  {bottomSideBar,chartboxProfit,chartboxVisit,chartboxRevenue,chartboxProduct,chartboxConversion , sidebar,chartboxuser};