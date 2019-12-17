<template lang="pug">
v-app
	img(src="./assets/logo.svg").logo
	v-content
		h2(@click="scan = true") Сканирование и файловый контрол
		Files
		Files1
	//- Dialog(scan="scan")
</template>

<script>
import Files from '@/components/Files'
import Files1 from '@/components/Files1'
// import Dialog from './components/Dialog'

export default {
  name: 'App',

  components: {
    Files,
    Files1,
		// Dialog
  },

  data: () => ({
		// scan: false
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
