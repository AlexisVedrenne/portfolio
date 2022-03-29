<template>
  <div class="q-mt-md q-mb-md" v-if="project">
    <q-btn
      :to="{ name: 'projectsIndex' }"
      round
      flat
      size="35px"
      color="secondary"
      icon="arrow_circle_left"
    />
    <section class="row justify-center">
      <div class="col-10">
        <FormProject
          :lastName="this.$route.params.name"
          :update="true"
          :project="project"
        />
      </div>
    </section>
  </div>
</template>
<script>
import FormProject from "src/components/project/FormProject.vue";
export default {
  components: {
    FormProject,
  },
  data() {
    return {
      project: null,
    };
  },
  async mounted() {
    this.project = await this.$store.dispatch("fechtProject", {
      name: this.$route.params.name,
    });
  },
};
</script>
