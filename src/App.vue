<template>
  <v-app>
      <navbar/>
      <router-view/>
  </v-app>
</template>

<script>
import Navbar from "@/components/PxNavbar";
export default {
  name: "App",

  components: {
    Navbar,
  },

  data: () => ({
    //
  }),
};
</script>
