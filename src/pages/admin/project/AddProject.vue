<template>
  <div>
    <div class="container">
      <div class="row justify-center">
        <div class="col-6 q-mr-xl">
          <FormProject :project="project" />
        </div>
        <div class="col-4">
          <h6 class="text-center">Prévisualisation du projet</h6>
          <q-scroll-area style="height: 400px">
            <div style="height: 100px"></div>
            <ProjectCard :proProject="project" />
            <div style="height: 200px"></div>
          </q-scroll-area>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormProject from "src/components/project/FormProject.vue";
import ProjectCard from "src/components/project/ProjectCard.vue";
export default {
  name: "addProject",
  components: {
    FormProject,
    ProjectCard,
  },
  data() {
    return {
      project: {
        demo: "",
        description: null,
        git: null,
        image: null,
        name: "",
        skills: [],
        type: "",
        imageName: "",
        details: {
          baniere: null,
          state: false,
          context: { des: "Ecrire le contexte du projet ici...", file: null },
          sections: [],
        },
      },
    };
  },
};
</script>
