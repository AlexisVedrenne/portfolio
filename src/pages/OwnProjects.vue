<template>
  <div>
    <main class="container">
      <q-parallax :height="200">
        <template v-slot:media>
          <img src="https://pic.clubic.com/v1/images/1709824/raw" />
        </template>
      </q-parallax>
      <section v-if="projects">
        <div class="row q-col-gutter-sm q-ma-md">
          <div class="col-4" v-for="(project, index) in projects" :key="index">
            <transition
              appear
              enter-active-class="animated zoomInLeft"
              leave-active-class="animated zoomOutLeft"
            >
              <q-intersection transition="scale">
                <ProjectCard :proProject="project" />
              </q-intersection>
            </transition>
          </div>
        </div>
      </section>
      <section class="q-mt-xl" v-else>
        <div class="row justify-center">
          <q-spinner-cube color="primary" size="5.5em" />
        </div>
      </section>
    </main>
  </div>
</template>
<script>
import ProjectCard from "src/components/Project/ProjectCard.vue";
export default {
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects: null,
    };
  },
  async mounted() {
    this.projects = await this.$store.dispatch("fetchAllProjects");
  },
};
</script>
