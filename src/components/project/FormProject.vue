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
      <div v-if="skillsRef">
        <q-checkbox
          v-for="(skill, index) in skillsRef"
          :key="index"
          v-model="proj.skills"
          :val="skill"
          :label="skills[index].label"
          :style="'color:' + skills[index].color"
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
      />
      <q-input
        filled
        v-model="proj.git"
        label="Lien vers le git du projet *"
        lazy-rules
        type="url"
        :rules="[
          (val) => (val && val.length > 0) || 'Mettre un lien vers le git du projet !',
        ]"
      />
      <q-input
        filled
        v-model="proj.demo"
        label="Lien vers la démonstration du projet"
        lazy-rules
        type="url"
      />
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
    };
  },
  async mounted() {
    let skills = await this.$store.dispatch("fetchAllSkillsRef");
    this.skillsRef = skills;
    this.skillsRef.forEach((skill) => {
      this.skills.push(skill.data());
    });
  },
  methods: {
    async onSubmit() {
      this.loading = true;
      let rep = await this.$store.dispatch("createProject", {
        project: this.proj,
      });
      this.loading = false;
    },
  },
};
</script>
