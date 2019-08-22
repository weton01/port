import React, { Component } from 'react'
import Skill from '../components/Skill/index'
import Data from '../data'

export default class Skills extends Component {

  state = {
    data: {},
    loading: true
  }

  componentDidMount() {
    let newData = Data;

    this.setState({
      data: newData
    })
  }

  render() {



    return (
      <>
        <div className="list-container">

          <div style={{ width: '100%', maxWidth: '1020px', }}>
            <h2 className="h2 mt-5 text-center text-dark letter-spacing mb-3 ">Habilidades</h2>
            <h3 className="h3 text-center mb-5">Lista de habilidades</h3>

            <h3 className=" text-center mb-4  third-color">Web</h3>
            <ul className="skill-list">
              {!this.state.data.skills ? (
                <li > Vazio </li>
              ) :
                this.state.data.skills.web.map(web =>
                  (<Skill key={web.idSkill} data={web} />))
              }
            </ul>


            <h3 className=" text-center mb-4 mt-5 third-color">Desktop</h3>
            <ul className="skill-list">
              {!this.state.data.skills ? (
                <li > Vazio </li>
              ) :
                this.state.data.skills.desktop.map(web =>
                  (<Skill key={web.idSkill} data={web} />))
              }
            </ul>


            <h3 className=" text-center mb-4 mt-5 third-color">Banco de Dados</h3>
            <ul className="skill-list">
              {!this.state.data.skills ? (
                <li > Vazio </li>
              ) :
                this.state.data.skills.dataBase.map(web =>
                  (<Skill key={web.idSkill} data={web} />))
              }
            </ul>

            <h3 className=" text-center mb-4 mt-5 third-color">Machine Learning</h3>
            <ul className="skill-list">
              {!this.state.data.skills ? (
                <li > Vazio </li>
              ) :
                this.state.data.skills.machineLearning.map(web =>
                  (<Skill key={web.idSkill} data={web} />))
              }
            </ul>

            <h3 className=" text-center mb-4 mt-5 third-color">Ferramentas</h3>
            <ul className="skill-list">
              {!this.state.data.skills ? (
                <li > Vazio </li>
              ) :
                this.state.data.skills.tools.map(web =>
                  (<Skill key={web.idSkill} data={web} />))
              }
            </ul>
          </div>
        </div>
      </>
    )
  }
}
