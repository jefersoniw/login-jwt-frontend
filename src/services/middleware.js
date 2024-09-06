import Cookies from 'js-cookie'

export default {
  auth(to, from, next) {
    const token = Cookies.get('_myApp_token')

    //redirect to login
    if (!token) {
      return next('/')
    }

    if (token == 'undefined') {
      return next('/')
    }

    fetch(`http://localhost/api/validadeToken?token=${token}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
      .then(response => response.json())
      .then(res => {
        console.log(res.error)

        if (res.error == true) {
          Cookies.remove('_myApp_token')
          return next('/')
        }
      })

    next()
  }
}
