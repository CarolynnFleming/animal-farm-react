import React from 'react';
import Animal from '../Animal/Animal';

export default function AnimalList(props) {
  return (
    props.animals.map((animal) => <Animal key={animal.name}{...animal}/>)
  );
}
