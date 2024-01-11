import axios from 'axios'

const product = axios.create({
  baseURL: 'https://practice-react-d0abc-default-rtdb.firebaseio.com/',
})

const blog = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
})
export {blog,product}