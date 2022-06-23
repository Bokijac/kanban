<template>
  <div class="column">
    <div class="column__header">
        <div>{{column.title}}</div>
        <div>DEL</div>
    </div>
    <div>
        <Card v-for="card in column.cards" :key="card.id" :card="card" />
    </div>
    <div>Add Card +</div>
 </div>
</template>

<script>

import Card from './Card.vue'

export default {
  name: 'Column',
  components: {
    Card
  },
  props: {
    column: {
      required: true,
      type: Object
    }
  },
}
</script>

<style lang="scss">
.column{
  border: 1px solid red;
//   height: 200px;
  flex: 1;
}

.column__header{
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    padding: 1em;
}
</style>