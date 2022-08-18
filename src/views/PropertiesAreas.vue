<template>
  <app-page>
    <template v-slot:header>
      <h1 class="heading-primary">
        properties and areas
      </h1>
    </template>
    <div class="properies_areas">
        <app-land
            v-for="(land, id) in lands"
            :key="id"
            :id_land="id"
        ></app-land>
    </div>
  </app-page>
</template>

<script>
import Land from "@/components/Areas/Land.vue"

import { useStore } from 'vuex'
import { computed } from '@vue/reactivity'

export default {
  components: {
    appLand: Land,
  },

  setup(){

    const store = useStore();

    const lands = computed(() => store.getters.getLands)

    return {
        lands
    }
  }
}
</script>

<style>
/* .properties_areas{
    display: flex;
    justify-content: center;
} */
</style>