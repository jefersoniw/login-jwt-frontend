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

    submit() { }

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