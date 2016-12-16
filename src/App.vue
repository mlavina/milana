<template>
  <div id="app">
    <img width="200" height="200" src="./assets/questionMark.png">
    <hello></hello>
    <router-link to="/question/0">Start Quiz</router-link>
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Hello from './components/Hello';
import Question from './components/Question';

export default {
  name: 'app',
  components: {
    Hello,
    Question,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.slide-fade-enter-active {
  transition: all 3s ease;
}
.slide-fade-enter, .slide-fade-leave-active {
  transform: translateX(10px);
  opacity: 0;
}
</style>
