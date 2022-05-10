<template>
  <div>
    <div class="container-md">
      <div class="row justify-content-center">
        <div class="col-5">
          <br>
          <br>
          <br>
          <table class="table">
            <thead>
            <tr>
              <th scope="col">Kuupäev</th>
              <th scope="col">Nimi</th>
              <th scope="col">Asukoht</th>
              <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="project in projects">
              <th scope="row">{{ project.startTime }}</th>
              <td>{{ project.name }}</td>
              <td>{{ project.address }}</td>
              <td>
                <button type="button" class="btn btn-secondary btn-sm" v-on:click="navigateToTalgudLisainfo(project)">
                  Lisainfo
                </button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="col">
          <DrawGoogleMap/>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

import DrawGoogleMap from "@/components/DrawGoogleMap";

export default {
  name: "TulevasedTalgudView",
  components: {
    DrawGoogleMap
  },
  data: function () {
    return {

      projects: {}
    }
  },
  methods: {
    getAllNewProjects: function () {
      this.$http.get('/project-new')
          .then(response => {
            this.projects = response.data
            console.log(response.data)
          })
          .catch(error => console.log(error))
    },
    navigateToTalgudLisainfo: function (project) {

      sessionStorage.setItem('project',JSON.stringify(project))
      sessionStorage.setItem('lastRoute', 'tulevasedRoute')
      this.$router.push({name: 'lisainfoRoute'})
    },
  },

  mounted() {
    this.getAllNewProjects()
  }

}
</script>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  margin-top: 50px;
}

</style>