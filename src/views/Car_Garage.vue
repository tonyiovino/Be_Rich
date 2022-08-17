<template>
  <div class="car_garage">
    <app-upgrades>
    
      <template v-slot:type-name>
        auto e garage
      </template>
    
      <template v-slot:type-item>
        <app-upgrade-item
          v-for="(car, id) in cars"
          :key="id"
          :id="id"
          :data="car"
          @buyItem="buyCar"
        ></app-upgrade-item>
      </template>
    
    </app-upgrades>
  </div>
</template>

<script>
import Upgrades from "@/components/Upgrades/Upgrades.vue"
import UpgradeItem from "@/components/Upgrades/UpgradeItem.vue"

import { useStore } from 'vuex'
import { computed } from '@vue/reactivity'

export default {
  components: {
    appUpgrades: Upgrades,
    appUpgradeItem: UpgradeItem
  },

  setup(){

    const store = useStore();

    const cars = computed(() => store.getters.getCars)

    const buyCar = (id) => {
      const car = store.getters.getCarById(id);
      car.available += 1
      store.dispatch('updateCar', {
        data: car,
        id: id
      });
    }

    return { 
      cars,
      buyCar
    }
  }
}
</script>

<style>

</style>