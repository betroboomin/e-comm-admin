import React from 'react'
import { Link } from 'react-router-dom';
import DashboardIcon from '../../../assets/icon/dashboard-icon';
import './Sidebaritem.css'
import profilepicture from '../../../assets/images/rileysad.jpg'
import {sidebar, bottomSideBar} from '../../../assets/arrays/sidebar';

const Sidebaritem = () => {
  return (
    <div className='sidebar-item'>
      {
        sidebar.map((item, i) => (
          <div key={i}>
          <div className="heading">
            {item.name}
          </div>
        
          
            {
              item.items.map((item, i) => (
                
                <div key={i} className="sidebar-item-content">
                <Link to={item.link} className='icons-sec listing'>
                {item.icon}
                <h1> {item.name}</h1>
                </Link>
                </div>
                
              ))
            }
                
                
            
        </div>
        ))
      }
      
        
    </div>
  )
}

export default Sidebaritem;