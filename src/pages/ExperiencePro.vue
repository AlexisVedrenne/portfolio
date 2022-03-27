<template>
  <div>
    <q-parallax :height="200">
      <template v-slot:media>
        <img
          src="https://www.manager-go.com/assets/Uploads/_resampled/ResizedImageWzc2MCwyNTVd/parcours-professionnel.jpg"
        />
      </template>
    </q-parallax>
    <main class="container">
      <div class="q-pa-md column justify-center q-gutter-lg">
        <q-intersection
          v-for="(exe, index) in experiences"
          :key="index"
          transition="scale"
          class="q-mb-md"
        >
          <q-card class="my-card col-sm-4" bordered>
            <q-card-section>
              <div class="text-overline text-orange-9">Ville de {{ exe.ville }}</div>
              <div class="text-h5 q-mt-sm q-mb-xs">{{ exe.titre }}</div>
              <div style="font-size: 15px" class="text-caption text-grey">
                {{ exe.desEntreprise }}
              </div>
            </q-card-section>

            <q-card-actions>
              <q-btn
                :href="exe.urlEntreprise"
                flat
                color="accent"
                label="En savoir plus l'entreprise"
                target="_blank"
              />

              <q-btn
                color="grey"
                label="Description de l'expérience"
                flat
                dense
                :icon="expandeds[index].val ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                @click="expandeds[index].val = !expandeds[index].val"
              />
            </q-card-actions>

            <q-slide-transition>
              <div v-show="expandeds[index].val">
                <q-separator />
                <q-card-section v-html="exe.desEx" class="text-subitle2">
                </q-card-section>
              </div>
            </q-slide-transition>
          </q-card>
        </q-intersection>
      </div>
    </main>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  data() {
    return {
      experiences: [],
      expandeds: [],
    };
  },
  async mounted() {
    this.experiences = await this.$store.dispatch("fetchAllExperiences");
    for (let i = 0; i < this.experiences.length; i++) {
      this.expandeds.push({ val: false });
    }
  },
};
</script>
