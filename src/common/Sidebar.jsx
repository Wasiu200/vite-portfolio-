import React from 'react'
import { FaEnvelope } from 'react-icons/fa'
import './Sidebar.css'
const sidebar = () => {
  return (
<>
 <aside className="sidenav">
        <img src= "/perfect (1).png" alt="" />
        <h1>Asimiyu wasiu</h1>
        <p className="developer">Web developer</p>
        <hr />
        <div>
          <span>
            <FaEnvelope />
          </span>
          <span>
            <p className='mail'>Email:</p>
            <p>Adesinamariam7@gmail.com</p>
          </span>
           <span>
            <p className='mail'>Phone:</p>
            <p>+234 813 115 5404</p>
          </span>
           <span>
            <p className='mail'>Location:</p>
            <p>Oke-Baale, Osogbo</p>
          </span>
        </div>
      </aside>
</>  
)
}

export default sidebar