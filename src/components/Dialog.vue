<template lang="pug">
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
			
		}
	}
}

</script>
