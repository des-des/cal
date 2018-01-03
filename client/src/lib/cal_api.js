import axios from 'axios'

import auth from './auth'

const user = axios.create()

user.interceptors.request.use(config => ({
  ...config,
  headers: {
    ...config.headers,
    Authorization: `Bearer ${auth.getAccessToken()}`
  },
  baseURL: `/api/user/${auth.getUserId()}/`
}))

export const createEvent = ({ payload }) => user.post(`event`, console.log({payload}) || payload)
export const fetchEvents = () => user.get('event')
export const fetchUserInfo = () => user.get('user-info')

export const stripeConnectCallback = ({ payload }) => {
  return axios({
    method: 'post',
    url: '/api/stripe/connect-callback',
    data: payload,
    headers: {
      Authorization: `Bearer ${auth.getAccessToken()}`
    }
  })
}

export default {
  createEvent,
  fetchEvents,
  fetchUserInfo,
  stripeConnectCallback
}
