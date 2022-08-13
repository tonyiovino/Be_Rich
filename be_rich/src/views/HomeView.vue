<template>
  <div class="home">
    <button @click="addMoney">
      +1
    </button>
    <p>{{ money }}</p>
  </div>
</template>

<script>
  import { useStore } from 'vuex';
  import { ref } from 'vue';
  import { computed } from '@vue/reactivity';

  export default {
    setup(){
      const store = useStore();

      const money = computed(() => {
        const systemState = store.getters.systemState;
        const _beRichData = systemState.get();
        return _beRichData.get('money');
      })

      const addMoney = () => {
        const newMoney = store.getters.money;
        store.dispatch('addMoney', newMoney);
      }

      return {
        money,
        addMoney
      }
    }
  }

</script>