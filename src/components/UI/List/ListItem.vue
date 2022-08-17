<template>
    <li class="list-item" :class="{ 'list-item--header': isHeader }" @click="$emit('click')">
        <span class="list-item__data">
			<slot name="data"></slot>
		</span>
		<span class="list-item__actions">
			<slot name="actions"></slot>
		</span>
    </li>
</template>

<script>
export default {
    props: [ 'isHeader' ]
}
</script>

<style lang="scss">
.list-item {
	background-color: $color-secondary-dark;
	color: $color-white;
	padding: 1rem;
	font-size: 2rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;

    &:not(:last-child) {
        border-bottom: 1px solid currentColor;
    }

	&:hover {
		background-color: lighten($color-secondary-dark, 20%);
	}

	&__data {
		font-weight: 400;
		width: 100%;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
	}

	&__actions {
		color: $color-secondary-light;
		display: flex;
		justify-content: space-evenly;
		align-items: stretch;

		&__icon {
			width: 2vw;
		}
	}

	&:nth-child(even) {
		background-color: darken($color-secondary-dark, 10%);
		color: $color-white;

		&:hover {
			background-color: lighten($color-secondary-dark, 20%);
		}
	}

	&--checked {
		background-color: green;
		color: $color-white;

		&:hover {
			background-color: lighten(green, 10%);
		}
	}

	&--checked:nth-child(even) {
		background-color: darken(green, 10%);

		&:hover {
			background-color: lighten(green, 10%);
		}
	}

	&--header {
		background-color: darken($color-primary-dark, 5%);
		color: $color-white;
		cursor: default;

		&:hover {
			background-color: darken($color-primary-dark, 5%);
		}
	}

	
	&--header &__actions {
		visibility: hidden;
	}
	

	&--header &__data {
		font-weight: 900;
	}
}
</style>