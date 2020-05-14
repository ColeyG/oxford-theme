import React from 'react';
import NotFound from '../components/notfound';
import Footer from '../components/footer';
import '../../styles/main.scss';

export default () => <div className="cl-wrapper">
  <div className="cl-page page-not-found">
    <NotFound />
  </div>
  <Footer />
</div>;
