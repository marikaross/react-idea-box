import React from 'react';

const IdeaCard = props => {
  return (
    <div>
      <article>
        <h2>Title{props.title}</h2>
        <h4>{props.body}</h4>
      </article>

    </div>
    )
}

export default IdeaCard