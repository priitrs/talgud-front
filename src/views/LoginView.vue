<template>
  <div>
      <input type="text" v-model="username" placeholder="Kasutajanimi" >
<br>
    <input type="text" v-model="password" placeholder="Parool" >
<br>
    <div class="d-grid gap-2 d-md-flex">
      <button v-on:click="loginRequest" class="btn btn-primary me-md-2">Logi sisse</button>
    </div>
  </div>

</template>

<script>
export default {
  name: "LoginView",
  data: function () {
    return {
      username:"",
      password: "",
      userId: null
    }
  },
  methods:{
    loginRequest: function () {
      this.$http.post('/authentication/exists', {
        params: {
          username: this.username,
          password: this.password
        }
      })
          .then(response => {
            this.userId = response.data
            sessionStorage.setItem('userId', this.userId)
            this.$router.push({name: 'avalehtRoute'})
          })
          .catch(error => console.log(error.response.data))

    }
  }
}
</script>

<style scoped>

</style>
