<template>
  <transition name="fade">
    <div class="about">
      <h1>This is an about page</h1>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style>
:root {
  --bg-color: #3498db;
}
body {
  background-color: var(--bg-color);
  background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
}
.about {
  margin: 0;
  
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
