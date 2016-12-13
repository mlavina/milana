<template>
  <div>
    <button @click="showQuestion = true"> Question {{ questionNum }} </button>
    <modal v-if="showQuestion" @close="showQuestion = false" class="question-text">
      <iframe slot="body" width="560" height="315" :src="url" frameborder="0" allowfullscreen></iframe>
    </modal>
  </div>
</template>
<script>
  import questions from '../assets/questions';
  import Modal from './Modal';

  export default {
    name: 'question',
    data() {
      return {
        url: questions[1].url,
        questionNum: questions[1].questionNum,
        showQuestion: true,
      };
    },
    components: {
      Modal,
    },
  };
</script>
<style>

</style>
