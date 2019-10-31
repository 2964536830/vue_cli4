import axios from '../utils/request'
/**
 * 用来存放API
 */
const Request = {
  User: {
    info (data) {
      return axios({ url: '/vue/dashboard/get-main', data })
    }
  }
}
export default Request
