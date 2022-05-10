<template>
  <div id="app">
    <br>
    <div class="container">
      <div class="row">
        <div class="col-">
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button v-on:click="loginButtonAction" class="btn btn-primary me-md-2">{{ loginButtonText }}</button>
          </div>


          <nav>
            <ul class="nav justify-content-center">
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
          </nav>

          <router-view/>
        </div>
      </div>
    </div>
<!--    <DrawGoogleMap />-->
  </div>
</template>
<script>
// import DrawGoogleMap from "./components/DrawGoogleMap";

export default {
  name: 'App',
  // components: {
  //   DrawGoogleMap
  // },

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

nav a.router-link-exact-active {
  color: #42b983;
}
/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #000000;*/
/*  margin-top: 50px;*/
/*}*/

</style>
