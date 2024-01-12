import React,{Component} from 'react'
import {blog} from "../../axios.jsx";
import Post from '../../components/Blog/Post/Post.jsx'
import FullPost from '../../components/Blog/FullPost/FullPost.jsx'
import NewPost from '../../components/Blog/NewPost/NewPost.jsx'
import './Blog.css'
import { Routes, Route , Link } from 'react-router-dom';
class Blog extends Component {
  state = {
    posts: [],
    selectedPostId: null,
    error: false,
  }

  componentDidMount() {
    blog
      .get('/posts/')
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
            <Link key={item.id} to={`/${item.id}`}>
                <Post
                    title={item.title}
                    authors={item.author}
                    click={() => this.selectPostHabdler(item.id)}
                />
            </Link>
        )
      })
    }
    return (
      <div>
          <header>
              <ul>
                  <li>
                      <Link to="/">home</Link>
                  </li>
                  <li>
                      <Link to={{
                          pathname:"/newPost",
                          search:"?sort=post"
                      }}>newPost</Link>
                  </li>
              </ul>
          </header>
        <section className="posts"></section>
        <section>
            {/*<FullPost id={this.state.selectedPostId} />*/}
        </section>
        <section>
        </section>
        {/*<Switch>*/}
            <Routes>
                <Route path="/" element={<div style={{display:"flex",justifyContent:"center"}}>{posts}</div>} />
                <Route path="/newPost" element={<NewPost />} />
                <Route path="/:id" element={<FullPost id={this.state.selectedPostId} />} />
            </Routes>
        {/*</Switch>*/}
      </div>
    )
  }
}

export default Blog
