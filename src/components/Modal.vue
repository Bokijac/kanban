<template>
  <modal
    :name="modalName"
    @before-open="beforeOpen"
    @before-close="beforeClose"
    :min-width="200"
    :min-height="200"
    :resizable="true"
  >
    <div class="modal">
      <div class="modal__header">
        <textarea class="modal__header__" v-model="title" placeholder="add multiple lines"></textarea>
        <textarea v-model="description" placeholder="add multiple lines"></textarea>
      </div>
    </div>
    <div @click="destroyCard(id)">
      DEL
    </div>
  </modal>
</template>
<script>

import { getCard, createCard, updateCard, destroyCard} from '../../services/cardService.js';
import { createColumn } from '../../services/columnService.js'

export default {
  name: 'Modal_Resizable',
  data() {
    return {
      title: '',
      description: '',
      columnId: ''
    }
  },
  props: {
    id: {
      required: false
    },
    parentColumnId: {
      required: false
    }
  },
  computed: {
    modalName(){
      if(!this.parentColumnId && !this.id){
        return 'column-add'
      }
      return this.parentColumnId ? `${this.parentColumnId}modal-add` : `${this.id}modal`
    }
  },
  methods: {
    beforeOpen (event) {
      if(this.parentColumnId){
        return
      }
      if(!this.id){
        return
      }
      getCard(this.id).then(res => {
        this.title = res.data.title
        this.description = res.data.description
        this.columnId = res.data.column_id
      });
    },
    beforeClose () {
      let cardId = this.id
      let params = {
        title: this.title,
        description: this.description,
        column_id: this.columnId || this.parentColumnId
      }

      if(!this.parentColumnId && !this.id){
        createColumn({title: this.title}).then(res => {
          this.$emit('closedModal')
        })
      }else if(this.parentColumnId){
        createCard(params).then(res => {
          this.$emit('closedModal')
        })
      }else{
        updateCard(cardId, params).then(res => {
          this.$emit('closedModal')
        })
      } 
    },
    destroyCard (){
      destroyCard(this.id).then(res => {
      })
    }
  }
}
</script>