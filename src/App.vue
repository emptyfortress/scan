<template lang="pug">
v-app
	img(src="./assets/logo.svg").logo
	v-content
		Files
</template>

<script>
import Files from './components/Files'

export default {
  name: 'App',

  components: {
    Files
  },

  data: () => ({
    //
  }),
}
</script>

<style scoped lang="scss">
.logo {
	width: 200px;
}

</style>
