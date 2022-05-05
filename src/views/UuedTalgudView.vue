<template>
  <div>
    <br>
    <input type="text" v-model="name" placeholder="Lisa talgutele nimi">
    <br>
    <br>
    <input type="text" v-model="address" placeholder="Lisa aadress">
    <br>
    <br>
    <input type="text" v-model="startTime" placeholder="Lisa alguse aeg">
    <br>
    <br>
    <input type="text" v-model="endTime" placeholder="Lisa lõpu aeg">
    <br>
    <br>
    <input type="text" v-model="longitude" placeholder="longitude">
    <br>
    <br>
    <input type="text" v-model="latitude" placeholder="latitude">
    <br>
    <br>
    <div class="d-grid gap-2 d-md-flex">
      <button v-on:click="addNewProjectUser" class="btn btn-primary me-md-2">Loo uued talgud</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "UuedTalgudView",

  data: function () {
    return {
      name: "",
      address: "",
      startTime: "",
      endTime: "",
      longitude: "",
      latitude: "",
      project: {}
    }
  },

  methods: {
    clearProject: function () {
      sessionStorage.removeItem('project')
    },

    addNewProjectUser: function () {
      let project = {
        name: this.name,
        address: this.address,
        startTime: this.startTime,
        endTime: this.endTime,
        longitude: this.longitude,
        latitude: this.latitude
      }
      this.$http.post('/project',project,{
        params:{
          userId:sessionStorage.getItem("userId")
        }
      })
          .then(response => {
            this.project = response.data
            sessionStorage.setItem('project', this.project)
            // this.$router.push({name: this.lastRoute})
          })
          .catch(error => console.log(error.response.data))
    }
  },

  mounted() {
    this.clearProject()
  }
}
</script>

<style scoped>

</style>