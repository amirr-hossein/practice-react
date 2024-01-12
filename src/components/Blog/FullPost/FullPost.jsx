import React from 'react'
import {blog} from "../../../axios.jsx";

import './FullPost.css'

class FullPost extends React.Component {
  state = {
    loadedPost: null,
    author: "masood"
  }

  componentDidMount() {
    if (this.props.id) {
      if (
        !this.state.loadedPost ||
        (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)
      )
        blog
          .get(`/posts/${this.props.id}`)
          .then((response) => {
            this.setState({ loadedPost: response.data })
          })
    }
  }

  deletePostHandler = () => {
    blog
        .delete(`/posts/${this.props.id}`)
        .then((response) => {
          console.log(response)
        })
  }

  render() {
    let post = <p style={{ textAlign: 'center' }}>Please select a Post</p>
    if (this.props.id) {
       post = <p style={{ textAlign: 'center' }}>Loading...</p>
    }
    if (this.state.loadedPost) {
      post = (
        <div className="full-post">
          <h2>{this.state.loadedPost.title}</h2>
          <h5>{this.state.author}</h5>
          {/*<img style={{width:"50px",height:"100px"}} src={this.state.loadedPost.image} alt=""/>*/}
          <div>
            <button onClick={this.deletePostHandler} className="delete">
              Delete
            </button>
          </div>
        </div>
      )
    }
    return post
  }
}

export default FullPost
