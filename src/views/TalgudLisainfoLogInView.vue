<template>
  <div>
    {{ project.projectName }}
    <br>
    {{ project.projectAddress }}
    <br>
    {{ project.projectStartTime }}
    <br>
    <br>

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
        <td>
<!--          {{ task.userId }}-->

        </td>
      </tr>
      </tbody>
    </table>

    <br>

    <!--<div class="img-thumbnail">-->
    <!--  <img  class="rounded float" v-for="picture in pictures" :src="'data:image/jpeg;base64,'+picture.data" style="height: 300px"/>-->
    <!--</div>-->

    <div id="galerii">
      <img class="image" v-for="(picture, i) in pictures" :src="picture" :key="i"
           @click="index = i" style="height: 200px">
      <vue-gallery-slideshow :images="pictures" :index="index" @close="index = null"></vue-gallery-slideshow>
    </div>
    <br>

    <div v-if="showManageButton" class="d-grid gap-2 d-md-flex">
      <button v-on:click="manageButtonAction" class="btn btn-primary me-md-2">Redigeeri</button>
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
      showManageButton: false,
      contacts: {}
    }
  },

  methods: {
    getAllTasksForProject: function () {
      this.$http.get('/task', {
        params: {
          projectId: this.project.projectId
        }
      })
          .then(response => {
            this.tasks = response.data
          })
          .catch(error => console.log(error.response.data))
    },
    getAllPictures: function () {
      this.$http.get('/picture', {
        params: {
          projectId: this.project.projectId
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

    showManageButtonValue: function () {
      if (this.project.isModerator) {
        this.showManageButton = true
      }
    },
    manageButtonAction: function () {
      this.$router.push({name: 'planningRoute'})
    },
    getAllProjectContacts: function () {
      this.$http.get('/user-project', {
        params: {
          projectId: this.project.projectId
        }
      })
          .then(response => {
            this.contacts = response.data
          })
          .catch(error => console.log(error.response.data))
    }
  },
  mounted() {
    this.getAllTasksForProject()
    this.getAllPictures()
    this.showManageButtonValue()
    this.getAllProjectContacts()
  },

}

</script>


