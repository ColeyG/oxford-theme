// This is a react component standin for the document head
import React from 'react';
import PropTypes from 'prop-types';

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes} lang="en">
      <head>
        <title>
          Cole Geerts
        </title>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="Cole Geerts' Works and Blog. Cole is a web developer looking for work in the London Ontario area." />
        {props.headComponents}
        <link href="https://fonts.googleapis.com/css2?family=Jost&family=Noto+Sans:ital,wght@0,700;1,400&family=Ubuntu+Mono&display=swap" rel="stylesheet"></link>
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <canvas className="header-canvas"></canvas>
        <div
          key={'body'}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
