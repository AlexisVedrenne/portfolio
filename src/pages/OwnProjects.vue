<template>
  <div>
    <main class="container">
      <q-parallax :height="200">
        <template v-slot:media>
          <img src="https://pic.clubic.com/v1/images/1709824/raw" />
        </template>
      </q-parallax>
      <section v-for="(project, index) in projects" :key="index" class="q-ml-sm q-mt-sm">
        <transition
          appear
          enter-active-class="animated zoomInLeft"
          leave-active-class="animated zoomOutLeft"
        >
          <p class="text-h6 text-uppercase" v-if="project != ''">
            {{ titre[index] }}
          </p>
        </transition>
        <div class="row q-col-gutter-sm q-ma-md">
          <div
            :hidden="loading"
            v-for="(type, index) in project"
            :key="index"
            class="col-4"
          >
            <q-intersection transition="scale">
              <ProjectCard :proProject="type" :skills="type.skills" />
            </q-intersection>
          </div>
        </div>
      </section>
      <!-- <section class="q-mt-xl" v-else>
        <div class="row justify-center">
          <q-spinner-cube color="primary" size="5.5em" />
        </div>
      </section> -->
    </main>
  </div>
</template>
<script>
import ProjectCard from "src/components/project/ProjectCard.vue";
export default {
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects: {
        perso: [],
        entreprise: [],
        scolaire: [],
      },
      titre: {
        perso: "Projets personels",
        entreprise: "Projet réaliser en entreprise",
        scolaire: "Projet réaliser en classe",
      },
    };
  },
  async mounted() {
    await this.refresh();
  },
  methods: {
    async refresh() {
      const projects = await this.$store.dispatch("fetchAllProjects");
      this.projects.perso = projects.filter((p) => p.type === "perso");
      this.projects.entreprise = projects.filter((p) => p.type === "entreprise");
      this.projects.scolaire = projects.filter((p) => p.type === "scolaire");
    },
  },
};
</script>
