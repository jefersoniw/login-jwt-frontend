<template>
  <div class="about">
    <p>
    <h1>I am logged!!</h1>
    </p>
    <p>
    <h4>This is an about page</h4>
    </p>

    <button @click.prevent="logout" class="btn btn-danger w-100 py-2" type="submit">Log out</button>
  </div>
</template>

<script>
import Cookies from 'js-cookie';

export default {
  name: 'HomeView',
  methods: {
    logout() {

      const token = Cookies.get('_myApp_token');

      if (!!token) {
        fetch(`http://localhost/api/logout`, {
          method: 'get',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'bearer ' + token
          }
        })
          .then(response => response.json())
          .then(res => {
            console.log(res);
            Cookies.remove('_myTokenAuth');
          })
      }

      return this.$router.push('/');
    }
  }
}
</script>