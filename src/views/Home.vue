<template>
  <transition name="fade">
    <div ref="home" class="home">
      <h1>
        Welcome to
        <strong>KR-Place</strong>
      </h1>
      <h3>Test your korean level easily by taking this free test!</h3>
      <p v-if="$store.getters.quizzEnded">
        Thank you for taking our test !
        <br />Your level is
        <span class="badge">{{ currentLevelToText }}</span>
      </p>
      <p v-if="$store.getters.quizzEnded">
        If you are interested in Korean and would like to learn more, click
        <Button size="small" color="blue" @click="$router.push('/about')">here</Button>
      </p>
      <p>
        <Button
          color="purple"
          class="ring"
          @click="startTest($event)"
        >{{ $store.getters.quizzEnded ? "Re-" : "" }}Take the test !</Button>
      </p>
      <footer>Copyright 2020 - All Rights Reserved</footer>
      <Firework ref="fireworkstation" />
    </div>
  </transition>
</template>

<script>
import { e_levels } from "@/enums/levels.enum";
import Button from "@/components/Button.vue";
import Firework from "@/components/Firework.vue";

export default {
  name: "home",
  components: {
    Button,
    Firework
  },
  methods: {
    startTest: function(e) {
      e.$el.className += " popout";
      this.$store.commit("set_nav_token", Date.now());
      setTimeout(
        function() {
          this.$store.commit("restart_quizz");
          this.$router.push("/quizz");
        }.bind(this),
        400
      );
    }
  },
  computed: {
    currentLevelToText: function() {
      return Object.keys(e_levels).find(
        k => e_levels[k] === this.$store.getters.questionLevel
      );
    }
  },
  mounted() {
    if (this.$store.getters.quizzEnded) {
      this.$refs.fireworkstation.fire();
    }
  }
};
</script>

<style>
:root {
  --bg-color: #3498db;
}
h1 {
  font-size: 5em;
}
h3 {
  font-size: 1.5em;
}
h1,
h3 {
  margin: 5px;
  font-weight: 600;
}
p {
  font-size: 18px;
  margin: 35px;
  margin-bottom: 5px;
}
.home {
  position: fixed;
  display: flex;
  padding: 60px;
  justify-content: center;
  flex-direction: column;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--bg-color);
  background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
}
.badge {
  background: #b573d0;
  box-shadow: 0px 0px 3px #82409d;
  color: white;
  font-weight: 600;
  border-radius: 25px;
  padding: 10px 20px;
  margin: 5px;
  display: inline-block;
}
footer {
  position: absolute;
  bottom: 5px;
  text-align: center;
  left: 0px;
  right: 0px;
  font-stretch: condensed;
  color: #459;
  user-select: none;
}
fireworks {
  z-index: 99;
}
.fadeout {
  animation: fadeout 0.4s;
  animation-fill-mode: both;
}
.popout {
  animation: popout 0.4s;
  animation-fill-mode: forwards;
}
@keyframes popout {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2) rotate(-10deg);
    opacity: 1;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
