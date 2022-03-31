<template>
  <div class="container q-mb-lg">
    <h6 class="text-center">Nom du projet : {{ proj.name }}</h6>
    <q-form @submit="onSubmit" class="q-gutter-md">
      <q-input required filled v-model="proj.name" label="Titre du projet *" />

      <q-input
        filled
        required
        type="textarea"
        v-model="proj.description"
        label="La description du projet *"
      />
      <p class="text-h6">Sélectionner les compétences liée au projet *</p>
      <div v-if="skills">
        <q-checkbox
          required
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
      <p>Selectionner un type de projet</p>
      <q-select
        transition-show="flip-up"
        transition-hide="flip-down"
        filled
        required
        v-model="proj.type"
        :options="optionsLs"
        label="Selectionner le type du projet *"
      ></q-select>

      <q-file
        v-if="!update"
        outlined
        required
        v-model="proj.image"
        accept="image/*,.mp4"
        label="Image ou vidéo du projet *"
      >
        <template v-slot:prepend>
          <q-icon name="attach_file" />
        </template>
      </q-file>
      <q-input
        filled
        v-model="proj.git"
        label="Lien vers le git du projet *"
        type="url"
      />
      <q-input
        filled
        v-model="proj.demo"
        label="Lien vers la démonstration du projet"
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
        <q-file
          outlined
          label="Image ou vidéo pour la banière"
          v-model="proj.details.baniere"
          accept="image/*"
          v-if="!proj.details.baniere"
        >
          <hr />
          <template v-slot:prepend>
            <q-icon name="attach_file" />
          </template>
        </q-file>
        <p class="text-h6">Ecire le context du projet</p>
        <q-editor
          class="q-mb-md"
          v-model="proj.details.context.des"
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
        <div class="row jutify-center">
          <q-file
            class="col"
            outlined
            label="Image ou vidéo pour le context"
            v-model="proj.details.context.file"
            accept="image/*"
            v-if="!proj.details.context.file"
          >
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
          <q-btn
            class="col"
            @click="deleteImage('contexte')"
            flat
            color="negative"
            label="Supprimer le fichier"
            v-if="proj.details.context.file"
          />
        </div>
        <hr />
        <section class="columns justify-center">
          <article
            v-for="(section, index) in proj.details.sections"
            :key="index"
            class="row"
          >
            <div class="col">
              <p class="text-h6">Section n°{{ index }} : {{ section.titre }}</p>
              <q-input
                v-model="section.titre"
                class="q-mb-md"
                :label="'Titre de la section ' + index"
                :id="`inSec-${index}`"
              />
              <q-editor
                :id="`editorSec-${index}`"
                class="q-mb-md"
                v-model="section.des"
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
              <div class="row">
                <q-file
                  outlined
                  :label="'Image ou vidéo pour la section ' + index"
                  v-model="section.file"
                  accept="image/*,.mp4"
                  v-if="!section.file"
                  class="col"
                >
                  <template v-slot:prepend>
                    <q-icon name="attach_file" />
                  </template>
                </q-file>
                <q-btn
                  class="col"
                  @click="deleteImage(index)"
                  flat
                  color="negative"
                  label="Supprimer le fichier"
                  v-if="section.file"
                />
              </div>
            </div>
            <div class="col">
              <q-btn
                @click="deleteSection(index)"
                color="negative"
                flat
                label="Supprimer la section"
              />
            </div>
            <hr />
          </article>
        </section>
      </section>
      <div class="row justify-center">
        <q-btn
          :loading="loading"
          :label="!update ? 'Ajouter le projet' : 'Mettre à jour le projet'"
          type="submit"
          color="accent"
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
    update: {
      required: false,
      default: false,
    },
    lastName: {
      required: false,
      type: String,
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
      if (!this.update) {
        await this.addProject();
      } else {
        await this.updateProject();
      }
    },
    async addProject() {
      this.loading = true;
      let rep = await this.$store.dispatch("createProject", {
        project: this.proj,
      });
      this.loading = false;
    },
    async updateProject() {
      this.loading = true;
      let rep = await this.$store.dispatch("updateProject", {
        project: this.proj,
        lastName: this.lastName,
      });
      this.loading = false;
    },
    addSection() {
      this.proj.details.sections.push({
        titre: "",
        des: "Ecrire dans cette section",
        file: null,
        fileType: null,
      });
      this.utils.notify({
        message: "Section numéro " + (this.proj.details.sections.length - 1) + " ajouté",
        color: "info",
        textColor: "dark",
      });
    },
    deleteImage(index) {
      this.utils
        .dialog({
          title: "Attention !",
          message: "Vous etes sur de vouloir supprimer l'image ?",
          cancel: true,
          persistent: true,
          ok: {
            label: "Supprimer",
            color: "negative",
            flat: true,
          },
          cancel: {
            label: "fermer",
            flat: true,
            color: "secondary",
          },
        })
        .onOk(async () => {
          if (index != "contexte") {
            this.proj.details.sections[index].file = null;
            this.utils.notify({
              message: "Image supprimée !",
              color: "warning",
              textColor: "dark",
            });
          } else {
            this.proj.details.context.file = null;
          }
        });
    },
    deleteSection(index) {
      this.utils
        .dialog({
          title: "Attention !",
          message: "Vous etes sur de vouloir supprimer la section numéro " + index + " ?",
          cancel: true,
          persistent: true,
          ok: {
            label: "Supprimer",
            color: "negative",
            flat: true,
          },
          cancel: {
            label: "fermer",
            flat: true,
            color: "secondary",
          },
        })
        .onOk(async () => {
          this.proj.details.sections.splice(this.proj.details.sections.indexOf(index));
          this.utils.notify({
            message: "Section numéro " + index + " supprimée",
            color: "warning",
            textColor: "dark",
          });
        });
    },
  },
};
</script>
