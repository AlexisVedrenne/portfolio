<template>
  <div>
    <main class="container">
      <q-parallax :height="200">
        <template v-slot:media>
          <img src="http://alltogether.be/wp-content/uploads/2017/05/projectcycle.jpg" />
        </template>
      </q-parallax>
      <section v-if="res">
        <section
          v-for="(project, index) in projects"
          :key="index"
          class="q-ml-sm q-mt-sm"
        >
          <transition
            appear
            enter-active-class="animated zoomInLeft"
            leave-active-class="animated zoomOutLeft"
          >
            <p class="text-h6 text-uppercase" v-if="project != ''">
              {{ titre[index] }}
            </p>
          </transition>
          <div class="row justify-center q-col-gutter-lg q-mt-sm q-mb-sm">
            <div v-for="(type, index) in project" :key="index" class="col-md-4 col-sm-5">
              <q-intersection transition="scale">
                <ProjectCard :proProject="type" />
              </q-intersection>
            </div>
          </div>
        </section>
      </section>
      <section class="q-mt-xl" v-else>
        <q-btn
          :to="{ name: 'skills' }"
          round
          flat
          size="35px"
          color="secondary"
          icon="arrow_circle_left"
          style="height: 100px"
        />
        <div class="row justify-center">
          <q-spinner-cube color="primary" size="5.5em" />
        </div>
        <p class="text-center text-grey-6 q-mt-md">
          Si le chargement dure trop longtemps, il est probable qu'il n'y ai aucun projets
          {{ this.$route.params.type }}
        </p>
      </section>
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
      res: false,
      titre: {
        perso: "Projets personels",
        entreprise: "Projet réaliser en entreprise",
        scolaire: "Projet réaliser en classe",
      },
    };
  },
  async mounted() {
    if (this.$route.params.type) {
      const projects = await this.$store.dispatch("fetchAllProjectBySkill", {
        skillName: this.$route.params.type,
      });

      this.filterProjects(projects);
    } else {
      const projects = await this.$store.dispatch("fetchAllProjects");
      this.filterProjects(projects);
    }
  },
  methods: {
    filterProjects(projects) {
      if (projects.length > 0) {
        this.projects.perso = projects.filter((p) => p.type === "perso");
        this.projects.entreprise = projects.filter((p) => p.type === "entreprise");
        this.projects.scolaire = projects.filter((p) => p.type === "scolaire");
        this.res = true;
      }
    },
  },
};
</script>
