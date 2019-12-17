<template lang="pug">
.files
	br
	br
	.center
		.zag Основные файлы
		.plus.rel
			.sp(@click="submenu = !submenu")
				v-tooltip(top open-delay="700")
					template(v-slot:activator="{on}")
						i.icon-folder-o(v-on="on")
						transition(name="slide-x-reverse-transition")
							.submenu(v-if="submenu")
								span +дополнительный
								span +основной
					span Из файловой системы
			.sp(@click="submenu1 = !submenu1")
				v-tooltip(top open-delay="700")
					template(v-slot:activator="{on}")
						i.icon-scanner(v-on="on")
						transition(name="slide-x-reverse-transition")
							.submenu1(v-if="submenu1")
								span +основной
								span +дополнительный
					span Сканировать документ
			.sp
				v-tooltip(top open-delay="700")
					template(v-slot:activator="{on}")
						i.icon-sign(v-on="on")
					span Подписать
	.tab
		p Файлы отсутствуют
</template>

<script>

export default {
	data () {
		return {
			submenu: false,
			submenu1: false,
		}
	}
}

</script>

<style scoped lang="scss">
h2 {
	font-weight: 300;
	text-align: center;
	margin-bottom: 1rem;

}
.center {
	width: 800px;
	margin: 0 auto;
	background: #eee;
	display: flex;
	padding: .2rem .5rem;
}
.tab {
	width: 800px;
	margin: 0 auto;
	margin-top: .5rem;
	p {
		color: #666;
	}
}
.rel {
	position: relative;
}
.zag {
	flex-grow: 1;
	font-weight: bold;
}
.submenu, .submenu1 {
	cursor: pointer;
	position: absolute;
	top: 0;
	right: 1rem;
	color: blue;
	padding: 0 .5rem;
	span {
		cursor: pointer;
		margin-right: .7rem;
		&:hover {
			border-bottom: 1px dotted blue;
			color: lighten(blue, 20%);
		}
	}
}
.submenu1 {
	background: #eee;
	right:1.25rem;
}
.sp {
	position: relative;
	display: inline-block;
	cursor: pointer;
	margin-left: .7rem;
}


</style>
