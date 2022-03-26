<template>
  <div>
    <h5 class="text-bold text-center">Vous voulez me contacter ?</h5>
    <q-form>
      <div class="row justify-center">
        <div class="col-5 q-mb-md">
          <q-input required type="text" label="Entrez votre prénom...*" />
        </div>
      </div>
      <div class="row justify-center">
        <div class="col-5 q-mb-md">
          <q-input required type="text" label="Entrez votre nom...*" />
        </div>
      </div>
      <div class="row justify-center">
        <div class="col-5 q-mb-md">
          <q-input required type="text" label="Entrez le nom de votre entreprise..." />
        </div>
      </div>
      <div class="row justify-center">
        <div class="col-5 q-mb-md">
          <q-input required type="email" label="Entrez votre addresse email...*" />
        </div>
      </div>
      <div class="row justify-center">
        <div class="col-5 q-mb-md">
          <q-input required type="textarea" label="Entre votre message...*" />
        </div>
      </div>
      <div class="row justify-center">
        <q-btn
          icon-right="send"
          color="accent"
          :loading="loading"
          label="Envoyer le message"
        />
      </div>
    </q-form>
  </div>
</template>
<script>
import * as mailjet from "node-mailjet";
export default {
  data() {
    return {
      loading: false,
    };
  },
};
</script>
