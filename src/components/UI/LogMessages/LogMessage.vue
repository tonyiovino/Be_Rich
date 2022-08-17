<template>
	<div class="log-message" @click="markRead">
		{{msg.id }}) {{ msg.msg }}
	</div>
</template>

<script>
export default {
	props: [ 'msg' ],

	methods: {
		markRead () {
			this.$emit('read', this.msg.id)
		}
	}
}
</script>

<style lang="scss">
.log-message {
	font-size: 2rem;
	color: $color-white;
	background-color: rgba($color-black, 0.4);
	border-radius: 12px;
	word-spacing: 1rem;
	padding: 1rem;
	animation: moveInRight 1s ease-out;
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;

	&:not(:last-child) {
		margin-bottom: 1rem;
	}
}
</style>