<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        style="z-index:2;"
        class="mt-12 pa-0 d-flex justify-center flex-column align-center"
      >
        <h1 class="text-sm-h1 text-h3 mb-1">Enjoy my App</h1>
        <h3 class="text-sm-h3 text-h6 mt-2">My Mevn App tasks</h3>
        <v-btn color="red" to="/signup" class="mt-md-6 mt-1" dark tile>Register now</v-btn>
      </v-col>
      <v-col cols="12">
        <v-img src="@/assets/header.webp"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
</style>