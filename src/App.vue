<template lang="pug">
#app
	img(src="./assets/logo.svg").logo
	Files

</template>

<script>
import Files from './components/Files.vue'

export default {
  name: 'app',
  components: {
		Files
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
.logo {
	width: 200px;
}
</style>
