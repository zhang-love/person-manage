import axios from 'cdn-axios'

export const hello = param => {
  return axios.post('/hello', param).then(res => res.data)
}
