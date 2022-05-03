<template>
  <div id="app">
    <br>
    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
      <button class="btn btn-primary me-md-2" type="submit">Logi sisse</button>
    </div>

    <nav >
      <ul class="nav justify-content-center">

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><router-link to="/">Avaleht</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><router-link to="/toimunud">Toimunud Talgud</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><router-link to="/tulevased">Tulevased Talgud</router-link></a>
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
