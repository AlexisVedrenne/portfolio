<template>
  <div>
    <h6>{{ user }}</h6>
    <h6>{{ label }}</h6>
    <q-input v-model="label"></q-input>
    <q-btn @click="addProject">Ajouter au projets</q-btn>
    <div v-if="projects">
      <div v-for="(project, index) in projects" :key="index">
        <h1>{{ project }}</h1>
      </div>
    </div>
    <div v-else>
      <h5>Aucun projet</h5>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      label: "",
      projects: [],
      user: null,
    };
  },
  async mounted() {
    this.projects = this.$store.getters.getProjects;
    console.log(this.$store.getters.getCurrentUser);
  },
  methods: {
    addProject() {
      this.$store.dispatch("createProject", {
        project: this.label,
      });
    },
  },
};
</script>
