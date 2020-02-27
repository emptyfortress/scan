<template lang="pug">
v-app
	.cont
		img(src="./assets/logo.svg").logo
		h2(@click="scan = true") Файловый контрол со сканированием
		.myrow
			v-flex(xs3).menu
				ul
					li(v-for="item in pages" )
						a(:class="item.active ? 'active' : ''" @click="handlePage(item)") {{ item.text }}
			v-flex(xs8)
				Files1(v-if="page === 1")
				//- //- Files
				Files2(v-if="page === 2")
				Files3(v-if="page === 3")
				Files4(v-if="page === 4")
		//- Dialog(scan="scan")
</template>

<script>
import Files from '@/components/Files'
import Files1 from '@/components/Files1'
import Files2 from '@/components/Files2'
import Files3 from '@/components/Files3'
import Files4 from '@/components/Files4'
// import Dialog from '@/components/Dialog'

export default {
  name: 'App',

  components: {
    Files,
    Files1,
    Files2,
    Files3,
    Files4,
		// Dialog
  },
	methods: {
		handlePage(e) {
			this.pages.map( (item) => item.active = false)
			let a = this.pages.filter( (item) => item.text === e.text)
			a[0].active = true
			this.page = a[0].id
		}
		
	},
  data: () => ({
		page: 1,
		pages: [
			{ id: 1, active: true, text: 'Тип 2. Filelist просмотр' },
			{ id: 2, active: false, text: 'Тип 3. FilePicker создание' },
			{ id: 3, active: false, text: 'Тип 4. FilePicker просмотр' },
			{ id: 4, active: false, text: 'Тип 5. Ссылки просмотр' },
		]
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
	margin-bottom: 4rem;
	margin-top: 1rem;
}
.myrow {
	display: flex;
	justify-content: space-between;
}
.gr {
	background: #ccc;
}
.menu {
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	a {
		display: inline-block;
		width: 100%;
		padding: .5rem;
		&:hover {
			background: #fff;
		}
		&.active {
			background: #2196F3;
			color: #fff;
		}
	}
}
</style>
