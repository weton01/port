import React from 'react'
import DefaultImg from '../../images/img-1.png'
import { Link } from 'react-router-dom'

import './styles.css';

export default function Formation({ formation }) {
 const { id, img, name, info } = formation;

 return (
  <article className="formation">
   <Link to={`/formation/${id}`}   >
    <div className="img-container" >
     <h3 className="h3 formation-title">{name}</h3>
     <img src={img === '' || !img ? DefaultImg : img} alt="ss" />
     <h6 className="h6 formation-info">
      {info}
     </h6>
    </div>
   </Link>
  </article >
 )
}

Formation.defaultProps = {
 formation: {
  img: DefaultImg,
  name: 'Default Name',
  info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus perferendis fugiat deserunt laborum nostrum odio eum accusamus, alias sunt consectetur recusandae. '
 }
}