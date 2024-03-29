import React from 'react'
import {blog} from "../../../axios.jsx";
import { Navigate } from "react-router-dom";
import './NewPost.css'

class NewPost extends React.Component {
  state = {
    title: '',
    content: '',
    author: 'Masood',
      submitted: false,
  }

  postDataHandler = () => {
    const data = {
      title: this.state.title,
      category: this.state.content,
    }
    blog
      .post('/posts/', data)
      .then((response) => {
        console.log(response)
          this.setState({ submitted: true })
      })
  }

  render() {
      let redirect = null

      if (this.state.submitted) {
          redirect = <Navigate to="/" />;
      }


    return (
      <div className="new-post">
          {redirect}
        <h2>Add a Post</h2>
        <label>Title</label>
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.setState({ title: event.target.value })}
        />
        <label>Content</label>
        <textarea
          rows="4"
          value={this.state.content}
          onChange={(event) => this.setState({ content: event.target.value })}
        />
        <label>Author</label>
        <select
          value={this.state.author}
          onChange={(event) => this.setState({ author: event.target.value })}
        >
          <option value="Masood">Masood</option>
        </select>
        <button onClick={this.postDataHandler}>Add Post</button>
      </div>
    )
  }
}

export default NewPost
