<template>
  <div class="column">
    <div class="column__header">
        <div>{{column.title}}</div>
        <div @click="destroyColumn(column.id)">DEL</div>
    </div>
    <draggable class="list-group" :list="column.cards" group="cards" @change="log">
        <Card v-for="card in column.cards" :key="card.id" :card="card"  @destroyCard="destroyCard()" @createdCard="createdCard()" />
    </draggable>
    <Modal :parentColumnId='column.id' @createdCard="createdCard()"/>
    <div @click="openModal(column.id)">Add Card +</div>
 </div>
</template>

<script>

import Card from './Card.vue'
import Modal from './Modal.vue'
import { destroyColumn } from '../../services/columnService.js'
import { moveCard } from '../../services/cardService.js'

import draggable from "vuedraggable";


export default {
  name: 'Column',
  components: {
    Card,
    Modal,
    draggable
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
    createdCard(){
      this.$emit('createdCard')
    },
    destroyCard(){
      this.$emit('destroyCard')
    },
    destroyColumn(id){
      let self = this
        destroyColumn(id).then((res) => {
          self.$emit('columnDestroy')
        })
    },
    log(evt) {
        if(evt.removed){
            return;
        }

        let params = {
            card_id: evt.moved ? evt.moved.element.id : evt.added.element.id,
            column_id: this.column.id,
            order: evt.moved ? evt.moved.newIndex : evt.added.newIndex
        }

        moveCard(params)
        
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