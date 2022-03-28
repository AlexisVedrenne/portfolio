<template>
  <q-form @submit="logIn" v-if="user">
    <div class="container q-t-sm">
      <h5 class="text-center">Entrer vos informations de connexion</h5>
      <div class="row justify-center">
        <div class="col-5 q-mb-sm">
          <q-input
            filled
            color="secondary"
            v-model="infos.email"
            label="Adresse email"
            lazy-rules
            :rules="[
              (val) =>
                (val && val.indexOf('@') && val.indexOf('.')) ||
                'Adresse email invalide !',
            ]"
          >
            <template v-slot:prepend>
              <q-icon name="manage_accounts" />
            </template>
          </q-input>
        </div>
      </div>
      <div class="row justify-center">
        <div class="col-5 q-mb-sm">
          <q-input
            type="password"
            color="secondary"
            v-model="infos.password"
            label="Mot de passe"
            lazy-rules
            filled
            :rules="[(val) => (val && val.length > 0) || 'Entrer votre mot de passe !']"
          >
            <template v-slot:prepend>
              <q-icon name="password" />
            </template>
          </q-input>
        </div>
      </div>
      <div class="row justify-center q-mt-sm">
        <q-btn
          :loading="loading"
          outline
          color="accent"
          label="Connexion"
          icon-right="login"
          type="submit"
        ></q-btn>
        <q-btn
          class="q-ml-sm"
          flat
          color="secondary"
          label="Retouner à l'accueil"
          icon="home"
          :to="{ name: 'home' }"
        ></q-btn>
      </div>
    </div>
  </q-form>
</template>

<script>
import { useQuasar } from "quasar";
export default {
  data() {
    return {
      infos: {
        email: null,
        password: null,
      },
      loading: false,
      $q: useQuasar(),
      user: true,
    };
  },

  methods: {
    async logIn() {
      this.loading = true;
      await this.$store.dispatch("singIn", { infos: this.infos });
      this.loading = false;
      let user = this.$store.getters.getCurrentUser;
      if (user) {
        this.$router.push({ name: "addSkill" });
      }
    },
  },
};
</script>
