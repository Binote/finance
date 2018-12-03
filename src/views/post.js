import {ajax, api} from './axios'
const post = (payload) => {
  return ajax.get(api, {
    params: payload
  })
}
export default post
