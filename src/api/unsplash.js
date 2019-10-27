import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 85c6bff109f2af2347e0f901f69679344fca0ed74e1c3e9d8884b8a716139780'
  }
})