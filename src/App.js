import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

// pages
import AcademicFormation from './pages/AcademicFormation';
import Certificates from './pages/Certificates';
import Error from './pages/Error';
import Home from './pages/Home';
import SingleAcademicFormation from './pages/SingleAcademicFormation';
import SingleCertificate from './pages/SingleCertificate';
import Skills from './pages/Skills';
import Careers from './pages/Careers';

// components
import Navbar from './components/Navbar/index'
import Footer from './components/Footer/index'

import { Route, Switch } from 'react-router-dom'



function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/formation" component={AcademicFormation} />
        <Route exact path="/formation/:slug" component={SingleAcademicFormation} />
        <Route exact path="/career/" component={Careers} />
        <Route exact path="/skills/" component={Skills} />
        <Route exact path="/certificates/" component={Certificates} />
        <Route exact path="/certificates/:slug" component={SingleCertificate} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
