<template>
  <modal
    :name="id+'modal'"
    @before-open="beforeOpen"
    @before-close="beforeClose"
    :min-width="200"
    :min-height="200"
    :resizable="true"
  >
    <div class="modal">
      <div class="modal__header">
        <textarea v-model="title" placeholder="add multiple lines"></textarea>
        <textarea v-model="description" placeholder="add multiple lines"></textarea>
      </div>
    </div>
  </modal>
</template>
<script>

import { getCard, updateCard } from '../../services/cardService.js';

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
      required: true
    }
  },
  methods: {
    beforeOpen (event) {
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
        column_id: this.columnId
      }
      updateCard(cardId, params).then(res => {
        this.$emit('closedModal')
        // console.log(res)
      })
    }
  }
}
</script>