<template>
  <div :if="question && question.question" class="question">
    <transition name="fade-question" mode="out-in">
      <QuestionTitle :question="question.question" class="title" />
    </transition>
    <transition name="fade-question" mode="out-in">
      <div
        :key="question.answers[0].text"
        ref="answers"
        class="answers"
        :style="answerGridRowCount"
      >
        <Radio
          class="answer"
          v-for="(answer, index) in question.answers"
          :key="answer.text"
          :id="index"
          :val="index"
          v-model="picked"
          :disabled="showingAnswer"
        >
          <span>{{ String.fromCharCode(index + "A".charCodeAt(0)) }}.</span>
          <span>{{ answer.text }}</span>
        </Radio>
        <Button
          v-show="!showingAnswer"
          color="green"
          :disabled="!hasAnswered"
          @click="submitAnswer"
        >Validate answer</Button>
        <Button
          v-show="showingAnswer && canContinue"
          color="blue"
          :disabled="!hasAnswered"
          @click="nextQuestion"
        >Next question</Button>
        <Button
          v-show="showingAnswer && !canContinue"
          color="blue"
          :disabled="!hasAnswered"
          @click="endQuizz"
        >Result</Button>
      </div>
    </transition>
  </div>
</template>

<script>
import Button from "@/components/Button/Button.vue";
import Radio from "@/components/Radio/Radio.vue";
import QuestionTitle from "@/components/QuestionTitle/QuestionTitle.vue";

export default {
  name: "QuestionModule",
  props: ["question"],
  data: function() {
    return {
      picked: -1,
      showingAnswer: false,
      answerMapping: [0, 1, 2, 3]
    };
  },
  computed: {
    hasAnswered: function() {
      return this.picked !== -1;
    },
    canContinue: function() {
      return this.$store.getters.mistakes < 3;
    },
    answerGridRowCount: function() {
      return "grid-template-rows: auto;";
    }
  },
  methods: {
    submitAnswer: function() {
      if (this.picked !== -1) {
        this.showingAnswer = true;
        for (let i = 0; i < this.question.answers.length; i++) {
          if (this.question.answers[i].valid === false && i === this.picked) {
            // INVALID ANSWER
            this.$store.commit("add_mistake");
            this.$refs.answers.children[i].className += " invalid";
          } else if (this.question.answers[i].valid === true) {
            if (i === this.picked) {
              // VALID ANSWER
              this.$store.commit("add_xp");
            }
            this.$refs.answers.children[i].className += " valid";
          }
        }
      }
    },
    nextQuestion: function() {
      this.showingAnswer = false;
      this.$store.commit("next_question");
      this.picked = -1;
      this.$refs.answers.children.forEach(child => {
        child.className = child.className
          .replace("invalid", "")
          .replace("valid", "");
      });
    },
    endQuizz: function() {
      this.$store.commit("end_quizz");
    }
  },
  mounted() {
    this.$store.subscribe(mutation => {
      if (mutation.type == "end_quizz") {
        this.$router.push("/home");
      }
    });
  },
  components: { Button, Radio, QuestionTitle }
};
</script>

<style src="./Question.css"></style>
<style src="./Question.responsive.css"></style>
