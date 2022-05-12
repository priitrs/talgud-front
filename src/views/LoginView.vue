<template>
  <div>
    <br>
    <input type="text" v-model="username" placeholder="Kasutajanimi">
    <br>
    <input type="text" v-model="password" placeholder="Parool">
    <br><br>
    <div class="align-items-center">
      <button v-on:click="loginRequest" class="btn btn-dark">Logi sisse</button>
    </div>
  </div>

</template>

<script>
export default {
  name: "LoginView",
  data: function () {
    return {
      username: "",
      password: "",
      userId: null,
      lastRoute: ""
    }
  },
  methods: {
    loginRequest: function () {
      let user = {
        username: this.username,
        password: this.password
      }
      this.$http.post('/authentication/exists', user)
          .then(response => {
            this.userId = response.data
            sessionStorage.setItem('userId', this.userId)
            this.lastRoute = sessionStorage.getItem('lastRoute')
            this.$router.push({name: this.lastRoute})
          })
          .catch(error => console.log(error.response.data))

    }
  }
}
</script>

<style scoped>

</style>
