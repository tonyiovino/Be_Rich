<template>
  <app-page>
    <template v-slot:header>
      <h1 class="heading-primary">
        car and garage
      </h1>
    </template>
    <div class="car_garage">
      <app-upgrades>
      
        <template v-slot:type-name>
          <h2 class="heading-secondary">
            auto e garage
          </h2>
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
  </app-page>
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
      let currentMoney = store.getters.getMoney.available
      if (currentMoney >= car.price){ // da aggiungere quando ci saranno i garage: && car.available < capienza_garage
        currentMoney -= car.price
        store.dispatch('updateMoneySpent', {
          spent: car.price,
          available: Number(currentMoney.toPrecision(2))
        })

        car.available += 1
        car.price += Number((car.gain_price).toPrecision(2)) //to precision, restituisce una stringa, quindi uso Number()
        car.gain_price *= 3.25
        store.dispatch('updateCar', {
          data: car,
          id: id
        });

      } else {
        alert('No enough money')
      }
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