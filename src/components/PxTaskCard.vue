<template>
  <v-card max-width="300" class="ma-2">
    <v-card-text>
      <div class>Task N° {{number}}</div>
      <p class="display-1 text--primary">{{task.title}}</p>
      <p>Created: {{task.created}}</p>
      <div class="text--primary">
        {{task.description}}
      </div>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  props: {
    task: {
      type: Object,
      default: () => {},
    },
    number: {
      type: Number,
      default: () => 0,
    },
  },
};
</script>
<style lang="scss" scoped>
</style>