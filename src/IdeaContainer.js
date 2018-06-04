import React from 'react';
import IdeaCard from './IdeaCard.js';

//this is where we'll map the ideas out

export default function IdeaContainer(props) {
  return (
    <div>
      <IdeaCard title={props.title} body={props.body}/>
    </div>
    )
}