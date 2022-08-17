<template>
	<div class="error" @click="markRead">
		{{error.id }} - {{ error.msg }}
	</div>
</template>

<script>
export default {
	props: [ 'error' ],

	methods: {
		markRead () {
			this.$emit('read', this.error.id)
		}
	}
}
</script>

<style lang="scss">
.error {
	margin-bottom: 2rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 2.6rem;
	color: $color-white;
	background-color: $color-secondary;
	padding: 1rem;
	border-radius: 3px;
}
</style>