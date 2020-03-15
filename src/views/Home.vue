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
import Button from "@/components/Button/Button.vue";
import Firework from "@/components/Firework/Firework.vue";

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

<style src="./Home.css"></style>
<style src="./Home.responsive.css"></style>
