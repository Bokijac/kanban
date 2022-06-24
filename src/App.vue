<template>
  <div>
    <div id="wrapper">
      <Column v-for="column in columns.data" :column="column" @columnDestroy="updateColumns()"  @destroyCard="updateColumns()" @createdCard="updateColumns()"/>
      <Modal @closedModal="closedModal"/>
      <div  @click="openModal()"> Add column + </div>
    </div>
  </div>
</template>

<script>
import { getColumns } from '../services/columnService.js';
import Column from './components/Column.vue'
import Modal from './components/Modal.vue'

export default {
    name: "app",
    components: {
      Column,
      Modal
    },
    data() {
      return {
          columns: [],
      };
    },
    created() {
      getColumns().then(res => {
          this.columns = res;
      });
    },
    methods: {
      openModal(id) {
        this.$modal.show('column-add')
      },
      closedModal(){
        getColumns().then(res => {
          this.columns = res;
          this.$forceUpdate();
        });
      },
      updateColumns(){
        getColumns().then(res => {
          this.columns = res;
          this.$forceUpdate();
        });
      }
    }
}
</script>

<style lang="scss">

#wrapper {
  display: flex;
  width: 100%;

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 2em;
}

</style>
