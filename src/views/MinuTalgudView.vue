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
              <th scope="row">{{ project.projectStartTime }}</th>
              <td>{{ project.projectName }}</td>
              <td>{{ project.projectAddress }}</td>
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
          <br>
          <DrawGoogleMap/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import DrawGoogleMap from "@/components/DrawGoogleMap";

export default {
  name: "MinuTalgudView",
  components: {
    DrawGoogleMap
  },
  data: function () {
    return {

      projects: {}
    }
  },
  methods: {
    findAllUserProjects: function () {
      this.$http.get('/project-user', {
        params: {
          userId: sessionStorage.getItem("userId")
        }
      })
          .then(response => {
            this.projects = response.data
            console.log(response.data)
          })
          .catch(error => console.log(error))
    },
    navigateToTalgudLisainfo: function (project) {

      sessionStorage.setItem('project', JSON.stringify(project))
      sessionStorage.setItem('lastRoute', 'minuRoute')
      this.$router.push({name: 'lisainfoLogInRoute'})
    },
  },

  mounted() {
    this.findAllUserProjects()
  }
}
</script>


