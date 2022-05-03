
<template>
  <div>
    {{ project.name }}
    <br>
    {{ project.address }}
    <br>
    {{ project.startTime }}
    <br>
    <br>

    <table class="table">
      <thead>
      <tr>
        <th scope="col">Taski nimi</th>
        <th scope="col">Vastutaja</th>
      </tr>
      </thead>

      <tbody>
      <tr v-for="task in tasks">
        <td scope="row">{{ task.name }}</td>
        <td>{{ task.userId }}</td>
      </tr>
      </tbody>
    </table>

    <br>

<div class="img-thumbnail">
  <img  class="rounded float" v-for="picture in pictures" :src="'data:image/jpeg;base64,'+picture.data" style="height: 300px"/>
</div>

    <br>

  </div>
</template>



<script>

export default {
  name: "TalgudLisainfoView",

  data: function () {
    return {
      tasks: {},
      pictures: {},
      project: JSON.parse(sessionStorage.getItem('project')),
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
    getAllPictures: function () {
      this.$http.get('/picture', {
        params: {
          projectId: this.project.id
        }
      })
          .then(response => {
            this.pictures = response.data
          })
          .catch(error => console.log(error.response.data))
    }
  },
  mounted() {
    this.getAllTasksForProject()
    this.getAllPictures()
  },

}

</script>


