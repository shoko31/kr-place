<template>
  <transition name="fade">
    <div class="about">
      <Button color="blue" class="back" @click="$router.push('/home')">
        <img height="16" src="../assets/return.svg" />
      </Button>
      <div class="self-introduction">
        <section class="profile-picture">
          <img src="../assets/profile_picture.jpg" height="200" />
        </section>
        <section class="infos">
          <div class="info-group">
            Hey! My name is
            <b>Jae Hyeon Jeon (John)</b>. It is a pleasure to meet you!
          </div>
          <div class="info-group">
            I am a student at
            <b>Keimyung University</b> (Daegu, South Korea), majoring in
            <b>Korean Language Education</b>.
          </div>
          <div class="info-group">
            If you're aiming to improve your korean skills, we can make it happens
            <b>together</b>!
          </div>
        </section>
      </div>
      <div class="promo promo1">
        <!-- <h3>Learn korean 1:1!</h3> -->
        <div class="inset-shadow">
          <img src="../assets/topik_practice.jpg" />
        </div>
      </div>
      <div class="promo promo2">
        <!-- <h3>Learn korean 1:1!</h3> -->
        <div class="inset-shadow">
          <img src="../assets/korean_english_class.jpg" />
        </div>
      </div>
      <div class="contact">
        <h3>Contact me!</h3>
        <div class="email">
          <img height="24" src="../assets/mail.svg" />&nbsp;
          <a href="mailto:5373998@gmail.com">5373998@gmail.com</a>
        </div>
        <div class="instagram">
          <img height="24" src="../assets/instagram.svg" />&nbsp;
          <a target="_blank" href="https://www.instagram.com/Korean_Bruh/">Korean_Bruh</a> /
          <a target="_blank" href="https://www.instagram.com/Korean_John/">Korean_John</a>
        </div>
        <div class="facebook">
          <img height="24" src="../assets/facebook.svg" />&nbsp;
          <a
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100009284228228"
          >John Jaehyeon</a>
        </div>
        <div class="kakaotalk">
          <img height="24" src="../assets/kakaotalk.svg" /> 5373998
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Button from "@/components/Button/Button.vue";

export default {
  name: "About",
  components: { Button }
};
</script>

<style>
:root {
  --bg-color: #333;
}
body {
  background-color: var(--bg-color);
  /* background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%); */
}
.back {
  position: fixed;
  top: 15px;
  left: 15px;
  z-index: 99;
  padding: 8px;
  margin: 0;
}
.back img {
  color: white;
  -webkit-filter: invert(100%);
  filter: invert(100%);
}
.about {
  margin: 0;
  display: block;
  position: relative;
  min-height: 100vh;
  color: #fff;
}
.promo {
  --main-color: #e3e3e3;
  padding: 20px;
  display: block;
  background: var(--main-color);
  color: #333;
  position: relative;
  z-index: 0;
}
.promo > .inset-shadow {
  display: inline-block;
  position: relative;
  background: transparent;
  -webkit-box-shadow: inset 0px 0px 20px 20px var(--main-color);
  -moz-box-shadow: inset 0px 0px 20px 20px var(--main-color);
  box-shadow: inset 0px 0px 20px 20px var(--main-color);
}
.promo > .inset-shadow > img {
  padding: 0;
  margin: 0;
  z-index: -1;
  display: block;
  position: relative;
}
.promo2 {
  --main-color: #7db7df;
  color: #fff;
}
.contact {
  padding: 30px;
  padding-bottom: 80px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  /* grid-template-rows: 1fr 1fr; */
}
.contact h3 {
  font-size: 2em;
  margin-bottom: 55px;
  grid-row: 1;
  grid-column-end: span 4;
}
.contact img {
  vertical-align: bottom;
}
.contact a {
  color: inherit;
  text-decoration: none;
}
.self-introduction {
  padding: 40px 0;
  display: grid;
  grid-template-columns: 1fr 3fr;
  margin: 0 40px;
}
.info-group {
  margin-bottom: 30px;
  text-align: left;
  font-size: 1.5em;
}
.profile-picture > img {
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.9) 5px 5px 15px,
    rgba(255, 255, 255, 0.5) -5px -5px 5px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
