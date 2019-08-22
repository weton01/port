import React, { Component } from 'react'
import Header from '../components/Header/index'

import { DiReact } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


import { Icon } from '@iconify/react';
import reduxIcon from '@iconify/icons-simple-icons/redux';
import Img from '../images/img-8.png'


export default class Home extends Component {
  render() {
    return (
      <article>
        <Header />
        <div className="justify-items-center p-2 pb-5" >
          <div>
            <h3 className="h3 text-center mt-5 third-color">Sobre mim</h3>
            <p className="p-text text-center" style={{ width: '100%', maxWidth: '750px', }}>Desde criança sempre fui fascinado pela tecnologia. E acabei decidindo que iria trabalhar em algum setor tecnologico. E foi no curso técnico que tive meu primeiro contato com a programação. Foi amor a primeira linha. Fiquei encantado com a praticidade e com a velocidade dos resultados. </p>

            <p className="p-text text-center mt-3" style={{ width: '100%', maxWidth: '750px', }}>Ficou com alguma duvida? Entre em contanto pelas minhas redes sociais.  </p>
            <div className="justify-items-center">
              <div className="list-icons">
                <div>
                  <a href="https://www.facebook.com/wellington.ferreira.39589149" rel="noopener noreferrer" target="_blank" >
                    <FaFacebookSquare className="icon-social" />
                  </a>
                </div>
                <div>
                  <a href="https://github.com/weton01" rel="noopener noreferrer" target="_blank" >
                    <FaGithubSquare className="icon-social" />
                  </a>
                </div>
                <div>
                  <a href="https://www.linkedin.com/in/wellington-campana-ferreira-078627142/" rel="noopener noreferrer" target="_blank" >
                    <FaLinkedin className="icon-social" />
                  </a>
                </div>
              </div>
            </div>
          </div>


        </div>
        <div className="justify-items-center p-3 pb-5" style={{ background: '#DCDCDC' }} >
          <div style={{ width: '100%', maxWidth: '1050px', }}>
            <h3 className="h3 text-center mt-5 mb-4">Portfólio</h3>
            <div className="about-portfolio">
              <div className="about-info">
                <div className="justify-items-center" >
                  <DiReact className="about-icon" style={{ color: '#38A1F3' }} />
                </div>
                <div  ><h3 className="h3 text-center">React</h3></div>
                <div>
                  <p className="p-text text-justify">
                    O React é uma biblioteca JavaScript de código aberto para criar interfaces de usuário. É mantido pelo Facebook, Instagram e uma comunidade de desenvolvedores individuais e outras empresas.
                  </p>
                </div>
              </div>
              <div className="about-info" >
                <div className="justify-items-center"  >
                  <Icon icon={reduxIcon} style={{ height: "55px", width: '50px', color: '#663096' }} />
                </div>
                <div  ><h3 className="h3 text-center">Redux</h3></div>
                <div>
                  <p className="p-text text-justify">
                    Redux é uma biblioteca JavaScript de código aberto para gerenciar o estado do aplicativo. É mais comumente usado com bibliotecas como React ou Angular para construir interfaces de usuário.
                  </p>
                </div>
              </div>
              <div className="about-info" >
                <div className="justify-items-center" >
                  <DiNodejsSmall className="about-icon" style={{ color: '#4CBB17', }} />
                </div>
                <div  ><h3 className="h3 text-center">Node</h3></div>
                <div>
                  <p className="p-text text-justify">
                    Node.js é um interpretador, com código aberto, de código JavaScript de modo assíncrono e orientado a eventos, focado em migrar a programação do Javascript do lado do cliente para os servidores.    </p>
                </div>
              </div>
            </div>
          </div>
        </div >
        <div className="justify-items-center p-2 pb-5" >
          <div style={{ width: '100%', maxWidth: '1050px', }}>
            <h3 className="h3 text-center mt-5 mb-5 third-color">Horizonte</h3>
            <div className="horizontal-container">
              <div className="justify-items-center" >
                <img src={Img} alt="logo" />
              </div>
              <div>
                <p className="p-text mt-3 ml-2">Achei que era impossível ser um desenvolvedor full stack web/mobile. Então conheci o React e o React-Native e minha perspectiva mudou. Meu objetivo é me afirmar como desenvolvedor full stack web/mobile. Utilizando o React como stack padrão no front-end e Node e Mongo no back-end.</p>
              </div>
            </div>
          </div>
        </div>
      </article >
    )
  }
}
