import React from 'react';
import './AnimalList.css';

export default function AnimalList(props) {
  return <div className='animal' style={{ left:props.left, top:props.top }}>
    {props.name},
    {props.type},
    {props.says},
    <img src={`./animals/${props.type}.svg`} />
  </div>;
}