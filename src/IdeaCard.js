import React from 'react';

export default function IdeaCard(props) {
  return (
    <div>
      <article>
        <h2>{props.title}</h2>
        <h4>{props.body}</h4>
      </article>

    </div>
    )
}
