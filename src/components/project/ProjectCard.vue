<template>
  <div>
    <div class="container">
      <div class="row justify-center">
        <div class="col-sm" style="width: 350px">
          <q-card class="my-card">
            <q-parallax :height="150" :width="100" :src="project.image"> </q-parallax>
            <q-card-section>
              <div class="text-h6">{{ project.name }}</div>
            </q-card-section>
            <div class="q-pa-md q-gutter-md">
              <!-- <q-btn label="Voir" @click="seeSkill" /> -->
              <q-badge
                v-for="(skill, index) in project.skills"
                :key="index"
                outline
                :style="'color:' + skill.color"
                :label="skill.label"
              />
            </div>
            <q-card-actions>
              <q-btn
                label="Description du projet"
                color="grey"
                flat
                dense
                :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                @click="expanded = !expanded"
              />
            </q-card-actions>
            <q-slide-transition>
              <div v-show="expanded">
                <q-separator />
                <q-card-section class="text-subitle2">
                  <p style="font-size: 18px" class="text-justify">
                    {{ project.description }}
                  </p>
                </q-card-section>
              </div>
            </q-slide-transition>
            <q-card-section>
              <div v-if="project.details.state" class="row justify-center">
                <q-btn
                  :href="'/#/my-project/details/' + project.name"
                  outline
                  color="accent"
                  label="En savoir plus"
                  push
                ></q-btn>
              </div>
              <div class="row justify-center q-mt-sm">
                <q-btn
                  v-if="project.git"
                  outline
                  color="accent"
                  label="Voir le dépot git"
                  class="q-mr-sm"
                  :href="project.git"
                  target="_blank"
                ></q-btn>
                <q-btn
                  v-if="project.demo"
                  outline
                  color="accent"
                  label="Voir la démonstration"
                  :href="project.demo"
                  target="_blank"
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
import { ref } from "vue";
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
      expanded: ref(false),
    };
  },
  methods: {
    seeSkill() {
      console.log(this.skills);
    },
  },
};
</script>
