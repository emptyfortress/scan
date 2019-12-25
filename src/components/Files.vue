<template lang="pug">
div
	h3 Тип 2. Filelist разметка просмотр
	.files
		.center
			.zag Основные файлы
			.plus.rel
				.sp(@mouseover="submenu = true" @mouseleave="submenu = false")
					v-tooltip(top)
						template(v-slot:activator="{on}")
							i.icon-folder-o(v-on="on" @click="submenu = !submenu")
							transition(name="slide-x-reverse-transition")
								.submenu(v-if="submenu")
									span(@click="dia(2)") +дополнительный
									span(@click="dia(1)") +основной
						span Из файловой системы
				.sp(@mouseover="submenu1 = true" @mouseleave="submenu1 = false")
					v-tooltip(top)
						template(v-slot:activator="{on}")
							i.icon-scanner(v-on="on" @click="submenu1 = !submenu1")
							transition(name="slide-x-reverse-transition")
								.submenu1(v-if="submenu1")
									span(@click="dia(4)") +дополнительный
									span(@click="dia(3)") +основной
						span Сканировать документ
				.sp
					v-tooltip(top)
						template(v-slot:activator="{on}")
							i.icon-sign(v-on="on")
						span Подписать
		.tab
			p Файлы отсутствуют
	v-dialog(v-model="dialog" width="500")
		v-card
			v-card-title(v-if="main") Добавить основной файл
			v-card-title(v-if="sec") Добавить дополнительный файл
			v-card-title(v-if="tre") Сканировать основной файл
			v-card-title(v-if="qua") Сканировать дополнительный файл
			v-card-actions
				v-btn(text color="blue" @click="close") Закрыть
				v-btn(text color="blue" @click="close") OK
</template>

<script>

export default {
	data () {
		return {
			submenu: false,
			submenu1: false,
			dialog: false,
			main: false,
			sec: false,
			tre: false,
			qua: false,
		}
	},
	methods: {
		close () {
			this.dialog = false
		},
		dia (e) {
			this.dialog = !this.dialog
			this.main = false
			this.sec = false
			this.tre = false
			this.qua = false
			switch (e) {
				case 1:
					this.main = true
					break
				case 2:
					this.sec = true
					break
				case 3:
					this.tre = true
					break
				case 4:
					this.qua = true
					break
			}
		}
	}
}

</script>

<!-- <style scoped lang="scss"> -->
<style lang="scss">

.v-card {
	height: 300px;
	position: relative;
}
.v-card__actions {
	position: absolute;
	bottom: 1rem;
	right: 1rem;
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
