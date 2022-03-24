<template>
  <div class="container q-mb-lg">
    <h6 class="text-center">Nom du projet : {{ proj.name }}</h6>
    <q-form @submit="onSubmit" class="q-gutter-md">
      <q-input
        filled
        v-model="proj.name"
        label="Titre du projet *"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Entrer le titre du projet ! ']"
      />

      <q-input
        filled
        type="textarea"
        v-model="proj.description"
        label="La description du projet *"
        lazy-rules
        :rules="[
          (val) => (val && val.length > 0) || 'Entrer la description du projet ! ',
        ]"
      />
      <p class="text-h6">Sélectionner les compétences liée au projet *</p>
      <div v-if="skills">
        <q-checkbox
          v-for="(skill, index) in skills"
          :key="index"
          v-model="proj.skills"
          :val="skill.label"
          :label="skill.label"
          :style="'color:' + skill.color"
        />
      </div>
      <div v-else class="row justify-center">
        <q-spinner-cube color="primary" size="5.5em" />
      </div>
      <q-select
        v-model="proj.type"
        :options="optionsLs"
        label="Selectionner le type du projet *"
      ></q-select>

      <q-input
        filled
        v-model="proj.image"
        label="Image du projet *"
        lazy-rules
        type="url"
        :rules="[(val) => (val && val.length > 0) || 'Mettre une image au projet']"
        required
      />
      <q-input
        filled
        v-model="proj.git"
        label="Lien vers le git du projet *"
        lazy-rules
        type="url"
      />
      <q-input
        filled
        v-model="proj.demo"
        label="Lien vers la démonstration du projet"
        lazy-rules
        type="url"
      />
      <q-toggle
        v-model="proj.details.state"
        checked-icon="check"
        color="green"
        unchecked-icon="clear"
        label="Ajouter des détails au projet"
      />
      <section v-if="proj.details.state">
        <div class="row justify-center q-mb-sm">
          <q-btn @click="addSection" push color="primary" label="Ajouter une section" />
        </div>
        <p class="text-h6">Ecire le context du projet</p>
        <q-editor
          class="q-mb-md"
          v-model="proj.details.context[0]"
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
        <p class="text-h6">Image éventuelle pour le contexte</p>
        <q-file v-model="proj.details.context[1]" accept="image/*" />

        <section class="columns justify-center">
          <article
            v-for="(section, index) in proj.details.sections"
            :key="index"
            class="row"
          >
            <div class="col">
              <p class="text-h6">Section numéro {{ index }}</p>
              <q-input
                v-model="section[0]"
                class="q-mb-md"
                :label="'Titre de la section ' + index"
                :id="`inSec-${index}`"
              />
              <q-editor
                :id="`editorSec-${index}`"
                class="q-mb-md"
                v-model="section[1]"
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
              <q-file
                :label="'Image pour la section ' + index"
                v-model="section[2]"
                accept="image/*"
              />
            </div>
          </article>
        </section>
      </section>
      <div class="row justify-center">
        <q-btn
          :loading="loading"
          label="Ajouter le projet"
          type="submit"
          color="secondary"
          outline
        />
      </div>
    </q-form>
  </div>
</template>
<script>
import { useQuasar } from "quasar";
import { ref } from "vue";
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      proj: this.project,
      optionsLs: ["scolaire", "entreprise", "perso"],
      skillsRef: [],
      skills: [],
      selected: [],
      loading: false,
      utils: useQuasar(),
      model: ref(null),
    };
  },
  async mounted() {
    this.skills = await this.$store.dispatch("fetchAllSkills");
  },
  methods: {
    async onSubmit() {
      this.loading = true;
      let rep = await this.$store.dispatch("createProject", {
        project: this.proj,
      });
      this.loading = false;
    },
    addSection() {
      this.proj.details.sections.push(["", "Ecrire dans cette section", ref(null)]);
      this.utils.notify(
        "Section numéro " + (this.proj.details.sections.length - 1) + " ajouté"
      );
    },
  },
};
</script>
