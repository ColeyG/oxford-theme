/*
  This file hosts a number of example querys and best practices to inject data
*/
import React from 'react';
import { graphql } from 'gatsby';
import Header from '../components/header';
import Hi from '../components/hi';
// import Layout from "../components";

export default function Example({ data }) {
  console.log(data.allPokemon);
  return (
    <div>
      <Header mainTitle="Example Page" />
      <p>Testing Gatsby Rendering</p>
      <p>Name: {data.pokemon.name}</p>
      <p>Type: {data.pokemon.type}</p>
      <p>ID: {data.pokemon.id}</p>
      <Hi />
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
