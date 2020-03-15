<template>
  <div class="inputGroup">
    <input
      ref="inputbtn"
      type="radio"
      @input="inputChange"
      :id="id"
      :value="val"
      :checked="isSelected"
      :disabled="disabled"
    />
    <label :for="id">
      <slot></slot>
    </label>
  </div>
</template>

<script>
export default {
  name: "Radio",
  computed: {
    isSelected: function() {
      return this.value === this.val ? true : null;
    }
  },
  props: ["value", "val", "id", "model", "disabled"],
  methods: {
    inputChange() {
      this.$emit("input", this.val);
    }
  }
};
</script>

<style src="./Radio.css" scoped></style>
<style src="./Radio.responsive.css" scoped></style>
