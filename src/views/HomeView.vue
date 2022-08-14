<template>
  <div class="home">
    <button @click="addMoney">
      +1
    </button>
    <button @click="decreaseMoney">
      -1
    </button>
    <p>Soldi: {{ money.available }}</p>
  </div>
</template>

<script>
  import { useStore } from 'vuex';
  import { computed } from '@vue/reactivity';

  export default {
    setup(){
      const store = useStore();

      const money = computed(() => store.getters.getMoney)

      const addMoney = () => {
        store.dispatch('updateMoneyAvailable', 1);
      }
      const decreaseMoney = () => {
        store.dispatch('updateMoneyAvailable', -1);
      }

      return {
        money,
        addMoney,
        decreaseMoney
      }
    }
  }

</script>