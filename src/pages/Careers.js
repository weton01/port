import React, { Component } from 'react'
import Career from '../components/Career/index'
import Data from '../data';
export default class Careers extends Component {


 state = {
  data: {}
 }

 componentDidMount() {
  let newData = Data;

  this.setState({
   data: newData
  });

 }

 render() {
  return (
   <>
    <div className="list-container">
     <div>
      <h2 className="h2 text-center mt-5 mb-3">Carreira</h2>
      <h3 className="h3 text-center mb-5">Lista de lugares onde trabalhei</h3>
      <ul className="vertical-list">
       {!this.state.data.careers ? <li><h1>vazio</h1></li> :
        this.state.data.careers.map((career) => (
         <Career key={career.id} career={career} />
        ))
       }
      </ul>
     </div>
    </div>
   </>
  )
 }
}
