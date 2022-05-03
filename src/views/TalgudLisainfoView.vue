<template>
  <div>
    {{project.name}}
    <br>
    {{project.address}}
    <br>
    {{project.startTime}}
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
  </div>
</template>

<script>
export default {
  name: "TalgudLisainfoView",

  data: function () {
    return {
      tasks: {},
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
    }
  },
  mounted() {
    this.getAllTasksForProject()
  }
}


</script>

