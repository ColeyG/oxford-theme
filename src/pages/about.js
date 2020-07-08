/* eslint-disable max-len */
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
            <HeroCard bgImage={'about-cards/js-card.svg'} />
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
            <HeroCard bgImage={'about-cards/php-card.svg'} />
          </div>
          <p className="work-card-text">
            Professionally, PHP has been a cornerstone language for me. From frameworks like Laravel, Drupal, and even Magento, I've had experience in most of the big names.
            Deploying and maintaining large scale PHP applications has made up the most of my career. PHP has proven maturity and stability when handling a wide range of web hurdles.
          </p>
        </div>
        <div className="work-card-row">
          <div className="work-card-image">
            <HeroCard bgImage={'about-cards/css-card.svg'} />
          </div>
          <p className="work-card-text">
            Styling in CSS is great, but it goes so much deeper. Creating maintainable, precise stylesheets through preprocessors like Sass or Less is an important art.
            Whatever the styling toolchain, I strive to create efficient and good looking web apps. The first paint is so important on the web, so a lot of work goes into making it right.
          </p>
        </div>
        <div className="work-card-row">
          <div className="work-card-image">
            <HeroCard bgImage={'about-cards/c-card.svg'} />
          </div>
          <p className="work-card-text">
            While I've never applied them professionally, my explorations of C &amp; C++ have been instrumental in my understanding of programming. I love experimenting with
            making small programs like my <a href="https://github.com/ColeyG/coles-gba-demo" target="_blank" rel="noopener noreferrer" className="cl-a-tertiary">Gameboy Advance Demo</a>.
            Experience in these languages has imparted a love of types and therefore typescript as well. Creating boutique, elegant software solutions means knowing a whole lot
            more about the <em>variables</em> in play. On the topic of compiled languages, <a href="https://www.rust-lang.org/" target="_blank" rel="noopener noreferrer" className="cl-a-secondary">Rust</a> has also caught my eye.
          </p>
        </div>
        <div className="work-card-row">
          <div className="work-card-image">
            <HeroCard bgImage={'about-cards/python-card.svg'} />
          </div>
          <p className="work-card-text">
            While in most situations where an <a href="https://en.wikipedia.org/wiki/Interpreted_language#:~:text=An%20interpreted%20language%20is%20a,program%20into%20machine%2Dlanguage%20instructions." target="_blank" rel="noopener noreferrer" className="cl-a-secondary">interpreted language</a> would be appropriate,
            JS would be my first choice, Python occupies a special cubby in my heart. For data-science applications
            it is completely out-lapping the other options, and I eagerly await each opportunity to use it.
            Here is <a href="https://github.com/ColeyG/python-reddit-scraper" target="_blank" rel="noopener noreferrer" className="cl-a-primary">a simple web scraper</a> written in Python 3.
          </p>
        </div>
      </div>
      <div className="work-extras">
        <h2 className="work-title">Extras</h2>
        <p className="work-body-text">
          Otherwise, my hobbies include <i>of course, more programming</i>, Magic: the Gathering, competitive games, and I love to read whether it be technical knowledge related to programming or even simply fantasy or fiction. I'm deep into 00's Punk and Punk music inspired by that
          era. Vintage gaming is also a muse for me. I love tinkering with old hardware and building something great for it, so if it has anything to do with <a href="https://en.wikipedia.org/wiki/Homebrew_(video_games)" target="_blank" rel="noopener noreferrer" className="cl-a-tertiary">homebrew</a> I
          likely love it.
        </p>
      </div>
    </div>
  </div>
  <Footer />
</div>);
