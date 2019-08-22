import React from 'react'

import './styles.css';

export default function NullSlug({ children, styleClass }) {
 return (
  <div className={styleClass}>
   {children}
  </div >
 )
}
