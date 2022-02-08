import React from 'react';
import backgroundImg from '../background.png';
import './Main.css';
import AnimalList from '../AnimalList/AnimalList';

export default function Main(props) {
  return (
    <main style={{ backgroundImage: `url(${backgroundImg})` }}>
      {props.animals.map((animal) => <AnimalList key={animal.name}{...animal}/>)}
    
    </main>
  );
}