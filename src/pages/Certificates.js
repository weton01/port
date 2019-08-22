import React, { Component } from 'react'
import Certificate from '../components/Certificate/index'
import Data from '../data'


export default class Certificates extends Component {
 state = {
  data: {},
  loading: true
 }

 componentDidMount() {
  let newData = Data;

  this.setState({
   data: newData,
   loading: false
  })
 }

 render() {
  return (
   <>

    <div className="list-container ">
     <div style={{ width: '100%', maxWidth: '1020px' }}>
      <h2 className="h2 mt-5 mb-3 text-center">certificados</h2>
      <h3 className="h3 text-center mb-5">Lista de certificados</h3>

      <ul className="certificates-list ">
       {this.state.loading ? <div> carregando </div> :
        this.state.data.certificates.map(certificate =>
         (<Certificate key={certificate.id} data={certificate} />)
        )
       }

      </ul>
     </div>
    </div>
   </>
  )
 }
}
