import React from 'react';
import Header from '../components/header';
import Jumbotron from '../components/jumbotron';
import Footer from '../components/footer';
import '../../styles/main.scss';

export default () => <div className="cl-wrapper">
  <div className="cl-page">
    <Header mainTitle="Cole Geerts" />
    <Jumbotron />
  </div>
  <Footer />
</div>;
