<template>
  <div id="app">
<!--    <router-link to="/">Avaleht</router-link>-->
    <nav >
      <ul class="nav justify-content-center">

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><router-link to="/">Avaleht</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><router-link to="/Toimunud">Toimunud Talgud</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><router-link to="/Tulevased">Tulevased Talgud</router-link></a>
        </li>
      </ul>
    </nav>

    <router-view/>
  </div>
</template>

<style>

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
