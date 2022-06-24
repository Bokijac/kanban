<template>
  <div class="card" @click="openModal(card.id)">
    <div>{{title}}</div>
    <Modal :id="card.id" @closedModal="closedModal()"  @destroyCard="destroyCard()"/>
  </div>
</template>

<script>
import Modal from './Modal.vue'

import { getCard } from '../../services/cardService.js';

export default {
  name: "Card",
  components: { Modal },
  data:{
    title:{
      required: true
    }
  },
  props: {
    card: {
      required: true,
      type: Object
    }
  },
  created(){
    this.title = this.card.title
  },
  methods: {
    openModal(id) {
      this.$modal.show(`${id}modal`)
    },
    closedModal(){
      getCard(this.card.id).then(res => {
        this.title = res.data.title;
        this.$forceUpdate();
      });
    },
    destroyColumn(id){
      let self = this
        destroyColumn(id).then((res) => {
          self.$emit('columnDestroy')
        })
    },
    destroyCard(id){
        this.$emit('destroyCard')
    },
  }
}
</script>

<style lang="scss">
.card{
  border: 1px solid green;
  height: 200px;
  flex: 1;
  cursor: pointer;
}
</style>