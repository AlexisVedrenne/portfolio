<template>
  <div>
    <h6 class="text-center">Nom de la compétences : {{ skill.label }}</h6>
    <q-form @submit="submit">
      <div class="container">
        <div class="row justify-center">
          <div class="col-md q-mr-lg">
            <q-color v-model="ski.color" class="my-picker" />
          </div>
          <div class="col-md-8 col-sm-8">
            <div class="row justify-center">
              <div class="col q-mb-sm">
                <q-input
                  v-model="ski.label"
                  lazy-rules
                  :rules="[
                    (val) =>
                      (val && val.length > 0) || 'Entrer le nom de la compétence !',
                  ]"
                  label="Nom de la compétence"
                ></q-input>
              </div>
            </div>
            <div class="row justify-center">
              <div class="col q-mb-sm">
                <q-select
                  v-model="ski.type"
                  lazy-rules
                  :options="options"
                  label="Selectionner le type de la compétence"
                ></q-select>
              </div>
            </div>
            <div class="row justify-center">
              <div class="col q-mb-sm">
                <q-badge color="accent">
                  Niveau de la compétence : {{ skill.level + "%" }}
                </q-badge>
                <q-slider
                  v-model="ski.level"
                  :min="0"
                  :max="100"
                  lazy-rules
                  :step="0.5"
                />
              </div>
            </div>
            <div class="row justify-center"></div>
            <div class="row justify-center">
              <div class="col q-mb-sm">
                <q-input
                  v-model="ski.image"
                  lazy-rules
                  :rules="[(val) => (val && val.length > 0) || 'Mettre une image ! ']"
                  label="Mettre l'image de la compétence"
                ></q-input>
              </div>
            </div>
            <div class="row justify-center">
              <q-btn
                class="q-mr-sm"
                :loading="loading"
                type="submit"
                outline
                color="accent"
                :label="!update ? 'Ajouter la compétence' : 'Mettre à jour la compétence'"
              />
            </div>
          </div>
        </div>
      </div>
    </q-form>
  </div>
</template>

<script>
export default {
  props: {
    skill: {
      type: Object,
      required: true,
    },
    update: {
      required: false,
      default: false,
    },
    lastLabel: {
      required: false,
    },
  },
  data() {
    return {
      ski: this.skill,
      loading: false,
      options: ["Back", "Front", "Framework", "Management"],
    };
  },
  methods: {
    async submit() {
      if (!this.update) {
        await this.addSkill();
      } else {
        await this.updateSkill();
      }
    },
    async addSkill() {
      this.loading = true;
      let rep = await this.$store.dispatch("createSkills", { skill: this.ski });
      this.loading = false;
      this.$router.push({ name: "skillsIndex" });
    },
    async updateSkill() {
      this.loading = true;
      let rep = await this.$store.dispatch("updateSkill", {
        skill: this.ski,
        lastLabel: this.lastLabel,
      });
      this.loading = false;
    },
  },
};
</script>
