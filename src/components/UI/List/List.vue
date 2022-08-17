<template>
	<ul class="list">
		<slot></slot>
	</ul>
</template>

<script>
export default {
	props: [ 'className' ]
}
</script>

<style lang="scss">
.list {
	list-style-type: none;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: stretch;
}
</style>