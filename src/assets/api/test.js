import axios from 'cdn-axios'

export const hello = param => {
  return axios.get('/hello').then(res => res.data)
}
