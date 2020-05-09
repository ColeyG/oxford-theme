/*
  This file hosts a number of example querys and best practices to inject data
*/
import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Header from '../components/header';
import Hi from '../components/hi';
import Styleguide from '../components/styleguide';

export default function Example({ data }) {
  console.log(data.allPokemon);
  return (
    <div className='wrapper'>
      {/* Example of overrriding the base title */}
      <Helmet>
        <title>
          Example Title
        </title>
      </Helmet>
      <Header mainTitle="Example Page" />
      <div className="testing">
        <p>Testing Gatsby Rendering</p>
        <p>Name: {data.pokemon.name}</p>
        <p>Type: {data.pokemon.type}</p>
        <p>ID: {data.pokemon.id}</p>
        <Hi />
      </div>
      <Styleguide />
    </div>
  );
}

// The name parameter is passed from the context variable in gatsby-node.js
export const query = graphql`
query GetSinglePokemon($name: String) {
  pokemon(name:{eq:$name}){
    name
    type
    id
  }
}
`;
