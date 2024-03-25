import Cookies from 'js-cookie'

export default {
  auth(to, from, next) {
    const token = Cookies.get('_myTokenAuth')

    fetch(`http://localhost/api/me`, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'bearer ' + token
      }
    })
      .then(response => response.json())
      .then(res => {
        if (!res) {
          token = false
        }
      })

    if (!token) {
      return next('/login')
    }

    next()
  }
}
