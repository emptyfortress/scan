<template lang="pug">
.files
	h2 Сканирование и файловый контрол
	.center
		.zag Основные файлы
		.plus
			v-tooltip(top)
				template(v-slot:activator="{on}")
					i.icon-folder-o(v-on="on")
				span Файл из файловой системы
			v-tooltip(top)
				template(v-slot:activator="{on}")
					i.icon-scanner(v-on="on")
				span Сканировать документ
</template>

<script>

export default {
	data () {
		return {
			
		}
	}
}

</script>

<style scoped lang="scss">
h2 {
	font-weight: 300;
	text-align: center;
}
.center {
	width: 800px;
	margin: 0 auto;
	background: #eee;
	display: flex;
	padding: .2rem .5rem;
}
.plus i { 
	margin: 0 .3rem;
	cursor: pointer;
}
.zag {
	flex-grow: 1;
}


</style>
