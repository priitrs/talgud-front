<template xmlns="http://www.w3.org/1999/html">
  <div id="app">

    <br>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <div class="w3-bar w3-black">
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">
            <router-link to="/">
              <button type="button" class="button"><span>AVALEHT</span></button>
            </router-link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <router-link to="/toimunud">
              <button type="button" class="button"><span>TOIMUNUD TALGUD</span></button>
            </router-link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <router-link to="/tulevased">
              <button type="button" class="button"><span>TULEVASED TALGUD</span></button>
            </router-link>
          </a>
        </li>
        <li class="nav-item" v-on:click="lisaUuedTalgud">
          <a class="nav-link" href="#">
            <button type="button" class="button"><span>LISA UUED TALGUD</span></button>
          </a>
        </li>
        <li class="nav-item" v-on:click="minuTalgud">
          <a class="nav-link" href="#">
            <button type="button" class="button"><span>MINU TALGUD</span></button>
          </a>
        </li>
        <a class="nav-link" href="#">
          <button v-on:click="loginButtonAction" type="button" class="btn btn-light">{{ loginButtonText }}</button>
        </a>
      </ul>
    </div>
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
        window.location.reload()
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
.button {
  display: inline-block;
  border-radius: 4px;
  background-color: #000000;
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: 20px;
  padding: 5px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 2px;
}

.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button:hover span {
  padding-right: 25px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}

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
