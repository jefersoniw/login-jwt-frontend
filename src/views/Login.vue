<template>
  <main class="form-signin w-100 m-auto">
    <form @submit.prevent="submit">
      <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

      <div class="form-floating">
        <input v-model="email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input v-model="password" type="password" class="form-control" id="floatingPassword" placeholder="Password">
        <label for="floatingPassword">Password</label>
      </div>

      <button class="btn btn-primary w-100 py-2" type="submit">Sign in</button>
    </form>
  </main>
</template>

<script>
import Cookies from 'js-cookie';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    }
  },

  created() {
    Cookies.remove('_myTokenAuth')
  },

  methods: {
    submit() {

      let payload = {
        email: this.email,
        password: this.password,
      }

      fetch(`http://localhost/api/login`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload)
      })
        .then((response) => response.json())
        .then((res) => {
          Cookies.set('_myTokenAuth', res.access_token)

        });
    }
  },
}
</script>

<style>
.form-signin {
  max-width: 330px;
  padding: 1rem;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>