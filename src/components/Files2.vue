<template lang="pug">
div
	.files
		br
		br
		.center
			.zag Основные файлы
			.plus.rel
				.sp
					v-tooltip(top)
						template(v-slot:activator="{on}")
							i.icon-sign(v-on="on")
						span Подписать
	table
		tr
			td
				v-btn(icon large).large
					i.icon-plus
			td.right column
			td.right column
			td.right
				v-btn(icon large).large
					i.icon-trash

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
table {
	width: 800px;
	margin: 0 auto;
	td {
		/* background: #eee; */
		height: 42px;
		padding: .3rem .7rem;
		&.right {
			text-align: right;
		}
	}
}
.large {
	i {
		font-size: 1.3rem;
		margin-left: -5px;
	}
}


</style>
