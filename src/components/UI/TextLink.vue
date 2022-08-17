<template>
	<router-link class="text-link" :class="className" :to="path">
		<slot></slot>
	</router-link>
</template>

<script>
export default {
	props: [ 'path', 'className' ]
}
</script>

<style lang="scss">
.text-link {
	display: inline-block;
	font-size: 3rem;
	color: $color-black;
	text-decoration: none;

	&--icon {
		&::after {
			content: '';
			display: block;
			margin: auto;
			height: .2rem;
			width: 0rem;
			background-image: linear-gradient(to right, rgba($color-primary, 0.8), rgba($color-secondary, 0.8));
			transition: all 0.15s linear;
		}
	
		&:hover::after {
			width: 100%;
		}
	}
}
</style>