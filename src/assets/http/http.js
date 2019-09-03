import cdnAxios from 'cdn-axios'

cdnAxios.interceptors.request.use(config => {
  console.log(config)
  const body = config.data
  let head = {
    'cookie': 123,
    'time': 111
  }
  config.data = {
    head: head,
    body: {
      body
    }
  }
  return config
})

export default cdnAxios
