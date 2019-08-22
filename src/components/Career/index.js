import React from 'react'
import DefaultImg from '../../images/img-1.png'

import './styles.css';

export default function Career({ career }) {

 const { office, img, profession, period, startDate, endDate } = career;

 return (
  <li className="career">
   <div className="left-img-container" >
    <img src={img ? img : DefaultImg} alt="logo" />
   </div>
   <div className="career-info">
    <h3 className="h3 mt-3">{profession}</h3>
    <h5 className="h5 mt-3">Cargo: {office}</h5>
    <h5 className="h5">Periodo: {period}</h5>
    <h5 className="h5">Data inicio: {startDate} </h5>
    <h5 className="h5 ">Data termino: {endDate} </h5>
   </div>
  </li>

 )
}

Career.defaultProps = {
 career: {
  profession: 'Default Profession',
  office: 'Default office',
  period: '1 mounth',
  startDate: '01/01/2019',
  endDate: '01/01/2019'
 }
}
