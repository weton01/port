import React, { Component } from 'react'
import FormationList from '../components/Formation/FormationList'
import data from '../data'

export default class AcademicFormation extends Component {

 state = {
  data: [],
  loading: true
 }


 componentDidMount() {

  let newData = data;

  this.setState({
   data: newData,
   loading: false
  })

 }

 render() {
  return (
   <>
    <div className="container-fluid ">
     <FormationList data={this.state.data.formation} loading={this.state.loading} />
    </div>
   </>
  )
 }
}


