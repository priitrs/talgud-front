<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
      </a>

      <ul class="nav justify-content-left">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">
            <router-link to="/">Avaleht</router-link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <router-link to="/toimunud">Toimunud Talgud</router-link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <router-link to="/tulevased">Tulevased Talgud</router-link>
          </a>
        </li>

        <li class="nav-item" v-on:click="lisaUuedTalgud">
          <a class="nav-link" href="#">
            Lisa uued Talgud
          </a>
        </li>
        <li class="nav-item" v-on:click="minuTalgud">
          <a class="nav-link" href="#">
            Minu Talgud
          </a>
        </li>

      </ul>

      <div v-on:click="loginButtonAction" class="d-grid gap-2 d-md-flex justify-content-md-end">
        <button type="button" class="btn btn-light">{{ loginButtonText }}</button>
      </div>

    </nav>

    <router-view/>
    <!-- Footer -->
    <mdb-footer color="blue" class="font-small pt-4 mt-4">
      <mdb-container class="text-left">
        <mdb-row>
          <mdb-col sm="6">
          </mdb-col>
          <mdb-col sm="6">

          </mdb-col>
        </mdb-row>
      </mdb-container>
      <div class="footer-copyright text-center py-3">
        <mdb-container fluid>
          &copy; 2022 Copyright: <a href="https://www.MDBootstrap.com"></a>
        </mdb-container>
      </div>
    </mdb-footer>
    <!-- Footer -->
  </div>

</template>
<script>
// import {
//   mdbFooter,
//   mdbContainer,
//   mdbRow,
//   mdbCol
// } from 'mdbvue';

export default {
  name: 'App',
  data: function () {
    return {
      loginButtonText: ""
    }
  },
  methods: {
    lisaUuedTalgud: function () {
      if (sessionStorage.getItem('userId') > 0) {
        this.$router.push({name: 'lisaRoute'})
      } else {
        sessionStorage.setItem('lastRoute', 'lisaRoute')
        this.$router.push({name: 'loginRoute'})
      }
    },
    minuTalgud: function () {
      if (sessionStorage.getItem('userId') > 0) {
        this.$router.push({name: 'minuRoute'})
      } else {
        sessionStorage.setItem('lastRoute', 'minuRoute')
        this.$router.push({name: 'loginRoute'})
      }
    },
    loginButton: function () {
      if (sessionStorage.getItem('userId') > 0) {
        this.loginButtonText = "Logi välja"
      } else {
        this.loginButtonText = "Logi sisse"
      }
    },
    loginButtonAction: function () {
      if (sessionStorage.getItem('userId') > 0) {
        sessionStorage.clear()
        this.$router.push({name: 'avalehtRoute'})
      } else {
        sessionStorage.setItem('lastRoute', 'avalehtRoute')
        this.$router.push({name: 'loginRoute'})
      }
    }

  },

  mounted() {
    this.loginButton()
  }
}


</script>


<style>

#app {
  font-family: var(--mdc-typography-font-family, Roboto, sans-serif);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #FFFFFF;
  font-size: 18px;
}

nav a.router-link-exact-active {
  color: #FFFFFF;
  font-size: 28px;
}
</style>
