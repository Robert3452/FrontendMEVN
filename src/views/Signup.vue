<template>
  <v-container>
    <v-row align="center">
      <v-card class="pa-10 mx-auto text-center col-6">
        <h2 class="mb-3 title">Register now ☕</h2>
        <p class="subtitle">Start to create tasks and manage your time</p>
        <v-text-field v-model="name" label="Names" required outlined dense></v-text-field>
        <v-text-field v-model="email" label="Email" required outlined dense></v-text-field>
        <v-text-field v-model="password" type="password" label="Password" required outlined dense></v-text-field>
        <v-btn @click="submit" color="#d2691e" dark tile>Submit</v-btn>
      </v-card>
    </v-row>
  </v-container>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async submit() {
      await this.signup({
        name: this.name,
        email: this.email,
        password: this.password,
      });
      if (this.signedUp) {
        this.$router.push({ name: "login" });
      } else {
        this.email = "";
        this.name = "";
        this.password = "";
      }
    },
    ...mapActions(["signup"]),
  },

  computed: {
    lowerMail() {
      return this.email.toLowerCase();
    },
    ...mapState({ signedUp: (state) => state.profile.signedUp }),
  },
};
</script>
<style lang="scss" scoped>
.title {
  font-size: 2em !important;
  color: #d2691e !important;
  margin-bottom: 25px !important;
}
.subtitle {
  color: #b90000 !important;
}
</style>
