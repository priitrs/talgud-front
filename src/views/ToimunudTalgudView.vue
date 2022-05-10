<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-">
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
    </div>
    </div>
    </div>

</template>

<script>


export default {
  ProjectName: "ToimunudTalgudView",
  data: function () {
    return {
      // project: {},
      projects: {}
    }
  },
  methods: {
    getAllOldProjects: function () {
      this.$http.get('/project-old')
          .then(response => {
            this.projects = response.data
            console.log(response.data)
          })
          .catch(error => console.log(error))

    },
    navigateToTalgudLisainfo: function (project) {

      sessionStorage.setItem('project', JSON.stringify(project))
      sessionStorage.setItem('lastRoute', 'toimunudRoute')
      this.$router.push({name: 'lisainfoRoute'})
    },
  },
  mounted() {
    this.getAllOldProjects()
  }



}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  margin-top: 50px;
}
</style>