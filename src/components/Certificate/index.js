import React from 'react'
import DefaultImage from '../../images/img-5.png'
import DefaultPdf from '../../items/pdf-1.pdf'
import { GoFilePdf } from "react-icons/go";
import { MdHttp } from "react-icons/md";

import './styles.css';


export default function Certificate({ data }) {
 const { img, pdf, site, name, info, hours, academy } = data;

 return (
  <li className="certificate">
   <img src={img ? img : DefaultImage} alt="certificados" />

   <div className="mt-4 mb-3 text-center">
    <a href={pdf ? pdf : DefaultPdf} target="_blank" rel="noopener noreferrer" className="p-info text-center mr-4" data-toggle="tooltip" data-placement="bottom" title="Certificado" ><GoFilePdf style={{ height: '65px', color: '#262626' }} /></a>
    <a href={site} target="_blank" rel="noopener noreferrer" className="p-info text-center " data-toggle="tooltip" data-placement="bottom" title="Site do curso"><MdHttp className="icon" /></a>
   </div>

   <h6 className="h6 text-center mb-3">{name}</h6>
   <p className="p text-center">{info}</p>
   <hr />
   <div className="row p-2">
    <div className="col-6">
     <p className="p">{hours}</p>
    </div>
    <div className="col-6">
     <p className="p text-right">{academy}</p>
    </div>
   </div>
  </li >
 )
}

Certificate.defaultProps = {
 img: null,
 pdf: '',
 site: '/',
 name: 'Default Name',
 info: 'lorem',
 hours: '0 Horas',
 academy: 'Default'
}
