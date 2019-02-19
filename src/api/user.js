import request from '@/utils/request.js'

export default {
  singlePoetry (data) {
    return request({
      url: '/singlePoetry',
      method: 'post',
      data
    })
  }
}
