<template>
  <div id="todo">
    <Table />
  </div>
</template>
 
<script>
import Table from "./Table.vue";
export default {
  name: "Todo",
  components: {
    Table
  },
};
</script>