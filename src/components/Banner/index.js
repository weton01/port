import React from 'react';

import './styles.css';

export default function components({ children, name, subtitle }) {

 console.log(subtitle);
 return (


  <div className="banner">
   <h1 className="h1">{name}</h1>
   <div></div>
   <p className="h6">{subtitle}</p>
   {children}
  </div>
 );
}
