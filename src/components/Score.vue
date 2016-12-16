<template>
  <div>
    <h1 class='msg'>{{ msg }} </h1>
    <h1 class='score'>{{ amount }} of {{ total }} </h1>
    <aside class='ribbon' @click="tryAgain()">Would you like to try again?</aside>
  </div>
</template>
<style>
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
</style>
<script>
  export default{
    data() {
      return {
        msg: 'You Scored',
        amount: this.$route.query.amount,
        total: this.$route.query.total,
      };
    },
    components: {
    },
    methods: {
      tryAgain() {
        this.$router.push({ path: '../' });
      },
    },
  };
</script>

