<template>
  <EvalApp titleEval="Agence immobilière du pays de Gex" />
</template>

<script>
import EvalApp from './components/EvalApp/EvalApp.vue';

export default {
  name: 'App',
  components: {
    EvalApp
  }
}
</script>

<style src="./style.css">
* {
  padding: 0;
  margin: 0;
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  scroll-behavior: smooth;
  user-select: none;
}
</style>
