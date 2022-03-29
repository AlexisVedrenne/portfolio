<template>
  <div>
    <q-form @submit="submit">
      <main class="container">
        <h6 class="text-center">
          Nom de l'expérience professionnelle : {{ experience.titre }}
        </h6>
        <div class="row justify-center q-mb-md">
          <q-input
            required
            v-model="experience.titre"
            class="col-8"
            filled
            color="secondary"
            outlined
            label="Nom de l'experience"
          />
        </div>
        <div class="row justify-center q-mb-md">
          <q-input
            required
            v-model="experience.ville"
            class="col-8"
            filled
            color="secondary"
            outlined
            label="Ville de l'entreprise"
          />
        </div>
        <div class="row justify-center q-mb-md">
          <q-input
            required
            v-model="experience.desEntreprise"
            class="col-8"
            filled
            color="secondary"
            outlined
            label="Description de l'entreprise"
            type="textarea"
          />
        </div>
        <div class="row justify-center q-mb-md">
          <q-input
            type="url"
            required
            v-model="experience.urlEntreprise"
            class="col-8"
            filled
            color="secondary"
            outlined
            label="Url vers l'entreprise"
          />
        </div>
        <p class="text-center">Description de l'expérience professionnelle</p>
        <div class="row justify-center q-mb-md">
          <q-editor
            required
            class="q-mb-md"
            v-model="experience.desEx"
            :toolbar="[
              [
                {
                  label: utils.lang.editor.align,
                  icon: utils.iconSet.editor.align,
                  fixedLabel: true,
                  options: ['left', 'center', 'right', 'justify'],
                },
              ],
              ['bold', 'italic', 'strike', 'underline'],
              ['token', 'hr', 'link', 'custom_btn'],
              [
                {
                  label: utils.lang.editor.formatting,
                  icon: utils.iconSet.editor.formatting,
                  list: 'no-icons',
                  options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'code'],
                },
                {
                  label: utils.lang.editor.fontSize,
                  icon: utils.iconSet.editor.fontSize,
                  fixedLabel: true,
                  fixedIcon: true,
                  list: 'no-icons',
                  options: [
                    'size-1',
                    'size-2',
                    'size-3',
                    'size-4',
                    'size-5',
                    'size-6',
                    'size-7',
                  ],
                },
                ,
                'removeFormat',
              ],
              ['quote', 'unordered', 'ordered', 'outdent', 'indent'],
              ['undo', 'redo'],
              ['viewsource'],
            ]"
          />
        </div>
        <div class="row justify-center q-mb-lg">
          <q-btn
            type="submit"
            :loading="loading"
            color="secondary"
            outline
            :label="!update ? 'Ajouter' : 'Mettre à jour'"
          />
        </div>
      </main>
    </q-form>
  </div>
</template>
<script>
import { useQuasar } from "quasar";
export default {
  props: {
    propsExperience: {
      type: Object,
      required: true,
    },
    lastTitre: {
      required: false,
      type: String,
    },
    update: {
      required: false,
      default: false,
    },
  },
  data() {
    return {
      experience: this.propsExperience,
      utils: useQuasar(),
      loading: false,
    };
  },
  methods: {
    async submit() {
      if (!this.update) {
        await this.addExeperience();
      } else {
        await this.updateExperience();
      }
    },
    async addExperience() {
      this.loading = true;
      await this.$store.dispatch("createExperience", {
        experience: this.experience,
      });
      this.loading = false;
      this.$router.push({ name: "experiencesIndex" });
    },
    async updateExperience() {
      this.loading = true;
      await this.$store.dispatch("updateExperience", {
        experience: this.experience,
        lastTitre: this.lastTitre,
      });
      this.loading = false;
    },
  },
};
</script>
