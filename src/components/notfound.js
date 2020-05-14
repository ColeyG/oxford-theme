import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';

class NotFound extends React.Component {
  render() {
    return (
      <div className="not-found">
        <Helmet titleTemplate="Cole Geerts | %s">
          <title>
            404
          </title>
        </Helmet>
        <Link to="/">
          <h1>404</h1>
        </Link>
        <p><strong>Whoops!</strong>... We couldn't find what you were looking for. Please click above to go home or,
          <a href="#" className="cl-a-secondary" onClick={(e) => { e.preventDefault(); window.history.back(); }}>Go Back</a>
        </p>
      </div >
    );
  }
}

export default NotFound;
