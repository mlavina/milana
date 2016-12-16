<template>
  <div :key="questionNum">
    <button @click="showQuestion = true" > Question {{ questionNum }} </button>
    <modal v-if="showQuestion" @close="showQuestion = false" class="question-text">
      <div slot="header">{{ title }}</div>
      <iframe slot="body" width="560" height="315" :src="url" frameborder="0" allowfullscreen></iframe>
    </modal>
    <div v-for="option in options" @click="nextQuestion()" class="option">{{ option }}</div>
  </div>
</template>
<script>
  import questions from '../assets/questions';
  import Modal from './Modal';

  export default {
    name: 'question',
    data() {
      return {
        url: questions[this.$route.params.num].url,
        questionNum: questions[this.$route.params.num].questionNum,
        options: questions[this.$route.params.num].options,
        answer: questions[this.$route.params.num].answer,
        title: questions[this.$route.params.num].title,
        showQuestion: false,
      };
    },
    watch: {
      $route(to) {
        this.url = questions[to.params.num].url;
        this.questionNum = questions[to.params.num].questionNum;
        this.options = questions[to.params.num].options;
        this.answer = questions[to.params.num].answer;
        this.title = questions[to.params.num].title;
      },
    },
    components: {
      Modal,
    },
    methods: {
      nextQuestion() {
        const nextQuestionNum = parseInt(this.$route.params.num, 10) + 1;
        this.$router.replace({ path: `${nextQuestionNum}` });
      },
    },
  };
</script>
<style>
.option{
  width:60%;
  height:30px;
  margin-top:15px;
  margin-left: auto;
  margin-right: auto;
  font-size:18px;
  color:#FFFFFF;
  padding:2px;
  padding-left:10px;
  border: 2px solid white;
  cursor:pointer;
  background-color:#3399FF;
  border-radius: 25px;
  line-height: 150%;
  flex: 1 100%;
}

.option:hover{
    border:#FC0 solid 2px;
    color:#FC0;
}
</style>
