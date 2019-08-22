import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../Sidebar/index'
import logo from '../../images/logo-1.png'
import { FiMenu } from "react-icons/fi";
//import { FaLanguage } from "react-icons/fa";

import './styles.css';


export default class Navbar extends Component {

  state = {
    isOpen: true,
    theposition: window.pageYOffset,
    styleNavbar: 'transparent-navbar',
    styleSidebar: 'dark-sidebar',
    localUrl: window.location.pathname
  }

  handleMenu = () => {

    this.state.isOpen ?
      this.setState({ isOpen: false }) :
      this.setState({ isOpen: true })
  }

  handleScroll = () => {
    this.setState({ theposition: window.pageYOffset });
    this.setState({ isOpen: true });
  }

  handleClick = () => {
    this.setState({ styleNavbar: 'dark-navbar', styleSidebar: 'dark-sidebar' });
    this.setState({ isOpen: true });
  }

  handleClickHome = () => {
    this.setState({ styleNavbar: 'transparent-navbar' });
    this.setState({ isOpen: true });

  }

  handleClose = () => {
    this.setState({ isOpen: true });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.state.localUrl === '/' ?
      this.setState({ styleNavbar: 'transparent-navbar' }) :
      this.setState({ styleNavbar: 'dark-navbar' })
  }

  render() {
    const { isOpen } = this.state;

    return (
      <nav className={`perso-navbar ${this.state.styleNavbar}`}>
        <div className="menu-icon-container">
          <FiMenu onClick={this.handleMenu} style={{ width: '50px' }} className="menu-icon color-light" />
        </div>
        <ul className="menu-list-container">
          <li className="ml-4 mr-4">
            <Link onClick={this.handleClick} className="link" to='/formation'>
              <h5 >FORMAÇÃO</h5>
            </Link>
          </li>
          <li className="mr-4">
            <Link onClick={this.handleClick} className="link" to='/skills'>
              <h5>HABILIDADES</h5>
            </Link>
          </li>
          <li className="mr-4">
            <Link onClick={this.handleClickHome} className="link" to='/'>
              <img src={logo} className="nav-logo" alt="logo" />
            </Link>
          </li >
          <li className="mr-4">
            <Link onClick={this.handleClick} className="link" to='/career'>
              <h5>CARREIRA</h5>
            </Link>
          </li>
          <li className="mr-4">
            <Link onClick={this.handleClick} className="link" to='/certificates'>
              <h5>CERTIFICADOS</h5>
            </Link>
          </li>
        </ul>
        {!isOpen
          ? <Sidebar handleClick={this.handleClick} handleClickHome={this.handleClickHome} handleClose={this.handleClose} styleClass={`perso-sidebar open-sidebar ${this.state.styleSidebar}`} >
          </Sidebar>
          : <Sidebar handleClick={this.handleClick} handleClickHome={this.handleClickHome} handleClose={this.handleClose} styleClass={`perso-sidebar close-sidebar ${this.state.styleSidebar}`} />}
      </nav>

    )
  }
}
