<template>
  <div
    v-if="this.open"
    :style="{ backgroundColor: this.color}"
    class="flex column justify-content-space-around"
  >
    <div>{{ this.title }}</div>
    <div class="whileline"></div>
    <div>{{ this.reason }}</div>
  </div>
</template>
 
<script>
import { mapState } from "vuex";
export default {
  name: "Alert",
  computed: {
    ...mapState("alert", ["title", "code", "reason", "color", "open"]),
    isOpen() {
      return this.$store.state.alert.open;
    },
  },
  update() {
    console.log("this.open");
    console.log(this.open);
  },
  mounted() {
    console.log("here");
    console.log(this.$store.state.alert);
  },
};
</script>
<style scoped>
.flex {
  display: flex;
}
.whileline {
  width: 5%;
  border: 10.5 solid white;
}
.column {
  flex-direction: column;
}
.grey-border {
  border: 1px solid grey;
}
.justify-content-space-around {
  justify-content: space-around;
}
.center {
  justify-content: center;
}
</style>