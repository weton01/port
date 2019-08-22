import img1 from './images/img-2.png'
import img2 from './images/img-3.png'
import img3 from './images/img-4.png'
import img4 from './images/img-5.png'
import img5 from './images/img-9.png'
import img6 from './images/img-10.png'
import img7 from './images/img-11.png'
import img8 from './images/img-12.png'
import img9 from './images/img-13.png'
import img10 from './images/img-14.png'
import img11 from './images/img-15.png'


import pdf1 from './items/pdf-1.pdf'
import pdf2 from './items/pdf-2.pdf'
import pdf3 from './items/pdf-3.pdf'
import pdf4 from './items/pdf-4.pdf'
import pdf5 from './items/pdf-5.pdf'
import pdf6 from './items/pdf-6.pdf'
import pdf7 from './items/pdf-7.pdf'
import pdf8 from './items/pdf-8.pdf'


import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

import { DiJsBadge } from "react-icons/di";
import { DiNpm } from "react-icons/di";

import { DiJava } from "react-icons/di";
import { DiNetmagazine } from "react-icons/di";
import { DiVisualstudio } from "react-icons/di";
import { DiPython } from "react-icons/di";
import { DiNetbeans } from "react-icons/di";

import { DiMysql } from "react-icons/di";
import { DiDatabase } from "react-icons/di";
import { DiMongodb } from "react-icons/di";

import { FiSearch } from "react-icons/fi";

import { DiGithubBadge } from "react-icons/di";
import { DiGit } from "react-icons/di";
import { FaBrain } from "react-icons/fa";
import { FaMegaport } from "react-icons/fa";
import { FaConnectdevelop } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";
import { DiPhotoshop } from "react-icons/di";



const data = {

 formation: [
  {
   id: '1', img: img1, name: 'Eletrônica', institution: 'CEGEP', beginningDate: '01/02/2014', endDate: '01/12/2015', courseHours: '1900 hrs', localization: 'Mogi Guaçu, SP', levelEducation: 'Técnico', formationType: 'Técnico', info: 'Técnico em Eletrônica', institutionType: 'Centro de Educação Profissional', evaluationNote: '3.5/5', institutionSite: 'http://cegep.com.br/', period: '2 Anos',
   details: 'Atua na instalação e  na manutenção  de máquinas e equipamentos; projeta produtos , ferramentas,  utilizando técnicas  de desenho e de representação gráfica;  projeta melhorias nos sistemas convencionais de produção, instalação e  manutenção  através da incorporação de  novas tecnologias.'
  },
  {
   id: '2', img: img2, name: 'A. D. S.', institution: 'Fatec Arthur Azevedo', beginningDate: '01/02/2016', endDate: '01/12/2018', courseHours: '2880 hrs', localization: 'Mogi Mirim, SP', levelEducation: 'Superior', formationType: 'Tecnólogo', info: 'Tecnólogo em Análise e Desenvolvimento de Sistemas', institutionType: 'Faculdade de Tecnologia', evaluationNote: '4.0/5', institutionSite: 'https://www.fatecmm.edu.br/', period: '3 Anos',
   details: 'O Tecnólogo em Análise e Desenvolvimento de Sistemas analisa, projeta, documenta, especifica, testa, implanta e mantém sistemas computacionais de informação. Esse profissional trabalha, também, com ferramentas computacionais, equipamentos de informática e metodologia de projetos na produção de sistemas.'
  }
 ],

 skills:
 {
  web: [
   {
    idSkill: '3', title: 'Bootstrap', Icon: FaBootstrap, lvl: '58', colorIcon: '#7A43B6'
   },
   {
    idSkill: '4', title: 'React', Icon: FaReact, lvl: '30', colorIcon: ''
   },
   {
    idSkill: '5', title: 'Css', Icon: FaCss3Alt, lvl: '40', colorIcon: '#38A1F3'
   },
   {
    idSkill: '6', title: 'HTML', Icon: FaHtml5, lvl: '60', colorIcon: 'orange'
   },
   {
    idSkill: '7', title: 'Javascript', Icon: DiJsBadge, lvl: '30', colorIcon: '#ffbf00'
   },
   {
    idSkill: '8', title: 'Node', Icon: FaNodeJs, lvl: '20', colorIcon: ''
   },
   {
    idSkill: '9', title: 'Npm', Icon: DiNpm, lvl: '30', colorIcon: ''
   },
  ],

  desktop: [
   {
    idSkill: '10', title: 'Java', Icon: DiJava, lvl: '58', colorIcon: '#B22222'
   },
   {
    idSkill: '11', title: '.NET', Icon: DiNetmagazine, lvl: '30', colorIcon: ''
   },
   {
    idSkill: '12', title: 'V. Studio', Icon: DiVisualstudio, lvl: '40', colorIcon: '#7A43B6'
   },
   {
    idSkill: '13', title: 'Python', Icon: DiPython, lvl: '60', colorIcon: ''
   },
   {
    idSkill: '17', title: 'Netbeans', Icon: DiNetbeans, lvl: '30', colorIcon: ''
   }

  ],

  dataBase: [
   {
    idSkill: '18', title: 'Mysql', Icon: DiMysql, lvl: '58', colorIcon: 'midnightblue'
   },
   {
    idSkill: '19', title: 'SQLServer', Icon: DiDatabase, lvl: '30', colorIcon: ''
   },
   {
    idSkill: '20', title: 'Firebird', Icon: DiDatabase, lvl: '80', colorIcon: ''
   },
   {
    idSkill: '21', title: 'SQLite', Icon: DiDatabase, lvl: '50', colorIcon: ''
   },
   {
    idSkill: '22', title: 'MongoDB', Icon: DiMongodb, lvl: '30', colorIcon: 'green'
   }
  ],

  machineLearning: [
   {
    idSkill: '23', title: 'PyScience', Icon: FiSearch, lvl: '53', colorIcon: ''
   },
   {
    idSkill: '26', title: 'Opencv', Icon: FiSearch, lvl: '25', colorIcon: ''
   },
   {
    idSkill: '27', title: 'Previsores', Icon: FaMegaport, lvl: '70', colorIcon: ''
   },
   {
    idSkill: '28', title: 'Apriori', Icon: FaConnectdevelop, lvl: '60', colorIcon: ''
   },
   {
    idSkill: '29', title: 'Clusters', Icon: FaConnectdevelop, lvl: '30', colorIcon: ''
   },
   {
    idSkill: '30', title: 'Neural Ns.', Icon: FaBrain, lvl: '20', colorIcon: ''
   },
   {
    idSkill: '31', title: 'Outliers', Icon: MdErrorOutline, lvl: '20', colorIcon: ''
   },

  ],

  tools: [
   {
    idSkill: '32', title: 'GitHub', Icon: DiGithubBadge, lvl: '20', colorIcon: ''
   },
   {
    idSkill: '33', title: 'Git', Icon: DiGit, lvl: '20', colorIcon: '#CD5C5C'
   },


   {
    idSkill: '34', title: 'Photoshop', Icon: DiPhotoshop, lvl: '20', colorIcon: '#38A1F3'
   },
  ]
 },

 careers: [
  {
   id: '35', img: img3, office: 'Estagiário', profession: 'Analista de dados', period: '8 meses', startDate: '15/03/2018', endDate: '01/12/2018'
  }
 ],

 certificates: [

  {
   id: '36', img: img4, pdf: pdf1, site: 'https://www.udemy.com/react-tutorial-and-projects-course/', name: 'React', info: 'O React é uma biblioteca JavaScript de código aberto para criar interfaces de usuário.', hours: '34 Horas', academy: 'Udemy',
  },
  {
   id: '37', img: img5, pdf: pdf2, site: 'https://www.udemy.com/course/reconhecimento-de-faces-e-de-objetos-com-python-e-dlib/', name: 'Reconhecimento de Faces e de Objetos com Dlib', info: 'O objetivo principal deste curso é ter uma visão prática de como utilizar o Dlib.', hours: '07 Horas', academy: 'Udemy',
  },
  {
   id: '38', img: img6, pdf: pdf3, site: 'https://www.udemy.com/course/css-grid-layout/', name: 'CSS Grid: o sistema definitivo de layouts', info: 'CSS Grid Layout, é a mais nova especificação para a construção de layouts de web sites.', hours: '1.5 Horas', academy: 'Udemy',
  },
  {
   id: '39', img: img7, pdf: pdf4, site: 'https://www.udemy.com/curso-desenvolvedor-web-completo/', name: 'Curso Desenvolvedor Web Completo', info: '14 cursos: HTML5, CSS3, JS, jQuery, BootStrap, ECMAScript e outra tecnologias web', hours: '36.5 hrs', academy: 'Udemy',
  },
  {
   id: '40', img: img8, pdf: pdf5, site: 'https://www.udemy.com/python-para-data-science-e-machine-learning/', name: 'Python para Data Science e Machine Learning ', info: 'Os principais métodos de Aprendizado de Máquina, Ciência de dados e Python', hours: '18 hrs', academy: 'Udemy',
  },
  {
   id: '41', img: img9, pdf: pdf6, site: 'https://www.udemy.com/course/deteccao-de-faces-com-python-e-opencv/', name: 'Detecção de Faces com Python e OpenCV', info: 'Passo a passo como utilizar o Python e o OpenCV para detectar faces em imagens e pela webcam!', hours: '03 hrs', academy: 'Udemy',
  },
  {
   id: '42', img: img10, pdf: pdf7, site: 'https://www.udemy.com/course/machine-learning-e-data-science-com-python-y/', name: 'Machine Learning e Data Science com Python', info: 'Técnicas que o mundo real exige e torne-se um profissional competitivo na área de Inteligência Artificial', hours: '25.5 hrs', academy: 'Udemy',
  },
  {
   id: '43', img: img11, pdf: pdf8, site: '/', name: 'Fundamentos de Data Science II', info: 'Programas criados com Kaggle, Tableau, Alteryx e Mode. Modulos de aprendizagem de python e estatistica', hours: '60 hrs', academy: 'Udacity',
  },

 ]
}

export default data;