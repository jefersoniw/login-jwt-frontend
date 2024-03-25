<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <button @click.prevent="logout" class="btn btn-danger w-100 py-2" type="submit">Log out</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Cookies from 'js-cookie';

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  methods: {
    logout() {

      const token = Cookies.get('_myTokenAuth');

      if (!!token) {
        fetch(`http://localhost/api/logout`, {
          method: 'get',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: 'bearer ' + token
          }
        })
          .then(response => response.json())
          .then(res => {
            console.log(res);
          })
      }

      Cookies.remove('_myTokenAuth');
      return this.$router.push('/login');

    }
  }
}
</script>
