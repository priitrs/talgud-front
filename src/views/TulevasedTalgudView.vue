<template>
  <div>
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
          <button type="button" class="btn btn-secondary btn-sm">Lisainfo</button>
        </td>
      </tr>
      </tbody>

    </table>
  </div>
</template>

<script>
export default {
  name: "TulevasedTalgudView",
  data: function () {
    return {
      // project: {},
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
    }
  },

  mounted() {
    this.getAllNewProjects()
  }

}
</script>

<!--<style scoped>-->

<!--</style>-->