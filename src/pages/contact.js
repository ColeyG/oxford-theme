import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

export default () => (<div className="cl-wrapper">
  <div className="cl-page">
    <Header mainTitle="Cole Geerts" />
    <div className="cl-page-content page-contact">
      <div className="contact-section contact-primary">
        <div className="contact-cta"></div>
      </div>
      <div className="contact-section contact-secondary">
        <div className="contact-form"></div>
      </div>
    </div>
  </div>
  <Footer />
</div>);
