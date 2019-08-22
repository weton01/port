import React from 'react'

import './styles.css';

export default function Header({ children }) {
 return (
  <header className="header-home">
   {children}
  </header >
 )
}


Header.defaultProps = {
 title: "Default title",
 styleClass: "header-home"
}