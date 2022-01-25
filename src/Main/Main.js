import React from 'react';
import backgroundImg from '../background.png';
import './Main.css';
import AnimalList from '../AnimalList/AnimalList';

export default function Main(props) {
  return (
    <main style={{ backgroundImage: `url(${backgroundImg})` }}>
      {props.animal.map((animals, i) => <AnimalList key={animals + i} name ={animals.name} type = { animals.type} says={animals.says} />)}
    
    </main>
  );
}