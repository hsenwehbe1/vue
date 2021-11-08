<template>
  <div class="flex grey-border justify-content-space-around">
    <div>{{ name }}</div>
    <div>{{ description }}</div>
    <div>{{ startAt }}</div>
    <div>{{ endsAt }}</div>
    <div class="flex center">
      <button :style="{ display: hasDelete }" @click="click"  >Delete</button>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "Row",
  props: {
    id:Number,
    name: String,
    description: String,
    startAt: String,
    endsAt: String,
    hasDelete: {
      type: String,
      default: "block",
    },
  },methods: {
     click () {
       this.$emit("delete");
     }
  }
};
</script>
<style scoped>
.flex {
  display: flex;
}
.grey-border {
  border: 1px solid grey;
}
.justify-content-space-around {
  justify-content: space-around;
}
.center{
  justify-content: center;
}
.flex > div:first-child {
  width: 30%;
}
.flex > div:last-child {
  width: 30%;
}
.flex > div {
  width: 20%;
  text-align: center;
}
.flex > div:not(:first-child) {
  border-left: 1px solid grey;
}
</style>