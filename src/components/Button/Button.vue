<template>
  <a class="btn" v-bind:class="[buttonClasses]" @click="click">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "Button",
  computed: {
    buttonClasses: function() {
      return (
        (this.disabled ? "btn-disabled gray" : this.color) + " " + this.size
      );
    }
  },
  methods: {
    click() {
      this.$emit("click", this);
    }
  },
  props: {
    color: { default: "green" },
    disabled: { default: false, type: Boolean },
    size: { default: "normal" }
  }
};
</script>

<style>
/* button div */
#buttons {
  padding-top: 50px;
  text-align: center;
}

/* start da css for da buttons */
.btn {
  border-radius: 5px;
  padding: 15px 25px;
  font-size: 22px;
  text-decoration: none;
  margin: 20px;
  color: #fff;
  position: relative;
  display: inline-block;
  user-select: none;
  cursor: pointer;
}
.btn.small {
  border-radius: 3px;
  padding: 5px 15px;
  font-size: 20px;
  margin: 10px;
}
.btn.btn-disabled {
  cursor: not-allowed;
}
.btn:active:not(.btn-disabled) {
  transform: translate(0px, 5px);
  -webkit-transform: translate(0px, 5px);
  box-shadow: 0px 1px 0px 0px var(--bg-color);
}
.gray {
  background-color: #95a5a6;
  box-shadow: 0px 5px 0px 0px #7f8c8d;
}

.blue {
  background-color: #55acee;
  box-shadow: 0px 5px 0px 0px #3c93d5;
}

.blue:hover {
  background-color: #6fc6ff;
}

.green {
  background-color: #2ecc71;
  box-shadow: 0px 5px 0px 0px #15b358;
}

.green:hover {
  background-color: #48e68b;
}

.red {
  background-color: #e74c3c;
  box-shadow: 0px 5px 0px 0px #ce3323;
}

.red:hover {
  background-color: #ff6656;
}

.purple {
  background-color: #9b59b6;
  box-shadow: 0px 5px 0px 0px #82409d;
}

.purple:hover {
  background-color: #b573d0;
}

.orange {
  background-color: #e67e22;
  box-shadow: 0px 5px 0px 0px #cd6509;
}

.orange:hover {
  background-color: #ff983c;
}

.yellow {
  background-color: #f1c40f;
  box-shadow: 0px 5px 0px 0px #d8ab00;
}

.yellow:hover {
  background-color: #ffde29;
}
</style>
