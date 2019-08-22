import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosClose } from "react-icons/io";

import './styles.css';

export default function Sidebar({ styleClass, handleClick, handleClickHome, handleClose }) {
 return (
  <>
   <div className={styleClass}>
    <div className="justify-items-right mr-2 mt-2">
     <IoIosClose className="close-icon" onClick={handleClose} />
    </div>

    <ul className="mt-3 menu-list">
     <li >
      <Link onClick={handleClickHome} className="link-sidebar text-center " to='/'>
       <h5 > Inicio</h5>
      </Link>
     </li >
     <li >
      <Link onClick={handleClick} className="link-sidebar text-center" to='/formation'>
       <h5>Formação</h5>
      </Link>
     </li>
     <li >
      <Link onClick={handleClick} className="link-sidebar text-center" to='/skills'>
       <h5>Habilidades</h5>
      </Link>
     </li>
     <li >
      <Link onClick={handleClick} className="link-sidebar text-center" to='/career'>
       <h5>Carreira</h5>
      </Link>
     </li>
     <li >
      <Link onClick={handleClick} className="link-sidebar text-center" to='/certificates'>
       <h5>Certificados</h5>
      </Link>
     </li>
    </ul>
   </div>
  </>
 )
}
