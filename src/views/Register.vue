<template>
  <div>
    <main class="form-signin w-100 m-auto">
      <form @submit.stop.prevent="submit">
        <h1 class="h3 mb-3 fw-normal">Register User</h1>

        <div class="form-floating">
          <input v-model="name" type="text" class="form-control" id="floatingInputName" placeholder="name">
          <label for="floatingInputName">Name</label>
        </div>
        <div class="form-floating">
          <input v-model="email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input v-model="password" type="password" class="form-control" id="floatingPassword" placeholder="Password">
          <label for="floatingPassword">Password</label>
        </div>

        <button class="btn btn-primary w-100 py-2" type="submit">Register</button>
      </form>
    </main>
  </div>
</template>
<script>
import Swal from 'sweetalert2';

export default {
  name: 'Register',

  data() {
    return {
      name: '',
      email: '',
      password: ''
    };
  },

  methods: {

    submit() {

      const payload = {
        name: this.name,
        email: this.email,
        password: this.password
      }

      fetch(`http://localhost/api/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      })
        .then(response => response.json())
        .then(res => {
          if (res.error == true) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: res.message
            });
          }

          Swal.fire({
            icon: "success",
            text: res.message,
            didClose: () => {

              this.name = '',
                this.email = '',
                this.password = ''

              window.location.href = "/";
            }
          })
        })
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