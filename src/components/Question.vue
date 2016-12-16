<template>
  <div >
    <aside class='ribbon' @click="showQuestion = true" >{{ question }} </aside>
    <modal v-show="showQuestion" @close="modalClosed()" class="question-text">
      <h2 slot="header">{{ title }}</h2>
      <iframe slot="body" width="560" height="315" :src="url" frameborder="0" allowfullscreen></iframe>
    </modal>
    <div v-show="showAnswers">
      <div v-if="imgOptions" class="imageOptions">
        <figure v-for="(imgOption, index) in imgOptions">
          <img :src="imgOption" height="200" width="100" class="imageOption" />
          <figcaption>{{ index + 1 }}</figcaption>
        </figure>
      </div>
      <div :key="questionNum" v-for="option in options" @click="nextQuestion()" class="option">
        {{ option }}
      </div>
    </div>
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
        question: 'Start Quiz',
        options: questions[this.$route.params.num].options,
        answer: questions[this.$route.params.num].answer,
        title: questions[this.$route.params.num].title,
        imgOptions: questions[this.$route.params.num].imgOptions,
        showQuestion: false,
        showAnswers: false,
      };
    },
    watch: {
      $route(to) {
        this.url = questions[to.params.num].url;
        this.question = `Question ${questions[this.$route.params.num].questionNum}`;
        this.options = questions[to.params.num].options;
        this.answer = questions[to.params.num].answer;
        this.title = questions[to.params.num].title;
        this.imgOptions = questions[to.params.num].imgOptions;
        this.showQuestion = false;
        this.showAnswers = false;
      },
    },
    components: {
      Modal,
    },
    methods: {
      nextQuestion() {
        const nextQuestionNum = parseInt(this.$route.params.num, 10) + 1;
        this.$router.push({ path: `${nextQuestionNum}` });
      },
      modalClosed() {
        this.question = this.question = `Question ${questions[this.$route.params.num].questionNum}`;
        this.showQuestion = false;
        this.showAnswers = true;
      },
    },
  };
</script>
<style>
@import url(http://fonts.googleapis.com/css?family=Open+Sans);
body{
  font-family: Open Sans, sans-serif;
}

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
  font-family: Open Sans, sans-serif;
}

.option:hover{
    border:#FC0 solid 2px;
    color:#FC0;
}
.modal-default-button {
  font-family: Open Sans, sans-serif;
  color: #ffffff;
  font-size: 20px;
  background: #3498db;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
  width:100%
}

.modal-default-button:hover {
    border:#FC0 solid 2px;
    color:#FC0;
}
h1, h2 {
  font-weight: normal;
}

aside {
  margin-bottom: 20px 0;
  margin-left: auto;
  margin-right: auto;
  line-height: 38px;
  position: relative;
  cursor: pointer;
  user-select: none;
  width: 80%;
  font-family: Open Sans, sans-serif;
  font-size:24px
}
aside:hover {
  top: -1px;
}
aside:active {
  top: 1px;
}
aside.ribbon {
  background-color: #7DE3C8;
}
aside.ribbon:before, aside.ribbon:after {
  top: 5px;
  z-index: -10;
}
aside.ribbon:before {
  border-color: #53dab6 #53dab6 #53dab6 transparent;
  left: -25px;
  border-width: 17px;
}
aside.ribbon:after {
  border-color: #53dab6 transparent #53dab6 #53dab6;
  right: -25px;
  border-width: 17px;
}

aside:before, aside:after {
  content: '';
  position: absolute;
  height: 0;
  width: 0;
  border-style: solid;
  border-width: 0;
}

.imageOptions{
  display: flex;
  justify-content: center;
}

.imageOption{
  margin: 10px 25px 10px 25px;
}
</style>
