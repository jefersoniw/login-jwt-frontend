import Cookies from 'js-cookie'

export default {
  auth(to, from, next) {
    const token = Cookies.get('_myApp_token')

    if (!token) {
      return next('/login')
    }

    if (token == 'undefined') {
      return next('/login')
    }

    next()
  }
}
