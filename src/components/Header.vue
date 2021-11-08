<template>
  <div class="flex grey-border center">
    <div>Name</div>
    <div>Description</div>
    <div>Starts At</div>
    <div>Ends At</div>
    <div></div>
  </div>
</template>
 
<script>
export default {
  name: "Header"
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