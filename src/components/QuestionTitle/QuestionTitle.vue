<template>
  <div :if="question && question.text">
    <h1 :key="question.text">Q{{ $store.getters.questionAnswered + 1 }}. {{ question.text }}</h1>
    <ul :if="question.sub_questions && question.sub_questions.length > 0">
      <li v-for="subq in question.sub_questions" :key="subq">{{subq}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "QuestionTitleModule",
  props: ["question"]
};
</script>

<style scoped>
h1 {
  font-size: 1em;
}
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
<style src="./QuestionTitle.responsive.css" scoped></style>
