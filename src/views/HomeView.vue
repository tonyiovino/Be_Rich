<template>
  <app-page>
    <template v-slot:header>
      <h1 class="heading-primary">
        Be Rich
      </h1>
    </template>

    <template v-slot:actions>
      <button @click="addMoney">
        +1
      </button>
    </template>
  
    <div class="home">
      <h2 class="heading-secondary">Soldi: {{ money.available }}</h2>
      <h2 class="heading-secondary">Soldi Spesi: {{ money.spent }}</h2>
    </div>

  </app-page>
</template>

<script>
  import { useStore } from 'vuex';
  import { computed } from '@vue/reactivity';
  import { onMounted } from 'vue';

  export default {
    setup(){
      const store = useStore();

      const money = computed(() => store.getters.getMoney)

      const addMoney = () => {
        store.dispatch('updateMoneyAvailable', 1);
      }

      // const repeat = () => {

      // }

      // onMounted(()=>{
      //   setInterval(repeat, 1000)
      // })

      return {
        money,
        addMoney,
        // repeat
      }

    },
  }

</script>