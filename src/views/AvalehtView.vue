<template>

<div>
  <br><br><br><br><br><br><br><br><br>

  <p class="ml13">VIIME KOKKU VABATAHTLIKUD ÜHISE EESMÄRGI SAAVUTAMISE NIMEL.</p>


</div>
</template>

<script>
export default {
  name: "AvalehtView"
}
</script>
<style>

p {
  position: relative;
  font-family: sans-serif;
  text-transform: uppercase;
  font-size: 2em;
  letter-spacing: 4px;
  overflow: hidden;
  background: linear-gradient(90deg, #000, #fff, #000);
  background-repeat: no-repeat;
  background-size: 80%;
  animation: animate 12s linear infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgba(255, 255, 255, 0);
}

@keyframes animate {
  0% {
    background-position: -400%;
  }
  100% {
    background-position: 400%;
  }
}
</style>
