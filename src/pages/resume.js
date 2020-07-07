import React from 'react';
import { Link } from 'gatsby';
import Header from '../components/header';
import Footer from '../components/footer';

export default () => (<div className="cl-wrapper">
  <div className="cl-page">
    <Header mainTitle="Cole Geerts" />
    <div className="cl-page-content">
      <h2>Resume</h2>
      <p><i>Currently, I haven't provided a web safe resum&eacute;. Please see <Link to="/contact">our contact</Link> for a copy.</i></p>
    </div>
  </div>
  <Footer />
</div>);
