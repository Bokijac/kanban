<template>
  <div id="wrapper">
    <Column v-for="column in columns.data" :key="columns.id" :column="column" />
    <div> Add column + </div>
  </div>
</template>

<script>
import { getColumns } from '../services/columnService.js';
import Column from './components/Column.vue'

export default {
    name: "app",
    components: { 
      Column 
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
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}


// new style

</style>
