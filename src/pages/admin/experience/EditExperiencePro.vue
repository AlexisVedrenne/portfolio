<template>
  <div>
    <q-btn
      :to="{ name: 'experiencesIndex' }"
      round
      flat
      size="35px"
      color="secondary"
      icon="arrow_circle_left"
    />
    <div v-if="experience">
      <FormExperience
        :lastTitre="this.$route.params.titre"
        :update="true"
        :propsExperience="experience"
      />
    </div>
  </div>
</template>
<script>
import FormExperience from "src/components/experience/FormExperience.vue";
export default {
  components: {
    FormExperience,
  },
  data() {
    return {
      experience: null,
    };
  },
  async mounted() {
    this.experience = await this.$store.dispatch("fetchExperience", {
      titre: this.$route.params.titre,
    });
  },
};
</script>
