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
    <FormExperience :propsExperience="experience" />
  </div>
</template>
<script>
import { useQuasar } from "quasar";
import FormExperience from "src/components/experience/FormExperience.vue";
export default {
  components: {
    FormExperience,
  },
  data() {
    return {
      utils: useQuasar(),
      loading: false,
      experience: {
        ville: "",
        titre: "",
        desEntreprise: "",
        desEx: "",
        urlEntreprise: "",
      },
    };
  },
};
</script>
