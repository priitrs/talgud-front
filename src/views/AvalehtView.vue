<template>
  <div class="home">
    <section class="hero is-dark">
      <div class="hero-body">
        <div class="container">


          <!--            <p class="ml13">VIIME KOKKU VABATAHTLIKUD ÜHISE EESMÄRGI SAAVUTAMISE NIMEL.</p>-->
          <br><br><br><br><br><br><br><br><br><br><br><br><br>
          <h1 class="title">Oled oodatud talgutele!</h1>

          <h5 class="title">Talgud on nagu laulupidu, see on alateadlik vajadus tunda end kuhugi kuuluvana.</h5>
          <br>
          <!--            <h2 class="subtitle">-->
          <!--              Leia endale sobivad talgud-->
          <!--            </h2>-->

          <!--            <div class="button-block">-->
          <!--              <button class="button is-xl is-dark">-->
          <!--                Vaata toimuvaid talguid-->
          <!--              </button>-->

        </div>
      </div>

    </section>
  </div>
</template>

<script>


export default {
  name: "AvalehtView",
  comments: {},

}
</script>
<style>
.hero {
  text-align: center;
  background-image: url('https://i0.wp.com/x-coffee.ru/wp-content/uploads/2017/09/Zheludi_v_listve.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 400px;

}

.hero-body .title {
  text: 4px 4px 4px rgba(0, 0, 0, 0.6);
  padding: 40px 0 20px 0;
  font-size: 60px;
}

.subtitle {
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.7);
  font-size: 30px;
}

.button-block {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  position: absolute;
  bottom: -150px;
}

.button {
  margin-right: 50px;
  padding-left: 50px;
  padding-right: 50px;
}

.welcome {
  width: 400px;
  padding: 10px;
  margin-left: auto;
  margin-right: auto;
}

.is-xl {
  font-size: 1.7rem;
}

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
