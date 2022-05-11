<template>
  <div>

    <br>
    <input type="text" v-model="name" placeholder="Lisa talgutele nimi">
    <br>
    <br>
    <input type="text" v-model="address" placeholder="Lisa aadress">
    <br>
    <div class="container-md">
      <div class="row justify-content-center">
        <div class="col-2">
          <br>
          <date-picker v-model="time1" type="datetime" placeholder="Talgute algus"></date-picker>
        </div>
        <div class="col-2">
          <br>
          <date-picker v-model="time2" type="datetime" placeholder="Talgute lõpp"></date-picker>
        </div>
      </div>
      <br>
      <div class="d-grid gap-2 mx-auto">
        <button v-on:click="addNewProjectUser" class="btn btn-primary me-md-2">Loo uued talgud</button>
      </div>

      <br>
      <input type="text" v-model="longitude" placeholder="longitude">
      <br>
      <br>
      <input type="text" v-model="latitude" placeholder="latitude">
      <br>
    </div>

  </div>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

export default {
  name: "UuedTalgudView",
  components: {DatePicker},

  data: function () {
    return {
      name: "",
      address: "",
      startTime: "",
      endTime: "",
      longitude: "",
      latitude: "",
      time1: null,
      time2: null,
      // project: {}
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
      this.$http.post('/project', project, {
        params: {
          userId: sessionStorage.getItem("userId")
        }
      })
          .then(response => {
            this.project = response.data
            sessionStorage.setItem('project', JSON.stringify(response.data))
            this.$router.push({name: 'planningRoute'})
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