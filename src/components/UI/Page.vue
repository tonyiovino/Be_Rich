<template>
	<div class="page" :class="className">
		<header class="page__header">
			<slot name="header"></slot>
		</header>
		<section class="page__actions">
			<slot name="actions"></slot>
		</section>
		<main class="page__main">
			<slot></slot>
		</main>
	</div>
</template>

<script>
export default {
	props: [ 'className' ]
}
</script>

<style lang="scss">
.page {
	min-height: 100vh;

	&__header {
		width: 50vw;
		margin: 0 auto;
		animation: moveInRight 1s ease-out;
	}

	&__actions {
		width: 60%;
		margin: 0 auto;
		margin-bottom: 2rem;
		background-color: rgba($color-primary-light, .2);
	}

	&__main {
		width: 60%;
		margin: 0 auto;
	}
}
</style>