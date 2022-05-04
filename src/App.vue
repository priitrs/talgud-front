<template>
  <div id="app">
    <br>
    <div v-if="!isLoggedIn" class="d-grid gap-2 d-md-flex justify-content-md-end">
      <button v-on:click="$router.push({name: 'loginRoute'})" class="btn btn-primary me-md-2">Logi sisse</button>
    </div>
    <div v-if="isLoggedIn" class="d-grid gap-2 d-md-flex justify-content-md-end">
      <button v-on:click="logOut" class="btn btn-primary me-md-2">Logi välja</button>
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

        <li class="nav-item" v-if="isLoggedIn">
          <a class="nav-link" href="#">
            <router-link to="/uued">Lisa uued Talgud</router-link>
          </a>
        </li>
        <li class="nav-item" v-if="isLoggedIn">
          <a class="nav-link" href="#">
            <router-link to="/minu">Minu Talgud</router-link>
          </a>
        </li>

        <li class="nav-item" v-if="!isLoggedIn">
          <a class="nav-link">
            <router-link to="/login">Lisa uued Talgud</router-link>
          </a>
        </li>
        <li class="nav-item" v-if="!isLoggedIn">
          <a class="nav-link" href="#">
            <router-link to="/login">Minu Talgud</router-link>
          </a>
        </li>

      </ul>
    </nav>

    <router-view/>
  </div>
</template>
<script>
export default {

  data: function () {
    return {
      isLoggedIn: false
    }
  },
  methods: {
    isLoggedIn: function () {
      if (sessionStorage.getItem('userId') != null) {
        this.isLoggedIn = true
      }
    },
    logOut: function () {
      sessionStorage.clear()
      this.isLoggedIn = false
      this.$router.push({name: 'avalehtRoute'})
    }
  },

  mounted() {
    this.isLoggedIn()
  }
}


</script>


<style>

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
