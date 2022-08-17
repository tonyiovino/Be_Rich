<template>
  <div class="upgrade-item">
    <app-list-item>

      <template v-slot:data>
        {{data.name}}
        <span>
          Available: {{data.available}}
        </span>
      </template>
      
      <template v-slot:actions>
        <button @click="$emit('buyItem', id)">Upgrade {{ data.price }}</button>
      </template>
    
    </app-list-item>
  </div>
</template>

<script>

export default {

  props: { data: Object, id: String}

}
</script>