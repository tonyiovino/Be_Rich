<template>
	<div class="errors" v-if="errors.length > 0">
		<h1 class="heading-primary">Errore</h1>

		<app-error
			v-for="error in errors"
			:key="error.id"
			:error="error"
			@read="deleteError">
		</app-error>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import Error from './Error.vue'

export default {
	computed: {
		...mapGetters([
			'errors'
		])
	},

	methods: {
		...mapActions([
			'removeError'
		]),

		deleteError (errorId) {
			this.removeError(errorId)
		}
	},

	components: {
		appError: Error
	}
}
</script>

<style lang="scss">
.errors {
	position: absolute;
	left: 0;
	top: 7rem;
	width: 100vw;
	background-color: $color-secondary-dark;
	z-index: 1000;
	text-align: center;
	padding: 2rem 2rem 3rem;
}
</style>