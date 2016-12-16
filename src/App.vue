<template>
  <div id="app">
    <hello></hello>
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
  data() {
    return { startQuiz: true };
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

body{
  background-color: #e7e5e4;
}
</style>
