import React from 'react';

export default function IdeaCard(props) {
  return (
    <div>
      <article>
        <h2>Title{props.title}</h2>
        <h4>{props.body}</h4>
      </article>

    </div>
    )
}
