<template>
  <div
    :style="{ backgroundColor: bgColor, borderColor: borderColor }"
    class="progress-bar"
  >
    <div class="filler" :style="{ right: progressValue }"></div>
    <label :style="{ justifySelf: justify, alignSelf: align }">
      <slot></slot>
    </label>
  </div>
</template>

<script>
export default {
  name: "Progress",
  props: {
    bgColor: { default: "#333" },
    borderColor: { default: "#f3f3f3" },
    justify: { default: "center" },
    align: { default: "center" },
    value: { default: 0, type: Number },
    maxvalue: { default: 100, type: Number }
  },
  computed: {
    progressValue: function() {
      let currentPercentage = (this.value * 100.0) / this.maxvalue;
      let invertedPercentage = 100.0 - currentPercentage;
      return Math.round(invertedPercentage, 2).toString() + "%";
    }
  }
};
</script>

<style>
.progress-bar {
  display: grid;
  height: 100%;
  width: 100%;
  border: 1px solid #777;
}
.filler {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  background-color: #2ecc71;
  transition: all 0.3s ease-in-out;
  z-index: 0;
}
label {
  user-select: none;
  font-size: 14px;
  font-weight: 600;
  z-index: 1;
}
</style>
