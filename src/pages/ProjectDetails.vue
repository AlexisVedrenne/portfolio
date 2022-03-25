<template>
  <div v-if="project">
    <q-parallax :height="200">
      <template v-slot:media>
        <img :src="project.details.banniere" />
      </template>

      <h1 class="text-dark text-bold">{{ project.name }}</h1>
    </q-parallax>

    <main class="container">
      <section class="row justify-center bg-grey-3 q-pa-md">
        <article class="col q-mr-md">
          <q-img
            class="items-center"
            :ratio="16 / 9"
            :src="project.details.context.file"
          />
        </article>
        <article class="col-7">
          <h3 class="text-bold text-left">Context du projet</h3>
          <div style="font-size: 18px" v-html="project.details.context.des"></div>
        </article>
      </section>
      <section
        v-for="(section, index) in project.details.sections"
        :key="index"
        class="row justify-center items-center q-ml-md q-mt-lg"
      >
        <article v-if="section.fileType.includes('image')" class="col-8">
          <h3 class="text-bold text-left">{{ section.titre }}</h3>
          <div v-html="section.des"></div>
        </article>
        <article
          v-if="section.fileType.includes('video')"
          class="col q-mr-lg q-mt-md items-center"
        >
          <q-video class="items-center" :ratio="16 / 9" :src="section.file" />
        </article>
        <article
          v-if="section.fileType.includes('image')"
          class="col q-mr-md items-center"
        >
          <q-img class="items-center" :src="section.file" />
        </article>
        <article v-else class="col-8">
          <h3 class="text-bold text-left">{{ section.titre }}</h3>
          <div v-html="section.des"></div>
        </article>
      </section>
    </main>
  </div>
  <div v-else></div>
</template>
<script>
export default {
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
