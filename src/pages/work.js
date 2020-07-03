import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

export default () => (<div className="cl-wrapper">
  <div className="cl-page">
    <Header mainTitle="Cole Geerts" />
    <div className="cl-page-content page-work">
      <h2 className="work-title">What I do</h2>
      <p className="work-body-text">
        Though my tech focuses change from week to week (or at least it feels like it when you program), I thought it apt to talk a little more here about the languages, frameworks, and libraries that enable me to do the work that I do.
        Across my dev journey I've mostly done web work! So HTML, CSS, and JS are first! But I hope you'll see that my penchant for learning crosses all types of programming.
      </p>
    </div>
  </div>
  <Footer />
</div>);
