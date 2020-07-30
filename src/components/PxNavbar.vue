<template>
  <v-container>
    <v-app-bar color="white">
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <router-link style="text-decoration:none;" to="/">
        <v-toolbar-title class="title">Todo list Mevn</v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <v-btn to="/login" class="item-menu" text>Signin</v-btn>
      <v-btn to="/signup" class="item-menu" text>Signup</v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav shaped>
        <v-list-item-group color="#d2691e">
          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item to="/tasks">
            <v-list-item-icon>
              <v-icon>mdi-image-edit-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Tasks</v-list-item-title>
          </v-list-item>
          <v-list-item to="/about">
            <v-list-item-icon>
              <v-icon>mdi-information</v-icon>
            </v-list-item-icon>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>
          <v-list-item v-if="!signedUser" to="/login">
            <v-list-item-icon>
              <v-icon>mdi-login</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item>
          <v-list-item v-else @click="btnLogout">
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "navbar",
  data() {
    return {
      drawer: false,
    };
  },
  methods: {
    btnLogout() {
      this.logout();
      this.$router.push({ name: "home" });
    },
    ...mapActions(["verifyToken", "logout"]),
  },
  created() {
    this.verifyToken();
  },
  computed: {
    ...mapState({ signedUser: (state) => state.profile.signedUser }),
  },
};
</script>
<style lang="scss" scoped>
.title {
  color: #d2691e !important;
}
div.v-toolbar__content {
  display: flex !important;
  flex-wrap: wrap !important;
}
</style>