<template>
  <v-container>
    <v-row align="center" align-content="center" justify="center">
      <v-col cols="7" md="5">
        <v-card class="pa-10 mx-auto text-center col-6 col-md-4">
          <h2 class="mb-3 title">Create a new task now! 📝</h2>
          <p class="subtitle">Start to create tasks and manage your time</p>
          <v-text-field v-model="title" label="Title" required outlined dense></v-text-field>
          <v-textarea outlined v-model="description" name="input-7-4" label="Description"></v-textarea>
          <v-btn @click="create" color="#d2691e" dark tile>Create</v-btn>

          <p v-show="created" class="alert">Tasks have been created</p>
        </v-card>
      </v-col>
      <v-col cols="12" md="7" class="d-flex justify-space-evenly flex-wrap justify-center">
        <task v-for="(task, i) in tasks" :key="i" :task="task" :number="i+1"></task>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapActions, mapState } from "vuex";
import Task from "@/components/PxTaskCard";
export default {
  data() {
    return {
      title: "",
      description: "",
    };
  },
  components: {
    Task,
  },
  methods: {
    create() {
      this.createTask({
        title: this.title,
        description: this.description,
      });

      (this.title = ""), (this.description = "");
      this.getTasks()
    },
    ...mapActions(["createTask", "getTasks"]),
  },
  computed: {
    ...mapState({
      created: (state) => state.tasks.created,
      tasks: (state) => state.tasks.tasks,
    }),
  },
  created() {
    this.getTasks();
  },
};
</script>
<style lang="scss" scoped>
.alert {
  margin-top: 10px;
  color: turquoise;
}
</style>