<template>
  <transition name="fade">
    <div class="quizz">
      <QuestionModule :if="currentQuestion" :question="currentQuestion" class="main-module" />
      <div class="progress">
        <Progress
          :value="$store.getters.currentLevelCompletion"
          :bgColor="'#3498db00'"
          :borderColor="'#2980b9'"
        >Level {{ currentLevelToText }}</Progress>
      </div>
      <Firework ref="fireworkstation" />
    </div>
  </transition>
</template>

<script>
import questions from "@/assets/questions";
import QuestionModule from "@/components/Question.vue";
import Progress from "@/components/Progress.vue";
import Firework from "@/components/Firework.vue";
import { e_levels } from "@/enums/levels.enum";

export default {
  name: "Quizz",
  data: function() {
    return {
      questions: JSON.parse(JSON.stringify(questions)),
      currentQuestion: null
    };
  },
  computed: {
    currentLevelToText: function() {
      return Object.keys(e_levels).find(
        k => e_levels[k] === this.$store.getters.questionLevel
      );
    }
  },
  methods: {
    getNewQuestion() {
      if (
        this.$store.getters.questionLevel.toString() in
        Object.keys(this.questions)
      ) {
        let appropriate_questions = this.questions[
          this.$store.getters.questionLevel.toString()
        ];
        if (appropriate_questions.length <= 0) {
          this.questions = JSON.parse(JSON.stringify(questions));
          appropriate_questions = this.questions[
            this.$store.getters.questionLevel.toString()
          ];
        }
        let questionId = Math.floor(
          Math.random() * appropriate_questions.length
        );
        let question = appropriate_questions.splice(questionId, 1)[0];
        for (let i = 0; i < question.answers.length; i++) {
          let new_id = Math.floor(Math.random() * question.answers.length);
          let tmp = question.answers[i];
          question.answers[i] = question.answers[new_id];
          question.answers[new_id] = tmp;
        }
        return question;
      }
      return null;
    }
  },
  beforeMount() {
    this.currentQuestion = this.getNewQuestion();
  },
  mounted() {
    this.$store.subscribe(mutation => {
      if (mutation.type === "next_level") {
        this.$refs.fireworkstation.fire();
      } else if (mutation.type === "next_question") {
        this.currentQuestion = this.getNewQuestion();
      }
    });
  },
  components: { QuestionModule, Progress, Firework }
};
</script>

<style>
:root {
  --bg-color: #3498db;
}
.progress {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 30px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
