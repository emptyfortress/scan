<template lang="pug">
div
	h3 Тип 2. Filelist разметка просмотр
	.files
		br
		.center
			.zag Основные файлы
			.plus.rel
				.sp(@click="submenuToggle")
					v-tooltip(top)
						template(v-slot:activator="{on}")
							i.icon-folder-o(v-on="on")
							transition(name="slide-x-reverse-transition")
								.submenu(v-if="submenu")
									span(@click="dia(2)") +дополнительный
									span(@click="dia(1)") +основной
						span Загрузить из папки
				.sp(@click="submenu1Toggle")
					v-tooltip(top)
						template(v-slot:activator="{on}")
							i.icon-scan(v-on="on")
							transition(name="slide-x-reverse-transition")
								.submenu1(v-if="submenu1")
									span(@click="dia(4)") +дополнительный
									span(@click="dia(3)") +основной
						span Загрузить со сканера
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

<style scoped lang="scss">



</style>
