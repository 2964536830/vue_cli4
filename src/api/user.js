import request from "@/utils/request.js"
import Api from "./index"

export default {
  singlePoetry(data) {
    return request({
      url: Api.singlePoetry,
      method: "post",
      data
    })
  }
}
