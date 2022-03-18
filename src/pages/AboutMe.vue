<template>
  <div>
    <div class="container">
      <div class="row justify-center">
        <div class="col-4 q-mr-xl">
          <FormSkill :skill="skill" />
        </div>
        <div class="col-4">
          <h6 class="text-center">Prévisualisation de la compétence</h6>
          <q-scroll-area style="height: 400px">
            <div style="height: 100px"></div>
            <SkillCard :skill="skill" />
            <div style="height: 200px"></div>
          </q-scroll-area>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormSkill from "src/components/skill/FormSkill.vue";
import SkillCard from "src/components/skill/SkillCard.vue";
export default {
  name: "addSkill",
  components: {
    FormSkill,
    SkillCard,
  },
  data() {
    return {
      skill: {
        label: null,
        type: null,
        level: 0.0,
        image: null,
      },
    };
  },
};
</script>
