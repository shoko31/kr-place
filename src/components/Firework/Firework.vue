<template>
  <div class="fireworks" :style="{ display: fireworkDisplay }">
    <div class="firework">
      <div class="explosion">
        <div class="spark green"></div>
      </div>
      <div class="explosion">
        <div class="spark blue"></div>
      </div>
      <div class="explosion">
        <div class="spark red"></div>
      </div>
      <div class="explosion">
        <div class="spark red"></div>
      </div>
      <div class="explosion">
        <div class="spark yellow"></div>
      </div>
      <div class="explosion">
        <div class="spark blue"></div>
      </div>
      <div class="explosion">
        <div class="spark green"></div>
      </div>
      <div class="explosion">
        <div class="spark yellow"></div>
      </div>
    </div>
    <div class="firework" style="margin-top: -70px">
      <div class="explosion">
        <div class="spark green"></div>
      </div>
      <div class="explosion">
        <div class="spark blue"></div>
      </div>
      <div class="explosion">
        <div class="spark red"></div>
      </div>
      <div class="explosion">
        <div class="spark red"></div>
      </div>
      <div class="explosion">
        <div class="spark yellow"></div>
      </div>
      <div class="explosion">
        <div class="spark blue"></div>
      </div>
      <div class="explosion">
        <div class="spark green"></div>
      </div>
      <div class="explosion">
        <div class="spark yellow"></div>
      </div>
    </div>
    <div class="firework">
      <div class="explosion">
        <div class="spark green"></div>
      </div>
      <div class="explosion">
        <div class="spark blue"></div>
      </div>
      <div class="explosion">
        <div class="spark red"></div>
      </div>
      <div class="explosion">
        <div class="spark red"></div>
      </div>
      <div class="explosion">
        <div class="spark yellow"></div>
      </div>
      <div class="explosion">
        <div class="spark blue"></div>
      </div>
      <div class="explosion">
        <div class="spark green"></div>
      </div>
      <div class="explosion">
        <div class="spark yellow"></div>
      </div>
    </div>
    <div class="firework" style="margin-top: 70px">
      <div class="explosion">
        <div class="spark green"></div>
      </div>
      <div class="explosion">
        <div class="spark blue"></div>
      </div>
      <div class="explosion">
        <div class="spark red"></div>
      </div>
      <div class="explosion">
        <div class="spark red"></div>
      </div>
      <div class="explosion">
        <div class="spark yellow"></div>
      </div>
      <div class="explosion">
        <div class="spark blue"></div>
      </div>
      <div class="explosion">
        <div class="spark green"></div>
      </div>
      <div class="explosion">
        <div class="spark yellow"></div>
      </div>
    </div>
    <div class="firework">
      <div class="explosion">
        <div class="spark green"></div>
      </div>
      <div class="explosion">
        <div class="spark blue"></div>
      </div>
      <div class="explosion">
        <div class="spark red"></div>
      </div>
      <div class="explosion">
        <div class="spark red"></div>
      </div>
      <div class="explosion">
        <div class="spark yellow"></div>
      </div>
      <div class="explosion">
        <div class="spark blue"></div>
      </div>
      <div class="explosion">
        <div class="spark green"></div>
      </div>
      <div class="explosion">
        <div class="spark yellow"></div>
      </div>
    </div>
    <div class="firework" style="margin-top: -70px">
      <div class="explosion">
        <div class="spark green"></div>
      </div>
      <div class="explosion">
        <div class="spark blue"></div>
      </div>
      <div class="explosion">
        <div class="spark red"></div>
      </div>
      <div class="explosion">
        <div class="spark red"></div>
      </div>
      <div class="explosion">
        <div class="spark yellow"></div>
      </div>
      <div class="explosion">
        <div class="spark blue"></div>
      </div>
      <div class="explosion">
        <div class="spark green"></div>
      </div>
      <div class="explosion">
        <div class="spark yellow"></div>
      </div>
    </div>
    <div class="firework">
      <div class="explosion">
        <div class="spark green"></div>
      </div>
      <div class="explosion">
        <div class="spark blue"></div>
      </div>
      <div class="explosion">
        <div class="spark red"></div>
      </div>
      <div class="explosion">
        <div class="spark red"></div>
      </div>
      <div class="explosion">
        <div class="spark yellow"></div>
      </div>
      <div class="explosion">
        <div class="spark blue"></div>
      </div>
      <div class="explosion">
        <div class="spark green"></div>
      </div>
      <div class="explosion">
        <div class="spark yellow"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Firework",
  data: function() {
    return {
      fireworkDisplay: "none",
      resetFunction: null
    };
  },
  methods: {
    fire: function() {
      this.fireworkDisplay = "none";
      if (this.resetFunction !== null) {
        clearTimeout(this.resetFunction);
        this.resetFunction = null;
      }
      this.resetFunction = setTimeout(
        function() {
          this.fireworkDisplay = "flex";
          this.resetFunction = null;
        }.bind(this),
        10
      );
      return true;
    }
  }
};
</script>

<style>
.fireworks {
  user-select: none;
  pointer-events: none;
  height: 300px;
  width: 100vw;
  position: absolute;
  bottom: 0;
  left: 0;
  display: none;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 50;
}
.fireworks .firework {
  position: relative;
  top: 0px;
  left: 0px;
  margin: 0px 50px;
}
.fireworks .firework:before {
  content: "";
  display: block;
  border-radius: 5px;
  background-color: skyblue;
  width: 5px;
  height: 0px;
  will-change: transform;
  transform: translateY(50vh);
  animation: fireworkstart 1.5s ease-out;
}
.fireworks .firework .explosion {
  position: absolute;
  top: 0;
  width: 5px;
  height: 20px;
  opacity: 0;
  transform-origin: top center;
  will-change: transform;
  animation: explosion 0.7s linear 1.5s;
}
.fireworks .firework .explosion:nth-child(1) {
  transform: rotate(0deg);
}
.fireworks .firework .explosion:nth-child(2) {
  transform: rotate(90deg);
}
.fireworks .firework .explosion:nth-child(3) {
  transform: rotate(180deg);
}
.fireworks .firework .explosion:nth-child(4) {
  transform: rotate(-90deg);
}
.fireworks .firework .explosion:nth-child(5) {
  transform: rotate(45deg);
}
.fireworks .firework .explosion:nth-child(6) {
  transform: rotate(-45deg);
}
.fireworks .firework .explosion:nth-child(7) {
  transform: rotate(135deg);
}
.fireworks .firework .explosion:nth-child(8) {
  transform: rotate(225deg);
}

.fireworks .firework .explosion .spark {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  will-change: transform;
  animation: explosion2 0.7s ease-in-out 1.5s;
}

.fireworks .firework .explosion .spark.red {
  background-color: #e91e63;
}
.fireworks .firework .explosion .spark.blue {
  background-color: skyblue;
}
.fireworks .firework .explosion .spark.green {
  background-color: limegreen;
}
.fireworks .firework .explosion .spark.yellow {
  background-color: yellow;
}
.fireworks .firework .explosion .spark.purple {
  background-color: purple;
}
@keyframes fireworkstart {
  0% {
    height: 0px;
    transform: translateY(50vh);
  }
  50% {
    height: 50px;
  }
  75% {
    height: 30px;
  }
  100% {
    height: 0;
    transform: translateY(0vh);
  }
}

@keyframes explosion {
  0% {
    height: 0px;
    opacity: 0;
  }
  50% {
    height: 25px;
    opacity: 1;
  }
  100% {
    height: 0px;
    opacity: 0;
  }
}
@keyframes explosion2 {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(5px);
  }
  75% {
    transform: translateY(50px);
  }
  100% {
    transform: translateY(70px);
  }
}
</style>
