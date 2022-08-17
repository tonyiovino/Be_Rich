<template>
	<form class="form" @submit.prevent="$emit('submit')">
		<slot></slot>
	</form>
</template>

<style lang="scss">
.form {
	margin-bottom: 1rem;
	color: $color-white;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;

	&__row {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
	}

	&__row &__group {
		margin: 2rem;
	}

	&__group:not(:last-child) {
		text-align: left;
		margin-bottom: 2rem;
	}

	&__actions {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		flex-wrap: wrap;
	}

	&__input {
		font-size: 2rem;
		font-family: inherit;
		color: inherit;
		padding: 1.5rem 2rem;
		border-radius: 3px;
		background-color: rgba($color-primary-dark, .6);
		border: none;
		border-bottom: 5px solid transparent;
		width: 100%;
		display: block;

		&:focus {
			outline: none;
			box-shadow: 0 1rem 2rem rgba($color-black, .1);
			border-bottom: 5px solid $color-primary-dark;
		}

		&:focus:invalid {
			border-bottom: 5px solid orangered;
		}

		&::placeholder {
			color: $color-white;
		}
	}

	&__label {
		font-size: 2rem;
		font-weight: 700;
		margin-left: 2rem;
		margin-top: .7rem;
		display: block;
		transition: all .3s;
		color: $color-grey-light;
	}

	&__input:placeholder-shown + &__label {
		opacity: 0;
		visibility: hidden;
		transform: translateY(-4rem);
	}

	select {
		cursor: pointer;
		appearance: none;
		border: none;
		padding: 1rem;
		outline: 1px solid $color-primary-dark;
		width: 100%;
	}
}
</style>