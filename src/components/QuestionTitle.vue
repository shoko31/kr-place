<template>
  <div :if="question && question.text">
    <h1
      :key="question.text"
      :style="mainTextStyle"
    >Q{{ $store.getters.questionAnswered + 1 }}. {{ question.text }}</h1>
    <ul :if="question.sub_questions && question.sub_questions.length > 0">
      <li v-for="subq in question.sub_questions" :key="subq">{{subq}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "QuestionTitleModule",
  props: ["question"],
  data: function() {
    return {
      mainTextStyle: {
        "font-size": "1em"
      }
    };
  }
};
</script>

<style>
ul {
  margin: 0;
  margin-top: 20px;
  padding: 0;
  list-style-type: none;
}
li {
  font-size: 0.7em;
}
</style>
