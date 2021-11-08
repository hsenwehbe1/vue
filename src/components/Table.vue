<template>
  <div id="todo">
    <button @click="addRow">Add Row</button>
    <Header />
    <div v-for="row in rows" :key="row.id">
      <Row
        :id="row.id"
        :name="row.name + ' ' + row.id"
        :description="row.description"
        :start-at="row.startAt"
        :ends-at="row.endsAt"
        @delete="deleteRow(row.id)"
      />
    </div>

    <AlertMessage />
  </div>
</template>
 
<script>
import Row from "./Row.vue";
import Header from "./Header.vue";
import AlertMessage from "./AlertMessage.vue";
import store from "../store/index";
export default {
  name: "Table",
  components: {
    Row,
    Header,
    AlertMessage,
  },
  data() {
    return {
      rows: [
        {
          id: 1,
          name: "learn vue",
          description: "go through vue tutorial on internet",
          startAt: "20-11-2021",
          endsAt: "25-11-2021",
          action: null,
        },
        {
          id: 2,
          name: "learn vue",
          description: "go through vue tutorial on internet",
          startAt: "20-11-2021",
          endsAt: "25-11-2021",
        },
        {
          id: 3,
          name: "learn vue",
          description: "go through vue tutorial on internet",
          startAt: "20-11-2021",
          endsAt: "25-11-2021",
        },
        {
          id: 4,
          name: "learn vue",
          description: "go through vue tutorial on internet",
          startAt: "20-11-2021",
          endsAt: "25-11-2021",
        },
      ],
    };
  },
  methods: {
    deleteRow(id) {
      console.log(id);
      var idInt = parseInt(id);
      if (idInt < 5) {
        store.dispatch("alert/error", {
          code: 500,
          reason: "smaller than 5",
        });
      } else {
        this.rows = this.rows.filter((row) => row.id != id);
      }
    },
    addRow() {
      var rowsSize = Object.entries(this.rows).length;
      this.rows = [
        ...this.rows,
        {
          id: rowsSize + 1,
          name: "learn vue",
          description: "go through vue tutorial on internet",
          startAt: "20-11-2021",
          endsAt: "25-11-2021",
        },
      ];
      store.dispatch("alert/success", {
        code: 200,
        reason: null,
      });
    },
  },
};
</script>