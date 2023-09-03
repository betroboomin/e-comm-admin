import React from 'react'
import './Gallery.css'
import backgroundImage from '../../assets/images/rileysad.jpg'
import file from '../../assets/arrays/MOCK_DATA.json'

const Gallery = () => {
  return (
    <div className='gallery'>
        {
            file.map((item) => (
                <div key={item.id} className="galery-box " style={{ backgroundImage: `url(${item.photos})` }}>
                <div className='galery-box-name'>{item.email}</div>
            </div>
            ))
        }
       
        
        
    </div>
  )
}

export default Gallery