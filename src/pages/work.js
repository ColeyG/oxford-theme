import React from 'react';
import Header from '../components/header';
import HeroCard from '../components/hero-card';
import Footer from '../components/footer';

export default () => (<div className="cl-wrapper">
  <div className="cl-page">
    <Header mainTitle="Cole Geerts" />
    <div className="cl-page-content page-work">
      <h2 className="work-title">What I do</h2>
      <p className="work-body-text">
        Though my tech focuses change from week to week (or at least it feels like it when you program),
        I thought it apt to talk a little more here about the languages, frameworks, and libraries that enable me to do the work that I do.
        Across my dev journey I've mostly done web work! So HTML, CSS, and JS are first!
        But I hope you'll find that my penchant for learning crosses all types of programming.
      </p>
      <div className="work-card-con">
        <div className="work-card-row">
          <div className="work-card-image">
            <HeroCard bgImage={'optimized/autumn.jpeg'} />
          </div>
          <p className="work-card-text">
            Javascript is my bread and butter. Node rules and I love the React Ecosystem!
            This site is <a href="https://github.com/ColeyG/oxford-theme" target="_blank" rel="noopener noreferrer" className="cl-a-secondary">built with love using Gatsby</a>.
            I definitely believe in the "JS Everywhere" stack and I never hesitate to choose JS when it is right for the project. I've also had experience with Vue, Pupeteer, and jQuery to
            name more big players in the JS field.
          </p>
        </div>
        <div className="work-card-row">
          <div className="work-card-image">
            <HeroCard bgImage={'optimized/autumn.jpeg'} />
          </div>
          <p className="work-card-text">
            Professionally, PHP has been a cornerstone language for me. From frameworks like Laravel, Drupal, and even Magento, I've had experience in most of the big names.
            Deploying and maintaining large scale PHP applications has made up the most of my career. PHP has proven maturity and stability when handling a wide range of web hurdles.
          </p>
        </div>
        <div className="work-card-row">
          <div className="work-card-image">
            <HeroCard bgImage={'optimized/autumn.jpeg'} />
          </div>
          <p className="work-card-text">
            Styling in CSS is great, but it goes so much deeper. Creating maintainable, precise stylesheets through preprocessors like Sass or Less is an important art.
            Whatever the styling toolchain, I strive to create efficient and good looking web apps. The first paint is so important on the web, so a lot of work goes into making it right.
          </p>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</div>);
