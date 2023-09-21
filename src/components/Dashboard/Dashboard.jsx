import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css"
import image from "../../assets/images/rileysad.jpg"
import { Line, LineChart, ResponsiveContainer } from "recharts";
import Chartbox from "../charts/chartbox/Chartbox";
import Example from "../charts/pieChart/PieChart";
import { chartboxuser, chartboxConversion, chartboxProduct, chartboxRevenue, chartboxVisit, chartboxProfit } from "../../assets/arrays/sidebar";
import BarCharts from "../charts/barcharts/BarCharts";

const Dashboard = () => {
  const array = [
    {
    name: "peter",
    age: 24,
    address: "Bamenda",
    image: image,
    color:"rgb(0, 143, 143)"
  },
    {
    name: "john",
    age: 20,
    address: "Douala",
    image: image,
    color:" rgb(0, 143, 0)"
  },
    {
    name: "Mary",
    age: 18,
    address: "Baffousam",
    image: image,
    color:"rgb(162, 180, 0)"
  },
    {
    name: "Alexis",
    age: 24,
    address: "Ndop",
    image: image,
    color:"rgb(180, 21, 0)"
  },
    {
    name: "ryan",
    age: 24,
    address: "Ndop",
    image: image,
    color:"rgb(0, 153, 180)"
  },
    {
    name: "curtis",
    age: 24,
    address: "Ndop",
    image: image,
    color:"rgb(180, 0, 156)"
  },
    {
    name: "brandon",
    age: 24,
    address: "Ndop",
    image: image,
    color:"rgb(180, 0, 156)"
  },

];


  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <Link to="/" className="dashboard-card box1 listing ">
          <div className="box box1">
            <h1 className="box-heading">New Users</h1>
            { 
            
              array.slice(0,7).map((item,i)=>(
                <div key={i} className="users-dashboard">
                <div className="users-left">
                  <img className="user-image" src={item.image} alt="" />
                  <div className="user-text-sec">
                    <span className="user-name-itself">{item.name}</span>
                    <span>{item.address}</span>
                  </div>
                </div>
                <span className="user-Age" style={{ color: `${item.color}` }}>{item.age}</span>
              </div>
              ))
            }
           
          </div>
        </Link>
        <Link to="/" className="dashboard-card listing box2 ">
          {
            chartboxuser.map((item)=>(
              <Chartbox {...item}/>
            ))
          }
         
        </Link>
        <Link to="/" className="dashboard-card listing box3">
        {
            chartboxRevenue.map((item)=>(
              <Chartbox {...item}/>
            ))
          }
        </Link>
        <Link to="/" className="dashboard-card listing box4">
          <div className="box ">

            <span>item-name box4</span> 
            {/* <Example className="straight-Pie"/> */}
          </div>
        </Link>
        <Link to="/" className="dashboard-card listing box5">
        {
            chartboxProduct.map((item)=>(
              <Chartbox {...item}/>
            ))
          }
        </Link>
        <Link to="/" className="dashboard-card listing box6">
        {
            chartboxConversion.map((item)=>(
              <Chartbox {...item}/>
            ))
          }
        </Link>

        <Link to="/" className="dashboard-card listing box7">
          <div className="box ">
            <span>item-name box7</span>
          </div>
        </Link>
        <Link to="/" className="dashboard-card listing box8">
          <div className="box box81">
          {
            chartboxVisit.map((item)=>(
              <BarCharts {...item}/>
            ))
          }
          </div>
        </Link>
        <Link to="/" className="dashboard-card listing box9">
          <div className="box box81">
          {
            chartboxProfit.map((item)=>(
              <BarCharts {...item}/>
            ))
          }
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
