import React, { Component } from 'react'
import NullSlug from '../components/NullSlug/index';
import DefaulImg from '../images/img-1.png'
import { Link } from 'react-router-dom'
import data from '../data'
import Banner from '../components/Banner/index'

export default class SingleAcademicFormation extends Component {


  state = {
    slug: this.props.match.params.slug,
    data: {},
    loading: true
  }


  componentDidMount() {
    let newData = data;

    this.setState({
      data: newData,
      loading: false
    })
  }

  getFormation = (slug) => {

    let tempFormations = [...this.state.data.formation];
    const formation = tempFormations.find(formation => formation.id === slug)
    return formation;
  }

  render() {
    if (this.state.loading) {
      return <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    }

    const formation = this.getFormation(this.state.slug);

    if (!formation) {
      return <NullSlug styleClass="error">
        <div>
          <h1 className="h1 text-center">404</h1>
          <div className='justify-items-center'>
            <Link to="/formation" className="text-uppercase btn btn-primary btn-lg mt-3 mb-5 " >
              Formações Academicas
            </Link>
          </div>
          <h3 className="h3 text-center">Formação academica não encontrada</h3>
        </div>
      </NullSlug>
    }

    const { img,
      name,
      info,
      details,
      institution,
      localization,
      institutionType,
      evaluationNote,
      institutionSite,
      period,
      beginningDate,
      endDate,
      formationType,
      courseHours,
      levelEducation }
      = formation;

    return (
      <article >
        <div style={{
          backgroundImage: `url(${!img ? DefaulImg : img}) `,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          minHeight: '60vh'
        }} className="justify-items-center">
          <Banner name={name} subtitle={info} >
            <Link to="/formation" className="text-uppercase btn btn-primary btn-lg mt-3 mb-5 " >
              Voltar
              </Link>
          </Banner>
        </div>

        <div className="container">
          <div className="single-academic-description">
            <div >
              <h4 className="h4 third-color">Detalhes</h4>
              <p className="p">{details} </p>
            </div>
            <div className="single-academic-description-right">
              <h4 className="h4 third-color">Instituição</h4>
              <p className="p-info">Nome: {institution}</p>
              <p className="p-info">Localidade: {localization}</p>
              <p className="p-info">Tipo de Instituição: {institutionType}</p>
              <p className="p-info">Nota de Avaliação: {evaluationNote}</p>
              <p className="p-info" >Site: <a href={institutionSite} className="p-info" >{institutionSite}</a></p>
            </div>
          </div>

          <div className="single-academic-title-course">
            <h4 className="h4 mb-3 third-color">Curso</h4>

            <div className="single-academic-course">
              <div>
                <p className="p-info">-Periodo: {period}</p>
              </div>
              <div>
                <p className="p-info">-Data de Inicio: {beginningDate}</p>
              </div>
              <div>
                <p className="p-info">-Data de Término: {endDate}</p>
              </div>
              <div>
                <p className="p-info">-Horas: {courseHours}</p>
              </div>
              <div>
                <p className="p-info">-Nivel de Ensino: {levelEducation}</p>
              </div>
              <div>
                <p className="p-info">-Tipo de Formação: {formationType}</p>
              </div>

            </div>

          </div>
        </div>
      </article >
    )
  }
}

