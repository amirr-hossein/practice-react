import React from 'react'
import axios from "../../axios.jsx";

import Post from '../../components/Post/Post.jsx'
import FullPost from '../../components/FullPost/FullPost.jsx'
import NewPost from '../../components/NewPost/NewPost.jsx'

import './Blog.css'

class Blog extends React.Component {
  state = {
    posts: [],
    selectedPostId: null,
    error: false,
  }

  componentDidMount() {
    axios
      .get('/products/')
      .then((response) => {
        const posts = response.data.slice(0,4)
        const updatedPosts = posts.map((item) => {
          return {
              ...item,
              author: 'Masood',
          }

      })
        this.setState({ posts: updatedPosts })
      })
      .catch(() => {
        this.setState({ error: true })
      })
  }

  selectPostHabdler = (id) => {
    this.setState({ selectedPostId: id })
  }

  render() {
    let posts = <p style={{ textAlign: 'center' }}>Fetching data failed!</p>
    if (!this.state.error) {
      posts = this.state.posts.map((item) => {
        return (
          <Post
            key={item.id}
            title={item.category}
            img={item.image}
            click={() => this.selectPostHabdler(item.id)}
          />
        )
      })
    }
    return (
      <div>
          <div style={{display:"flex",justifyContent:"center"}}>{posts}
          </div>
        <section className="posts"></section>
        <section>
          <FullPost id={this.state.selectedPostId} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    )
  }
}

export default Blog
