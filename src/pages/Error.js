import React from 'react'
import Header from '../components/Header/index'
import { Link } from 'react-router-dom'

export default function Error() {
 return (
  <Header title="404">
   <h2>Page not found!</h2>
   <Link to="/" className="text-uppercase btn btn-primary btn-lg mt-3" >
    inicio
   </Link>
  </Header>
 )
}
