<template>
  <div class="q-mt-md q-mb-md" v-if="skill">
    <section class="row justify-center">
      <div class="col-10">
        <FormSkill :lastLabel="this.$route.params.label" :update="true" :skill="skill" />
      </div>
    </section>
  </div>
</template>
<script>
import FormSkill from "src/components/skill/FormSkill.vue";
export default {
  components: {
    FormSkill,
  },
  data() {
    return {
      skill: null,
    };
  },
  async mounted() {
    this.skill = await this.$store.dispatch("fetchSkill", {
      label: this.$route.params.label,
    });
  },
};
</script>
