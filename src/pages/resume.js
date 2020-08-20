import React from 'react';
import { Link } from 'gatsby';
import Header from '../components/header';
import Footer from '../components/footer';

export default () => (<div className="cl-wrapper">
  <div className="cl-page">
    <Header mainTitle="Cole Geerts" />
    <div className="cl-page-content page-resume">
      <div className="resume-area">
        <h2>Resume</h2>
        <div className="resume-download">
          <a className="cl-btn-primary" href="cole-geerts-resume.pdf" download>Download PDF</a>
          <a className="cl-btn-tertiary" href="cole-geerts-resume.docx" download>Download docx</a>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</div>);
