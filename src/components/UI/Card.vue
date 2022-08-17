<template>
	<div class="card" :class="className" @click="$router.push(data.path)">
		<div class="card__header">
			<img :src="'/img/' + data.name + '.png'" class="img-default" alt="None">
			<img :src="'/img/icon-' + data.name + '.png'" class="img-hover"  alt="None">
		</div>
		<div class="card__body">
			<span class="card__body--title">{{ data.title }}</span>
			<span class="card__body--text" v-if="data.text">{{ data.text }}</span>
		</div>
	</div>
</template>

<script>
export default {
	props: [ 'data', 'className' ]
}
</script>

<style lang="scss">
.card {
	background: $color-primary;
	color: $color-white;
	margin: 0 2rem 2rem;
	border-radius: 2px;
	padding: 1rem;
	cursor: pointer;
	transition: all .2s;

	// animation: moveInLeft 1s ease-out;
	
	&:hover {
		color: $color-white;
		background-color: $color-secondary;

		box-shadow: 0 1rem 2rem rgba($color-black, .8);
		transform: translateY(-4px);

		.img-hover {
			display: inline-block;
		}
		.img-default {
			display: none;
		}
	}

	&:active {
		box-shadow: 0 .5rem 1rem rgba($color-black, .8);
		transform: translateY(-1px);
	}

	&__header {
		border-bottom: solid $color-white 1px;
		display: flex;
		justify-content: center;

		img {
			border-top-left-radius: 2px;
			border-top-right-radius: 2px;
			width: 25%;
			padding: 2rem;
		}
	}

	&__body {
		display: flex;
		flex-direction: column;
		
		&--title {
			font-size: 2.4rem;
			text-align: center;
		}
		
		&--text {
			font-size: 1.8rem;
			text-align: center;
		}
	}

.img-hover {
    display: none;
}
}
</style>