<template lang="pug">
div
	h3 Тип 3. FilePiker in Table разметка создание вариант 2
	.files
		br
		.center
			.zag Основные файлы
			.plus.rel
				.sp
					v-tooltip(top)
						template(v-slot:activator="{on}")
							i.icon-folder-o(v-on="on")
						span Загрузить из папки
				.sp
					v-tooltip(top)
						template(v-slot:activator="{on}")
							i.icon-scan(v-on="on")
						span Загрузить со сканера
				.sp
					v-tooltip(top)
						template(v-slot:activator="{on}")
							i.icon-plus(v-on="on" @click="addRow")
						span А здесь что?
	table
		tr(v-for="item in rows")
			td.rel
				v-btn(icon large @click="add3 = !add3").large
					i(:class="add3 ? 'rot' : ''").icon-plus
				transition(name="slide-x-transition")
					.iconsrow(v-if="add3")
						i.icon-folder-o(@click="dia(1)")
						i.icon-scan(@click="dia(2)")
			td.right column
			td.right column
			td.right
				v-btn(icon large @click="del").large
					i.icon-trash

	v-dialog(v-model="dialog" width="500")
		v-card
			v-card-title(v-if="main") Добавить файл из файловой системы
			v-card-title(v-if="sec") Сканировать документ
			v-card-actions
				v-btn(text color="blue" @click="close") Закрыть
				v-btn(text color="blue" @click="close") OK
</template>

<script>

export default {
	data () {
		return {
			rows: [
				{}
			],
			add3: false,
			dialog: false,
			main: false,
			sec: false,
		}
	},
	methods: {
		addRow () {
			let a = {}
			this.rows.push(a)
		},
		del () {
			this.rows = []
		},
		close () {
			this.dialog = false
			this.main = false
			this.sec = false
			this.add3 = false
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
			}
		}
		
	}
}

</script>

<style scoped lang="scss">

table {
	width: 800px;
	margin: 0 auto;
	td {
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
.iconsrow {
	position: absolute;
	left: 5rem;
	top: .8rem;
	i {
		margin-right: 1rem;
		font-size: 1.2rem;
		cursor: pointer;
	}
}
.rot {
	transform: rotate(45deg);
}
.icon-plus {
	transition: .3s ease all;
}


</style>
