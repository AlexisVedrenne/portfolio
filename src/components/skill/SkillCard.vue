<template>
  <div>
    <div class="container">
      <div class="row justify-center">
        <div class="col">
          <q-card class="my-card">
            <q-parallax :height="150" :width="100" :src="skil.image">
              <h1 class="text-dark">{{ skil.label }}</h1>
            </q-parallax>

            <q-card-section>
              <div class="text-overline">
                <q-badge outline :style="'color:' + skil.color" :label="skil.type" />
              </div>
              <q-linear-progress
                size="25px"
                :value="skil.level / 100"
                class="q-mt-md"
                :color="
                  skil.level < 30
                    ? 'negative'
                    : '' || (skil.level >= 30 && skil.level < 70)
                    ? 'warning'
                    : '' || skill.level >= 70
                    ? 'positive'
                    : ''
                "
              >
                <div class="absolute-full flex flex-center">
                  <q-badge color="white" text-color="accent" :label="skil.level + '%'" />
                </div>
              </q-linear-progress>
              <div class="row justify-center q-mt-sm">
                <q-btn
                  outline
                  :style="'color:' + skil.color"
                  :label="'Voir les projets : ' + skil.label"
                ></q-btn>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    skill: { type: Object, required: true },
  },
  data() {
    return {
      skil: this.skill,
    };
  },
  methods: {
    color() {
      if (this.skil > 30) {
        return "negative";
      } else if (this.skil > 30 && this.skil < 70) {
        return "warning";
      } else if (this.skil > 70) {
        return "positive";
      }
    },
  },
};
</script>
