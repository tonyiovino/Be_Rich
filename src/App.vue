<template>
  <div id="app">
    <nav id="app__nav">
      <router-link to="/">Home</router-link>
    </nav>

    <main>
      <router-view/>
    </main>

    <footer id="app__footer">
      <router-link to="/car-garage">
        Car and Garage
      </router-link>
      <router-link to="/properties-areas">
        Properties and Areas
      </router-link>
    </footer>
  </div>
</template>

<style lang="scss">
*,
*::before,
*::after {
	margin: 0;
	padding: 0;

	box-sizing: inherit;
}

html {
	font-size: 62.5%;
}

body {
	box-sizing: border-box;
}

#app {
	min-height: 80vh;
	-webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
	background-color: $color-grey-light;
	background-image: linear-gradient(to bottom, rgba($color-primary-dark, 0.8), rgba($color-secondary-dark, 0.8));
	position: relative;
  color: $color-white;

	&__nav, &__footer{
		display: flex;
		flex-direction: row;
    justify-self: start;
		justify-content: space-evenly;
		padding: 1.4rem 2rem;
		background-color: $color-grey-light;
	}

	&__icon {
		width: 12vw;
	}
}
</style>
