import React from 'react';
import Header from '../components/header';
import Jumbotron from '../components/jumbotron';
import CardContainer from '../components/card-container';
import Card from '../components/card';
import Footer from '../components/footer';
import '../../styles/main.scss';

export default () => <div className="cl-wrapper">
  <div className="cl-page">
    <Header mainTitle="Cole Geerts" />
    <Jumbotron exClassName="index-jumbotron" />
    <CardContainer exClassName="index-section" cardConTitle="Featured Content">
      <Card cardTitle="Primary Featured Content" link="/article/pri" />
      <Card cardTitle="Secondary Featured Content" link="/article/sec" />
      <Card cardTitle="Tertiary Featured Content" link="/article/ter" />
    </CardContainer>
    <CardContainer cardConTitle="Recent Posts">
      <Card cardTitle="First Article" link="/article/pri" />
      <Card cardTitle="Second Article" link="/article/sec" />
      <Card cardTitle="Third Article" link="/article/ter" />
    </CardContainer>
  </div>
  <Footer />
</div>;
