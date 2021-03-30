import React from 'react';
import NotFound from '../components/notfound';
import Footer from '../components/footer';

const fourOhFour = () => <div className="cl-wrapper">
    <div className="cl-page page-not-found">
        <NotFound />
    </div>
    <Footer />
</div>;

export default fourOhFour;
