import { axios } from './api'

class Topic {
  constructor() {}

  list() {
  	return axios.get('/topics')
  }
}

export default new Topic()
