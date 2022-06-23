<template>
  <div class="column">
    <div class="column__header">
        <div>{{column.title}}</div>
        <div>+</div>
    </div>
    <p>Desc</p>
 </div>
</template>

<script>


export default {
  name: 'Column',
  props: {
    column: {
      required: true,
      type: Object
    }
  },
  created(){
    console.log(this.column)
  }
}
</script>

<style lang="scss">
.column{
  border: 1px solid red;
  height: 200px;
  flex: 1;
}

.column__header{
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    padding: 1em;
}
</style>