<template>
  <div>
    <q-parallax :height="200">
      <template v-slot:media>
        <img src="http://alltogether.be/wp-content/uploads/2017/05/projectcycle.jpg" />
      </template>
    </q-parallax>
    <main style="margin-right: 200px; margin-left: 200px" class="container">
      <div v-for="(exe, index) in experiences" :key="index" class="q-mt-md q-mb-md">
        <section class="row q-mt-lg">
          <div class="col-8">
            <q-expansion-item
              class="shadow-1 overflow-hidden"
              style="border-radius: 20px"
              :label="exe.titre"
              header-class="bg-primary text-white text-h4"
              expand-icon-class="text-white"
            >
              <q-card>
                <q-card-section>
                  <p style="font-size: 18px">{{ exe.desEntreprise }}</p>
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </div>
          <q-btn
            :href="exe.urlEntreprise"
            target="_blank"
            color="accent"
            flat
            label="En savoir plus sur l'entreprise"
          />
        </section>
        <div class="row">
          <div v-html="exe.desEx" class="q-mt-lg col"></div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
export default {
  data() {
    return {
      experiences: [],
    };
  },
  async mounted() {
    this.experiences = await this.$store.dispatch("fetchAllExperiences");
  },
};
</script>
