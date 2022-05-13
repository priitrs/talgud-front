<template>
  <div>
    <a> <router-link to="/editContact">Muuda kasutaja andmeid</router-link> </a>
    <AddGoogleMap/>
  </div>
</template>

<script>

import 'vue2-datepicker/index.css';

import AddGoogleMap from "@/components/AddGoogleMap";

export default {
  name: "UuedTalgudView",
  components: {
    AddGoogleMap,

  },
  data: function () {
    return {

    }
  },

  methods: {

  },

}
</script>

<style scoped>

</style>