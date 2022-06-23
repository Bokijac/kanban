<template>
  <div class="column">
    <div class="column__header">
        <div>{{column.title}}</div>
        <div @click="destroyColumn(column.id)">DEL</div>
    </div>
    <div>
        <Card v-for="card in column.cards" :key="card.id" :card="card" />
    </div>
    <Modal :parentColumnId='column.id' @closedModal="closedModal"/>
    <div @click="openModal(column.id)">Add Card +</div>
 </div>
</template>

<script>

import Card from './Card.vue'
import Modal from './Modal.vue'
import { destroyColumn } from '../../services/columnService.js'


export default {
  name: 'Column',
  components: {
    Card,
    Modal
  },
  props: {
    column: {
      required: true,
      type: Object
    }
  },
  methods: {
    openModal(id) {
      this.$modal.show(`${id}modal-add`)
    },
    closedModal(){
    },
    destroyColumn(id){
            this.$emit('columnDestroy')

        // destroyColumn(id).then(res => {
        // })
    }
  }
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