<template>
  <div class="land">
    <app-area
        v-for="(area, id) in areas"
        :key="id"
        :id="id"
        :data="area"
    ></app-area>
  </div>
</template>

<script>
import Area from "@/components/Areas/Area.vue"

import { useStore } from 'vuex'
import { computed } from '@vue/reactivity'

export default {

    components: { appArea: Area },

    props: { id_land: String },

    setup(props){
        const store = useStore();

        const areas = computed(() => store.getters.getAreas(props.id_land))

        return {
            areas,
        }
    }

}
</script>

<style lang="scss">
.land {
	display: grid;
    grid-gap: .3rem;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(3, 1fr);
    margin: 6rem
}

</style>