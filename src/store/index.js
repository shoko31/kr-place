import Vue from "vue";
import Vuex from "vuex";

import {
  e_levels
} from "../enums/levels.enum";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    currentQuestionId: 0,
    questionAnswered: 0,
    mistakes: 0,
    currentLevelCompletion: 0,
    questionLevel: e_levels.BABY,
    quizzEnded: false,
    safeNavToken: null
  },
  mutations: {
    add_xp: function (state) {
      state.currentLevelCompletion += 10;
      if (state.currentLevelCompletion >= 100) {
        this.commit("next_level");
      }
    },
    next_question: function (state) {
      state.questionAnswered++;
    },
    next_level: function (state) {
      state.currentLevelCompletion = 0;
      state.questionLevel++;
      if (state.questionLevel >= Object.keys(e_levels).length) {
        state.questionLevel--;
        this.commit("end_quizz");
      }
    },
    add_mistake: function (state) {
      state.mistakes += 1;
    },
    end_quizz: function (state) {
      state.quizzEnded = true;
    },
    restart_quizz: function (state) {
      state.quizzEnded = false;
      state.questionAnswered = 0;
      state.currentQuestionId = 0;
      state.questionLevel = e_levels.BABY;
      state.currentLevelCompletion = 0;
      state.mistakes = 0;
    },
    set_nav_token: function (state, token) {
      this.safeNavToken = token;
    },
    initialiseStore(state) {
      // Check if the ID exists
      if (localStorage.getItem("kr-place-store")) {
        // Replace the state object with the stored item
        this.replaceState(
          Object.assign(
            state,
            JSON.parse(localStorage.getItem("kr-place-store"))
          )
        );
        this.safeNavToken = null;
      }
    }
  },
  getters: {
    quizzEnded: state => state.quizzEnded,
    currentLevelCompletion: state => state.currentLevelCompletion,
    currentQuestionId: state => state.currentQuestionId,
    questionLevel: state => state.questionLevel,
    questionAnswered: state => state.questionAnswered,
    mistakes: state => state.mistakes,
    safeNavToken: state => state.safeNavToken
  },
  actions: {},
  modules: {}
});

store.subscribe((mutation, state) => {
  // Store the state object as a JSON string
  localStorage.setItem("kr-place-store", JSON.stringify(state));
});

export default store;