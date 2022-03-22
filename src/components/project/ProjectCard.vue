<template>
  <div>
    <div class="container">
      <div class="row justify-center">
        <div class="col">
          <q-card class="my-card">
            <q-parallax
              :height="150"
              :width="100"
              src="https://cdn.pixabay.com/photo/2018/05/03/21/49/android-3372580_960_720.png"
            >
            </q-parallax>
            <q-card-section>
              <div class="text-h6">{{ project.name }}</div>
            </q-card-section>
            <div class="q-pa-md q-gutter-md">
              <q-badge
                v-for="(skill, index) in project.skills"
                :key="index"
                outline
                color="primary"
                :label="skill.label"
              />
            </div>
            <q-card-section>
              <p class="text-justify">
                {{ project.description }}
              </p>
            </q-card-section>
            <q-card-section>
              <div class="row justify-center q-mt-sm">
                <q-btn
                  outline
                  color="secondary"
                  :label="'Voir les projets : ' + Projet"
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
    proProject: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      project: this.proProject,
    };
  },
};
</script>
