<template>
    <div>
      <br>
      <label for="userName">Username</label>
      <input type="text" id="userName" class="form-control" name="userName" formControlName="userName" v-model="username" placeholder="Kasutajanimi"/>
      <div class="text-danger"
           *ngIf="(userFormControl.userName.touched || submitted) && userFormControl.userName.errors?.required">
        UserName is required
      </div>
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
      username: "",
      password: "",
      userId: null,
      lastRoute: ""
    }
  },
  methods: {
    registrationRequest: function () {
      let user = {
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
