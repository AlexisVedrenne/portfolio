<template>
  <div v-if="project">
    <q-parallax :height="200">
      <template v-slot:media>
        <img :src="project.details.baniere" />
      </template>
      <transition
        appear
        enter-active-class="animated flipInX"
        leave-active-class="animated flipInX"
        class="gt-sm"
      >
        <h1 class="text-accent text-bold">{{ project.name }}</h1>
      </transition>
      <transition
        appear
        enter-active-class="animated flipInX"
        leave-active-class="animated flipInX"
        class="lt-sm"
      >
        <h3 class="text-accent text-bold lt-sm">{{ project.name }}</h3>
      </transition>
    </q-parallax>

    <main class="container">
      <section class="row justify-center bg-grey-3 q-pa-md">
        <q-btn
          :to="{ name: 'projects' }"
          round
          flat
          size="35px"
          color="secondary"
          icon="arrow_circle_left"
          style="height: 100px"
        />
        <article v-if="project.details.context.file" class="col-sm q-mr-md">
          <transition
            appear
            enter-active-class="animated zoomIn"
            leave-active-class="animated zoomOut"
          >
            <q-img
              class="items-center"
              :ratio="16 / 9"
              :src="project.details.context.file"
            />
          </transition>
        </article>
        <article class="col-sm">
          <transition
            appear
            enter-active-class="animated fadeInRight"
            leave-active-class="animated fadeOutRight"
          >
            <h3 class="text-bold text-left">Context du projet</h3>
          </transition>
          <transition
            appear
            enter-active-class="animated slideInUp"
            leave-active-class="animated slideOutUp"
          >
            <div style="font-size: 18px" v-html="project.details.context.des"></div>
          </transition>
        </article>
      </section>
      <section
        v-for="(section, index) in project.details.sections"
        :key="index"
        class="row justify-center items-center q-ml-md q-mt-lg q-mb-lg"
      >
        <article
          v-if="section.file && section.fileType.includes('image')"
          class="col-sm-8"
        >
          <q-intersection transition="scale">
            <h3 class="text-bold text-left">{{ section.titre }}</h3>
            <div v-html="section.des"></div>
          </q-intersection>
        </article>
        <article
          v-if="section.file && section.fileType.includes('video')"
          class="col gt-sm q-mr-lg q-mt-md items-center"
        >
          <q-intersection transition="scale">
            <q-video :ratio="16 / 9" :src="section.file" />
          </q-intersection>
        </article>
        <article
          v-if="section.file && section.fileType.includes('image')"
          class="col q-mr-md items-center"
        >
          <q-intersection transition="scale">
            <q-img class="items-center" :src="section.file" />
          </q-intersection>
        </article>
        <article v-else class="col-sm-8">
          <q-intersection transition="scale">
            <h3 class="text-bold text-left">{{ section.titre }}</h3>
            <div v-html="section.des"></div>
          </q-intersection>
        </article>
        <article
          v-if="section.file && section.fileType.includes('video')"
          class="col lt-sm q-mr-lg q-mt-md items-center"
        >
          <q-video :ratio="16 / 9" :src="section.file" />
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
