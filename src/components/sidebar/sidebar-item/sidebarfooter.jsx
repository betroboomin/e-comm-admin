import React from 'react'
import { bottomSideBar } from '../../../assets/arrays/sidebar';
import { Link } from 'react-router-dom';
import profilepicture from '../../../assets/images/rileysad.jpg'
import './Sidebaritem.css'

const Sidebarfooter = () => {
  return (
    <div className="footer-sidebar">
      {
              bottomSideBar.map((item, i) => (
                
                <div key={i} className="sidebar-item-content">
                <Link to={item.link} className='icons-sec listing'>
                {item.icon}
                <h1> {item.name}</h1>
                </Link>
                </div>
                
              ))
            }
          <div className="profile-check">
            {/* <img alt='' src={profilepicture} /> */}
            
            <div className="backgroundimage" style={{ backgroundImage: `url(${profilepicture})` }}>

            </div>
            <div className="profile-text">
              <div className="name">
                Kodiah Bertrand
              </div>
              <div className="email">
                Betroda7st@gmail.com
              </div>
            </div>
            </div>  
      </div>
  )
}

export default Sidebarfooter