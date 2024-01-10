import React from 'react'

import './Post.css'

const post = (props) => (
  <article className="post" onClick={props.click}>
    <span>{props.title}</span>
    <div>
    </div>
      <img src={props.img} alt=""/>
  </article>
)

export default post
