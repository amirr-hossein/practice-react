import React from 'react'

import './Post.css'

const post = (props) => (
  <article className="post" onClick={props.click}>
    <span>{props.title}</span>
      <h5>{props.authors}</h5>
    <div>
    </div>
      {/*<img src={props.img} alt=""/>*/}
  </article>
)

export default post
