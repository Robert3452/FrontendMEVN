<template>
  <v-container>
    <v-row align="center">
      <v-card class="pa-10 mx-auto text-center col-6">
        <h2 class="mb-3 title">Login ☕</h2>
        <p class="subtitle">Enter your email and password</p>
        <v-text-field type="email" v-model="email" label="Email" required outlined dense></v-text-field>
        <v-text-field type="password" v-model="password" label="Password" required outlined dense></v-text-field>
        <v-btn color="#d2691e" @click="login({email:lowerEmail,password})" dark tile>Enter</v-btn>
        <p class="alert">{{alert}}</p>
      </v-card>
    </v-row>
  </v-container>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      email: "",
      password: "",
      alert: "",
    };
  },
  computed: {
    lowerEmail() {
      return this.email.toLowerCase();
    },
  },
  methods: {
    async login(fields) {
      console.log(fields);
      let res = await this.signin(fields);
      if (res) {
        await this.$router.push({ name: "home" });
      } else {
        this.alert = "This user doesn't exist";
      }
    },

    ...mapActions(["signin"]),
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
.alert {
  margin-top: 20px;
  color: tomato;
}
</style>
