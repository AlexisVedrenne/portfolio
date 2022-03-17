<template>
  <div class="container q-t-sm">
    <h5 class="text-center">Entrer vos informations de connexion</h5>
    <div class="row justify-center">
      <div class="col-5">
        <q-input color="primary" v-model="infos.email" label="Adresse email">
          <template v-slot:prepend>
            <q-icon name="manage_accounts" />
          </template>
        </q-input>
      </div>
    </div>
    <div class="row justify-center">
      <div class="col-5">
        <q-input
          type="password"
          color="secondary"
          v-model="infos.password"
          label="Mot de passe"
        >
          <template v-slot:prepend>
            <q-icon name="password" />
          </template>
        </q-input>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      infos: {
        email: null,
        password: null,
      },
    };
  },
};
</script>
