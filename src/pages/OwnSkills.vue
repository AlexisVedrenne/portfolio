<template>
  <div>
    <main class="container">
      <q-parallax :height="200">
        <template v-slot:media>
          <img src="https://pic.clubic.com/v1/images/1709824/raw" />
        </template>
      </q-parallax>
      <section v-if="skills">
        <div class="row justify-center q-col-gutter-lg q-mt-sm">
          <div class="col-md-4 col-sm-5" v-for="(skill, index) in skills" :key="index">
            <q-intersection once transition="scale">
              <SkillCard :skill="skill" />
            </q-intersection>
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
import SkillCard from "src/components/skill/SkillCard.vue";
export default {
  components: {
    SkillCard,
  },
  data() {
    return {
      skills: null,
    };
  },
  async mounted() {
    this.skills = await this.$store.dispatch("fetchAllSkills");
  },
};
</script>
