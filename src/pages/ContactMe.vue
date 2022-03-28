<template>
  <div>
    <q-intersection transition="scale">
      <h5 class="text-bold text-center">Vous voulez me contacter ?</h5>
      <q-form class="q-mb-lg" @submit="submit">
        <div :class="utils.screen.lt.md ? '' : 'row justify-center'">
          <div class="col-md-5 q-mb-md">
            <q-input
              required
              type="text"
              label="Entrez votre prénom...*"
              v-model="contact.prenom"
            />
          </div>
        </div>
        <div :class="utils.screen.lt.md ? '' : 'row justify-center'">
          <div class="col-md-5 q-mb-md">
            <q-input
              required
              type="text"
              label="Entrez votre nom...*"
              v-model="contact.nom"
            />
          </div>
        </div>
        <div :class="utils.screen.lt.md ? '' : 'row justify-center'">
          <div class="col-md-5 q-mb-md">
            <q-input
              type="text"
              label="Entrez le nom de votre entreprise..."
              v-model="contact.entreprise"
            />
          </div>
        </div>
        <div :class="utils.screen.lt.md ? '' : 'row justify-center'">
          <div class="col-md-5 q-mb-md">
            <q-input
              required
              type="email"
              label="Entrez votre addresse email...*"
              v-model="contact.mail"
            />
          </div>
        </div>
        <div :class="utils.screen.lt.md ? '' : 'row justify-center'">
          <div class="col-md-5 q-mb-md">
            <q-input
              required
              type="textarea"
              label="Entre votre message...*"
              v-model="contact.message"
            />
          </div>
        </div>
        <div class="row justify-center">
          <q-btn
            icon-right="send"
            color="accent"
            :loading="loading"
            label="Envoyer le message"
            type="submit"
          />
        </div>
      </q-form>
    </q-intersection>
  </div>
</template>
<script>
import { useQuasar } from "quasar";
export default {
  data() {
    return {
      loading: false,
      utils: useQuasar(),
      contact: {
        nom: "",
        prenom: "",
        entreprise: "",
        message: "",
        mail: "",
      },
    };
  },
  methods: {
    submit() {
      this.loading = true;
      this.utils.notify({
        message: "Le service d'envoie est actuellement indisponible...",
        color: "negative",
      });
      this.loading = false;
    },
  },
};
</script>
