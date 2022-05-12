<template>
  <div>
    {{ project.name }}
    <br>
    Asukoht: {{ project.address }}
    <br>
    Algus: {{ project.startTime }}
    <br>
    Lõpp: {{ project.endTime }}
    <br>
    <br>
    <div class="container-md">
      <div class="row justify-content-center">
        <div class="col-3">
          <table class="table">
            <thead>
            <tr>
              <th scope="col">Ülesanded</th>
              <th scope="col">Vastutaja</th>
            </tr>
            </thead>

            <tbody>
            <tr v-for="task in tasks">
              <td>{{ task.name }}</td>
              <td>{{ task.contactFirstName }} {{ task.contactLastName }}</td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="col-3">
          <table class="table">
            <thead>
            <tr>
              <th scope="col">Vahendid</th>
              <th scope="col">Vastutaja</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="resource in resources">
              <td>{{ resource.name }}</td>
              <td>{{ resource.contactFirstName }} {{ resource.contactLastName }}</td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="col-4">
          <br>

          <div id="galerii">
            <img class="image" v-for="(picture, i) in pictures" :src="picture" :key="i"
                 @click="index = i" style="height: 200px">
            <vue-gallery-slideshow :images="pictures" :index="index" @close="index = null"></vue-gallery-slideshow>
          </div>
          <br>
        </div>
      </div>
    </div>
    <div v-if="showOsalenButton" class="d-grid gap-2 mx-auto">
      <button v-on:click="osalenButtonAction" class="btn btn-primary me-md-2">OSALEN</button>
    </div>
  </div>
</template>


<script>

export default {
  name: "TalgudLisainfoView",

  components: {VueGallerySlideshow},

  data: function () {
    return {
      tasks: {},
      picturesTemp: {},
      project: JSON.parse(sessionStorage.getItem('project')),
      pictures: [],
      index: null,
      showOsalenButton: false
    }
  },

  methods: {
    getAllTasksForProject: function () {
      this.$http.get('/task', {
        params: {
          projectId: this.project.id
        }
      })
          .then(response => {
            this.tasks = response.data
          })
          .catch(error => console.log(error.response.data))
    },
    getAllResourcesForProject: function () {
      this.$http.get('/resource', {
        params: {
          projectId: this.project.id
        }
      })
          .then(response => {
            this.resources = response.data
          })
          .catch(error => console.log(error.response.data))
    },
    getAllPictures: function () {
      this.$http.get('/picture', {
        params: {
          projectId: this.project.id
        }
      })
          .then(response => {
            this.picturesTemp = response.data
            for (let i = 0; i < this.picturesTemp.length; i++) {

              this.pictures.push(this.picturesTemp[i].data)
            }
          })
          .catch(error => console.log(error.response.data))
    },
    showOsalenButtonValue: function () {
      if (sessionStorage.getItem('lastRoute') == 'tulevasedRoute') {
        this.showOsalenButton = true
      }
    },
    osalenButtonAction: function () {
      if (sessionStorage.getItem('userId') > 0) {
        this.$http.post('/project-user', null, {
          params: {
            projectId: this.project.id,
            userId: sessionStorage.getItem('userId'),
          }
        })
        this.$router.push({name: 'planningRoute'})
      } else {
        this.$router.push({name: 'loginRoute'})
      }
    }
  },
  mounted() {
    this.getAllTasksForProject()
    this.getAllResourcesForProject()
    this.getAllPictures()
    this.showOsalenButtonValue()
  },

}

</script>


