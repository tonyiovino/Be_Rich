<template>
	<button class="btn" :class="className" @click="$emit('click')">
		<slot></slot>
	</button>
</template>

<script>
export default {
	props: [ 'className' ]
}
</script>

<style lang="scss">
.btn {
	background-color: $color-primary-dark;
	border: none;
	color: $color-white;
	font-size: 2rem;
	border-radius: 10rem;
	padding: 1rem 3rem;
	cursor: pointer;
	margin: 1rem;
	transform: translateY(-1px);
	transition: all .2s;

	&:hover {
		box-shadow: 0 .5rem 1rem rgba($color-black, .8);
		transform: translateY(-3px);
	}

	&:active {
		box-shadow: 0 .2rem .2rem rgba($color-black, .8);
		transform: translateY(-1px);
	}

	&--flat {
		background-color: transparent;
		margin-top: 0;
		margin-bottom: 0;
	}

	&--primary {
		background-color: $color-primary-dark;
	}

	&--secondary {
		background-color: $color-secondary;
	}
}
</style>