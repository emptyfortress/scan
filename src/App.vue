<template lang="pug">
v-app
	img(src="./assets/logo.svg").logo
	v-content
		h2 Сканирование и файловый контрол
		Files
		Files1
</template>

<script>
import Files from './components/Files'
import Files1 from './components/Files1'

export default {
  name: 'App',

  components: {
    Files,
    Files1
  },

  data: () => ({
    //
  }),
}
</script>

<style scoped lang="scss">
.v-application {
	padding: 1rem; 
}
.logo {
	width: 200px;
}
h2 {
	font-weight: 300;
	text-align: center;
	margin-bottom: 1rem;

}
</style>
