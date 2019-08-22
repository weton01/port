import React, { Component } from 'react'
import Formation from './Formation'

import './styles.css';

export default class FormationList extends Component {


  render() {

    const { data, loading } = this.props;

    if (loading) {
      return <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    }

    return (
      <>
        <div className="list-container">
          <div>
            <h2 className="h2 text-center mt-5 text-dark letter-spacing"> Formação Academica </h2>

            <h3 className="h3 mt-3 text-center mb-5">Lista de cursos</h3>
            <div className="formation-list" >
              {data.map(formation => (
                <Formation key={formation.id} formation={formation} />
              ))}
            </div>
          </div>
        </div>
      </>
    )
  }

}

