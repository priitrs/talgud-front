<template>
    <div>
      <br>
      <input type="text" v-model="username" placeholder="Kasutajanimi">
      <br><br>
      <input type="text" v-model="password" placeholder="Parool">
      <br><br>
      <div class="align-items-center">
        <button v-on:click="registrationRequest" class="btn btn-dark">Registreeri uus kasutaja</button>
      </div>
    </div>
</template>

<script>
export default {
  name: "LoginView",
  data: function () {
    return {
      // firstname: "",
      // lastname: "",
      // phonenumber: "",
      // email: "",
      username: this.$route.query.userName,
      password: this.$route.query.password,
      userId: null,
      lastRoute: ""
    }
  },
  methods: {
    registrationRequest: function () {
      let user = {
        // firstname: this.firstname,
        // lastname: this.lastname,
        // phonenumber: this.phonenumber,
        // email: this.email,
        username: this.username,
        password: this.password
      }
      this.$http.post('/authentication/', user)
          .then(response => {
            this.userId = response.data
            sessionStorage.setItem('userId', this.userId)
            this.$router.push({name: 'contactRoute'})
          })
          .catch(error => console.log(error.response.data))
    }
  }
}
</script>
