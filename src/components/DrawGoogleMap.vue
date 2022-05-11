<template>
  <div>

    <gmap-map
        :center="center"
        :zoom="7"
        style="width:97%;  height: 600px;">
      <gmap-marker
          :key="index"
          v-for="(gmp, index) in locations"
          :position="gmp"
          @click="center=gmp"
      ></gmap-marker>
    </gmap-map>

  </div>
</template>

<script>
export default {
  name: "DrawGoogleMap",
  data() {
    return {
      center: {
        lat: 58.887858,
        lng: 25.541171
      },
      locations: [],
      currentLocation: null
    };
  },

  mounted() {
    this.setLocationLatLng();
  },

  methods: {
    setPlace(loc) {
      this.currentLocation = loc;
    },
    setLocationLatLng: function() {
      lat:58.887858
          lng: 25.541171
      // navigator.geolocation.getCurrentPosition(geolocation => {
      //   this.center = {
      //     lat: geolocation.coords.latitude,
      //     lng: geolocation.coords.longitude,
      //   };
      // })
;

      this.locations = [
        {
          lat: 59.43776846714063,
          lng: 24.7500152966542,
          label: 'Tallinn'
        },
        {
          lat: 58.63366521458556,
          lng: 27.12649963125393,
          label: 'Tartumaa'
        },
        {
          lat: 58.68605491351404,
          lng: 23.83007251353316,
          label: 'Läänemaa'
        },

      ];

    }
  }
};
</script>