<template>
  <div class="column items-center">
    <q-btn
      :to="{ name: 'addSkill' }"
      class="q-mb-md q-mt-md"
      color="secondary"
      flat
      label="Ajouter une compétence"
    />
    <q-list
      bordered
      class="rounded-borders"
      :style="
        utils.screen.lt.sm
          ? 'width: 350px'
          : utils.screen.lt.md
          ? 'width: 600px'
          : 'width: 1000px'
      "
    >
      <q-item-label header>Listes des compétences existantes</q-item-label>
      <q-intersection
        once
        transition="scale"
        v-for="(skill, index) in skills"
        :key="index"
      >
        <q-item>
          <q-item-section avatar top>
            <q-img rounded :src="skill.image" style="height: 34px; width: 34px" />
          </q-item-section>

          <q-item-section top class="col-2 gt-sm">
            <q-item-label class="q-mt-sm">{{ skill.label }}</q-item-label>
          </q-item-section>

          <q-item-section top>
            <q-item-label lines="1">
              <span :style="'color:' + skill.color" class="text-weight-medium"
                >Type de compétence</span
              >
              <span class="text-grey-8 text-bold"> - {{ skill.type }}</span>
            </q-item-label>
            <q-item-label
              lines="1"
              class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase"
            >
              <q-linear-progress
                size="25px"
                :value="skill.level / 100"
                class="q-mt-md"
                :color="
                  skill.level < 30
                    ? 'negative'
                    : '' || (skill.level >= 30 && skill.level < 70)
                    ? 'warning'
                    : '' || skill.level >= 70
                    ? 'positive'
                    : ''
                "
              >
                <div class="absolute-full flex flex-center">
                  <q-badge color="white" text-color="accent" :label="skill.level + '%'" />
                </div>
              </q-linear-progress>
            </q-item-label>
          </q-item-section>

          <q-item-section top side>
            <div class="text-grey-8 q-gutter-xs">
              <q-btn
                color="negative"
                class="gt-xs"
                size="12px"
                flat
                dense
                round
                icon="delete"
                @click="confirm(skill.label)"
              />
              <q-btn class="gt-xs" size="12px" flat dense round icon="edit" />
              <q-btn class="lt-sm" size="12px" flat dense round icon="more_vert" />
            </div>
          </q-item-section>
        </q-item>
        <q-separator spaced />
      </q-intersection>
    </q-list>
  </div>
</template>

<script>
import { useQuasar } from "quasar";
export default {
  data() {
    return {
      skills: [],
      utils: useQuasar(),
    };
  },
  async mounted() {
    this.skills = await this.$store.dispatch("fetchAllSkills");
  },
  methods: {
    confirm(skill) {
      this.utils
        .dialog({
          title: "Attention !",
          message: "Vous etes sur de vouloir supprimer la compétence " + skill + " ?",
          cancel: true,
          persistent: true,
          ok: {
            label: "Supprimer",
            color: "negative",
            flat: true,
          },
          cancel: {
            label: "fermer",
            flat: true,
            color: "secondary",
          },
        })
        .onOk(() => {
          // console.log('>>>> OK')
        })
        .onOk(() => {
          // console.log('>>>> second OK catcher')
        })
        .onCancel(() => {
          // console.log('>>>> Cancel')
        })
        .onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
        });
    },
  },
};
</script>
