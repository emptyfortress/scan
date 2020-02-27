<template lang="pug">
div
	h3 Тип 5. ссылки разметка просмотр
	.files
		br
		.center.rel
			.zag Ссылки
			.plus
				i(:class="add3 ? 'rot' : ''"  @click="add3 = !add3").icon-plus
				transition(name="slide-x-reverse-transition")
					.iconsrow(v-show="add3")
						.sp
							v-tooltip(top)
								template(v-slot:activator="{on}")
									i.icon-folder-o(v-on="on" @click="dia(5)")
								span Загрузить из папки
						.sp
							v-tooltip(top)
								template(v-slot:activator="{on}")
									i.icon-scan(v-on="on" @click="dia(5)")
								span Загрузить со сканера
						.sp
							v-tooltip(top)
								template(v-slot:activator="{on}")
									i.icon-absentfile(v-on="on" @click="dia(5)")
								span Прочее
						.sp
							v-tooltip(top)
								template(v-slot:activator="{on}")
									i.icon-absentfile(v-on="on" @click="dia(5)")
								span Прочее
		.tab
			p Ссылки отсутствуют
	v-dialog(v-model="dialog" width="500")
		v-card
			v-card-title(v-if="main") Добавить основной файл 
			v-card-title(v-if="sec") Добавить дополнительный файл 
			v-card-title(v-if="tre") Сканировать основной файл 
			v-card-title(v-if="qua") Сканировать дополнительный файл 
			v-card-title(v-if="link") Добавить ссылку
			v-card-actions
				v-btn(text color="blue" @click="close") Закрыть
				v-btn(text color="blue" @click="close") OK

</template>

<script>

export default {
	data () {
		return {
			add3: false,
			submenu: false,
			submenu1: false,
			dialog: false,
			main: false,
			sec: false,
			tre: false,
			qua: false,
			link: false,
		}
	},
	methods: {
		submenuToggle () {
			this.submenu = !this.submenu
			this.submenu1 = false
		},
		submenu1Toggle () {
			this.submenu1 = !this.submenu1
			this.submenu = false
		},
		close () {
			this.dialog = false
		},
		dia (e) {
			this.dialog = !this.dialog
			this.main = false
			this.sec = false
			this.tre = false
			this.qua = false
			this.link = false
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
				case 5:
					this.link = true
					break
			}
		}
	}
}

</script>

<style scoped lang="scss">

.iconsrow {
	position: absolute;
	right: 2rem;
	top: .1rem;
	i {
		margin-right: 1rem;
		font-size: 1.2rem;
		cursor: pointer;
	}
}
.rot {
	transform: rotate(45deg);
}
.rot {
	transform: rotate(45deg);
}
.icon-plus {
	transition: .3s ease all;
	display: inline-block;
	cursor: pointer;
}

</style>
